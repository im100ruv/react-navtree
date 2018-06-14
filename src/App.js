import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routes from './components/routes';

class IplNavTree extends React.Component {
  getTeams = async () => {
    console.log("dfdfdf")
    const api_call = await fetch('http://localhost:8082/api/teams')
    const teamNames = await api_call.json()
    console.log(teamNames)
  }
  render() {
    return (
      <Router>
        <div style={{ display: "flex", height: "40.8em" }}>
          <div
            style={{
              padding: "1.5em",
              width: "15%",
              background: "#f0f0f0"
            }}
          >
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
              </li>
              <li>
                <Link to="/teams" style={{ textDecoration: 'none' }}>Teams</Link>
                <Route
                  key="1"
                  path={routes[1].path}
                  exact={routes[1].exact}
                  component={routes[1].sidebar}
                  getTeams={this.getTeams}
                />
              </li>
              <li>
                <Link to="/players" style={{ textDecoration: 'none' }}>Players</Link>
                <Route
                  key="5"
                  path={routes[5].path}
                  exact={routes[5].exact}
                  component={routes[5].sidebar}
                />
              </li>
            </ul>
          </div>

          <div style={{ flex: 1, padding: "2em" }}>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>
        </div>
      </Router>
    );
  }
}

export default IplNavTree;
