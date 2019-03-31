import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from '../Home/Home';
import Kontakt from '../Kontakt/Kontakt';
import Portfolio from '../Portfolio/Portfolio';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/kontakt">Kontakt</Link>
            </li>
          </ul>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/kontakt" component={Kontakt} />
      </div>
    </Router>
    );
  }
}

export default App;
