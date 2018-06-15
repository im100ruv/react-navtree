import React from 'react';
import Wins from './Wins'

export default class Years extends React.Component {
  state = {
    years: undefined,
    wins: undefined,
    active: undefined
  }

  getYearWins = (i) => {
    if (this.state.active === i) {
      this.setState({
        active: undefined
      })
    } else {
      this.setState({
        active: i
      })
    }
  }

  componentWillMount() {
    this.props.fetchJsonData(`/api/teams/${this.props.shortTeam}`).then(teamYearWins => {
      this.setState({
        years: Object.keys(Object.values(teamYearWins)[0]),
        wins: Object.values(Object.values(teamYearWins)[0])
      })
    });
  }

  render() {
    let years
    if (this.state.years) {
      years = this.state.years.map((year, i) => {
        return (
          <React.Fragment>
            <li
              key={i}
              onClick={this.getYearWins.bind(this, i)}
            >
              {year} 
            </li>
            {this.state.active === i ? <Wins won={this.state.wins[i]} /> : ""}
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