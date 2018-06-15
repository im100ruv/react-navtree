import React from 'react';
import Wins from './Wins'

export default class Years extends React.Component {
  state = {
    years: undefined,
    wins: undefined,
    active: {}
  }

  getYearWins = (shortTeam, i) => {
    if (this.state.active[shortTeam] === i) {
      let newActive = this.state.active
      newActive[shortTeam] = undefined
      this.setState({
        active: newActive
      })
    } else {
      let newActive = this.state.active
      newActive[shortTeam] = i
      this.setState({
        active: newActive
      })
    }
  }

  componentWillMount() {
    this.props.fetchJsonData(`/api/teams/${this.props.shortTeam}`).then(teamYearWins => {
      this.setState({
        years: Object.keys(Object.values(teamYearWins)[0]),
        wins: Object.values(Object.values(teamYearWins)[0]),
        active: this.props.childActive
      })
    });
  }

  componentWillUnmount(){
    this.props.storeChildActive(this.state.active)
  }

  render() {
    let years
    if (this.state.years) {
      years = this.state.years.map((year, i) => {
        return (
          <React.Fragment>
            <li
              key={i}
              onClick={this.getYearWins.bind(this, this.props.shortTeam, i)}
            >
              {year}
            </li>
            {this.state.active[this.props.shortTeam] === i ? <Wins won={this.state.wins[i]} /> : ""}
          </React.Fragment>
        );
      })
    } else {
      years = <li>Loading</li>
    }
    return (
      <React.Fragment>
        <ul>
          {years}
        </ul>
      </React.Fragment>
    )
  }
}

// let teams = Object.keys(this.state.teamNames).map((name, i) => {
//   let abbr = name.match(/[A-Z]/g).join('')
//   return (
//     <React.Fragment>
//       <li
//         key={i}
//         onClick={this.getYearWins.bind(this, abbr, name)}
//       >
//         {name} ({abbr})
//       </li>
//       {this.state.teamNames[name] ? <Years key={`${i}y`} /> : ""}
//     </React.Fragment>
//   );
// })