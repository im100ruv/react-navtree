import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Each logical "route" has two components, one for
// the sidebar and one for the main area.
const routes = [
  {
    path: "/",
    exact: true,
    main: () => (
      <div>
        <h2>Home</h2>
        <h4>Welcome to IPL Data Analysis app.</h4>
        <p>Click on the appropriate nav on the sidebar to get corresponding statistics.</p>
      </div>
    )
  },
  {
    path: "/teams",
    sidebar: () => (
      <div style={{ padding: "1em" }}>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <Link to="/teams/mat-by-season" style={{ textDecoration: 'none' }}>Match By Season</Link>
          </li>
          <li>
            <Link to="/teams/won-stack" style={{ textDecoration: 'none' }}>Wins By Season</Link>
          </li>
          <li>
            <Link to="/teams/extra-runs" style={{ textDecoration: 'none' }}>Extra Runs By Team</Link>
          </li>
        </ul>
      </div>
    ),
    main: props => (
      <div>
        <h2>Teams</h2>
        <h4>IPL Team Analysis across seasons</h4>
        <p>Here is the list of all teams.</p>
        <p>........{props.getTeams}</p>
      </div>
    )
  },
  {
    path: "/teams/mat-by-season",
    exact: true,
    main: () => (
      <div>
        <h2>Teams</h2>
        <h4>IPL Teams Analysis per seasons</h4>
        <p>Here you would get the list of teams per season.</p>
      </div>
    )
  },
  {
    path: "/teams/won-stack",
    exact: true,
    main: () => (
      <div>
        <h2>Teams</h2>
        <h4>IPL Teams Win Analysis per team across seasons</h4>
        <p>Here you would get the list of teams won by teams per season.</p>
      </div>
    )
  },
  {
    path: "/teams/extra-runs",
    exact: true,
    main: () => (
      <div>
        <h2>Teams</h2>
        <h4>IPL Team Analysis for extra runs</h4>
        <p>Here you would get extra runs by teams in a year.</p>
      </div>
    )
  },
  {
    path: "/players",
    sidebar: () => (
      <div style={{ padding: "1em" }}>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <Link to="/players/bowler-economy" style={{ textDecoration: 'none' }}>Bowler Economy</Link>
          </li>
          <li>
            <Link to="/players/bat-high" style={{ textDecoration: 'none' }}>Top Individual Scores</Link>
          </li>
        </ul>
      </div>
    ),
    main: () => (
      <div>
        <h2>Players</h2>
        <h4>IPL Player Analysis across seasons</h4>
        <p>Here you would get the list of teams and their players.</p>
      </div>
    )
  },
  {
    path: "/players/bowler-economy",
    exact: true,
    main: () => (
      <div>
        <h2>Players</h2>
        <h4>IPL Player Analysis | Bowler Economy</h4>
        <p>Here you would get the list of top economical bowlers.</p>
      </div>
    )
  },
  {
    path: "/players/bat-high",
    exact: true,
    main: () => (
      <div>
        <h2>Players</h2>
        <h4>IPL Player Analysis | Highest Individual Scores</h4>
        <p>Here you would get the list of highest individual scores by batsmen.</p>
      </div>
    )
  }
];

export default routes;