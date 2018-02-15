import React, { Component } from 'react';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends Component {
  state = {
    username:  "Jordan"
  }

  changeHandler = () => {
    this.setState({
      username: "Doctor"
    })
  }

nameChangeHandler = (event) => {
  this.setState({
    username: event.target.value
  })
}

render() {
  return (
    <div>
      <UserInput 
        changed={this.nameChangeHandler}/>
      <UserOutput 
        usernameC={this.state.username}
        changed={this.nameChangeHandler} />
      <UserOutput
        usernameC={this.state.username} />
      <UserOutput
        usernameC={this.state.username} />
    </div>
  );
}

}

export default App;

