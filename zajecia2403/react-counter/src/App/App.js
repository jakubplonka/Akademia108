import React, { Component } from 'react';
import './App.css';

import Counter from "../Counter/Counter";

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
        Counter
        </header>
        <Counter initValue={108}/>
      </div>
    );
  }
}

export default App;
