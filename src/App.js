import React, { Component } from 'react';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends Component {
  state = {
    username: ["Jordan", "Peterson"]
  }
render() {
  return (
    <div>
      <UserInput />
      <UserOutput username="Doctor" />
      <UserOutput username={this.state.username[0]}/>
      <UserOutput username={this.state.username[1]}/>
    </div>
  );
}

}

export default App;
