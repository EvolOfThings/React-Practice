import React, { Component } from 'react';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends Component {
  state = {
    username:  "Jordan"
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
        changed={this.nameChangeHandler}
        currentName={this.state.username}/>
      <UserOutput
        usernameC={this.state.username} />
      <UserOutput
        usernameC='Peterson' />
    </div>
  );
}

}

export default App;

