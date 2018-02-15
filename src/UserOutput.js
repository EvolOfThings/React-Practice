import React from 'react';
import UserInput from './UserInput';
// import { render } from 'react-dom';

const UserOutput = (props) => {
  return (
    <div>
      <h2>Username: {props.changed}</h2>
      <p>Economists generally think of self interest
        as maximizing the present value of one’s consumption, 
        or wealth, independent of others. Wealth can be generalized
        to include not just their financial assets, but the 
        present value of their labor income and even public goods.</p>
      <p>Adam Smith emphasized a self-interest that also recognized
        social position and regard for society as a whole,
        but this was well before anyone thought of writing down
        a utility function, which is a mathematically precise
        formulation of how people define their self interest.</p>
  </div >
  );
}

export default UserOutput;