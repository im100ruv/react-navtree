import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Each logical "route" has two components, one for
// the sidebar and one for the main area.
const routes = [
  {
    path: "/",
    exact: true,
    main: () => {
      return (
        <div>
          <h2>Home</h2>
          <h4>Welcome to IPL Data Analysis app.</h4>
          <p>Click on the appropriate nav on the sidebar to get corresponding statistics.</p>
        </div>
      )
    }
  },
  {
    path: "/matches",
    sidebar: () => {
      return (
        <div style={{ padding: "1em" }}>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/matches/mat-by-season" style={{ textDecoration: 'none' }}>Match By Season</Link>
            </li>
            <li>
              <Link to="/matches/won-stack" style={{ textDecoration: 'none' }}>Wins By Season</Link>
            </li>
            <li>
              <Link to="/matches/extra-runs" style={{ textDecoration: 'none' }}>Extra Runs By Team</Link>
            </li>
          </ul>
        </div>
      )
    },
    main: () => {
      return (
        <div>
          <h2>Matches</h2>
          <h4>IPL Match Analysis across seasons</h4>
          <p>Here you would get the list of all matches.</p>
        </div>
      )
    },
    routes: [
      {
        path: "/matches/mat-by-season",
        exact: true,
        main: () => {
          return (
            <div>
              <h2>Matches</h2>
              <h4>IPL Match Analysis per seasons</h4>
              <p>Here you would get the list of matches per season.</p>
            </div>
          )
        }
      },
      {
        path: "/matches/won-stack",
        exact: true,
        main: () => {
          return (
            <div>
              <h2>Matches</h2>
              <h4>IPL Match Win Analysis per team across seasons</h4>
              <p>Here you would get the list of matches won by teams per season.</p>
            </div>
          )
        }
      },
      {
        path: "/matches/extra-runs",
        exact: true,
        main: () => {
          return (
            <div>
              <h2>Matches</h2>
              <h4>IPL Team Analysis for extra runs</h4>
              <p>Here you would get extra runs by teams in a year.</p>
            </div>
          )
        }
      }
    ]
  },
  {
    path: "/players",
    sidebar: () => {
      return (
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
      )
    },
    main: () => {
      return (
        <div>
          <h2>Players</h2>
          <h4>IPL Player Analysis across seasons</h4>
          <p>Here you would get the list of teams and their players.</p>
        </div>
      )
    },
    routes: [
      {
        path: "/players/bowler-economy",
        exact: true,
        main: () => {
          return (
            <div>
              <h2>Players</h2>
              <h4>IPL Player Analysis | Bowler Economy</h4>
              <p>Here you would get the list of top economical bowlers.</p>
            </div>
          )
        }
      },
      {
        path: "/players/bat-high",
        exact: true,
        main: () => {
          return (
            <div>
              <h2>Players</h2>
              <h4>IPL Player Analysis | Highest Individual Scores</h4>
              <p>Here you would get the list of highest individual scores by batsmen.</p>
            </div>
          )
        }
      }
    ]
  }
];

const RouteWithSubRoutes = route => (
  <Route
    // key={index}
    path={route.path}
    exact={route.exact}
    component={route.main}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.main {...props} routes={route.routes} />
    )}
  />
);

const IplNavTree = () => (
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
            <Link to="/matches" style={{ textDecoration: 'none' }}>Matches</Link>
            <Route
              key="1"
              path={routes[1].path}
              exact={routes[1].exact}
              component={routes[1].sidebar}
            />
          </li>
          <li>
            <Link to="/players" style={{ textDecoration: 'none' }}>Players</Link>
            <Route
              key="2"
              path={routes[2].path}
              exact={routes[2].exact}
              component={routes[2].sidebar}
            />
          </li>
        </ul>
      </div>

      <div style={{ flex: 1, padding: "2em" }}>
        {routes.map((route, index) => (
          // <Route
          //   key={index}
          //   path={route.path}
          //   exact={route.exact}
          //   component={route.main}
          // />
          <RouteWithSubRoutes key={index} {...route} />
        ))}
      </div>
    </div>
  </Router>
);

export default IplNavTree;


// ======================================================
// const Main = () => <h2>Main</h2>;

// const Sandwiches = () => <h2>Sandwiches</h2>;

// const Tacos = ({ routes }) => (
//   <div>
//     <h2>Tacos</h2>
//     <ul>
//       <li>
//         <Link to="/tacos/bus">Bus</Link>
//       </li>
//       <li>
//         <Link to="/tacos/cart">Cart</Link>
//       </li>
//     </ul>

//     {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
//   </div>
// );

// const Bus = () => <h3>Bus</h3>;
// const Cart = () => <h3>Cart</h3>;

// ////////////////////////////////////////////////////////////
// // then our route config
// const routes = [
//   {
//     path: "/sandwiches",
//     component: Sandwiches
//   },
//   {
//     path: "/tacos",
//     component: Tacos,
//     routes: [
//       {
//         path: "/tacos/bus",
//         component: Bus
//       },
//       {
//         path: "/tacos/cart",
//         component: Cart
//       }
//     ]
//   }
// ];

// // wrap <Route> and use this everywhere instead, then when
// // sub routes are added to any route it'll work
// const RouteWithSubRoutes = route => (
//   <Route
//     path={route.path}
//     render={props => (
//       // pass the sub-routes down to keep nesting
//       <route.component {...props} routes={route.routes} />
//     )}
//   />
// );

// const RouteConfigExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li>
//           <Link to="/tacos">Tacos</Link>
//         </li>
//         <li>
//           <Link to="/sandwiches">Sandwiches</Link>
//         </li>
//       </ul>

//       {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
//     </div>
//   </Router>
// );

// export default RouteConfigExample;