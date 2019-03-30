import React, { Component } from 'react';
import Display from '../Display/Display';
import Form from '../Form/Form';
import List from '../List/List';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      listReact: [],
      listAngular: []
    }
  }

  render() {
    return (
      <div className="app">
        <Display />
        <div className="form-container">
          <Form />
          <Form />
        </div>
        <div className="list-container">
          <List />
          <List />
        </div>
      </div>
      );
  }
}

export default App;
