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
  
  addValueReact = (value) => {
    this.setState((prevState) => {
      return {
        listReact:[...prevState.listReact, 
          {
            key: Date.now(),
            name: value
          }
        ]
      }
    })
  }
  addValueAngular = (value) => {
    this.setState((prevState) => {
      return {
        listAngular:[...prevState.listAngular, 
          {
            key: Date.now(),
            name: value
          }
        ]
      }
    })
  }
  render() {
    const { listReact, listAngular } = this.state;
    return (
      <div className="app">
        <Display 
          reactValueLength={listReact.length}
          angularValueLength={listAngular.length}
        />
        <div className="form-container">
          <Form setValue={this.addValueReact}/>
          <Form setValue={this.addValueAngular}/>
        </div>
        <div className="list-container">
          <List user={listReact}/>
          <List user={listAngular}/>
        </div>
      </div>
      );
  }
}

export default App;
