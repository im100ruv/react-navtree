import React from 'react';

const Wins = props => (
  <React.Fragment>
    <ul>
      <li>Matches Won: {props.won}</li>
    </ul>
  </React.Fragment>
)

export default Wins;