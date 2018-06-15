import React from "react";
import './App.css';
import Years from './components/Years';

class App extends React.Component {
  state = {
    teamNames: undefined,
    active: undefined
  }

  fetchJsonData = async (query) => {
    const api_call = await fetch(`http://localhost:8082${query}`)
    // const data = await api_call.json()
    return await api_call.json()
  }

  getYears = (i) => {
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
    this.fetchJsonData("/api/teams").then(teamNames => {
      this.setState({
        teamNames: teamNames
      })
    });
  }

  render() {
    let teams
    if (this.state.teamNames) {
      teams = this.state.teamNames.map((name, i) => {
        let abbr = name.match(/[A-Z]/g).join('')
        return (
          <React.Fragment>
            <li
              key={i}
              onClick={this.getYears.bind(this, i)}
            >
              {name} ({abbr})
            </li>
            {this.state.active === i ? <Years key={`${i}y`} shortTeam={abbr} fetchJsonData={this.fetchJsonData} /> : ""}
          </React.Fragment>
        );
      })
    } else {
      teams = <li>Loading</li>
    }
    return (
      <div className="App">
        <ul>
          {teams}
        </ul>
      </div>
    );
  }
}

export default App;
