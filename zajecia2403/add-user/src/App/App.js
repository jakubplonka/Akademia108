import React, { Component } from 'react';
import './App.css';
import User from '../User/User';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="header">User's list</div>
        <User />
      </div>
    );
  }
}

export default App;
