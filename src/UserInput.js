import React from 'react';
// import { render } from 'react-dom';


const UserInput = (props) => {
return (
  <div>
    <input  type="text" placeholder="username" onChange={props.changed} /> 
  </div>
);
}

export default UserInput;