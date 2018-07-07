import React, { Component } from 'react';
import './App.css';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'
import About from './About'
import Stocks from './Stocks'

class App extends Component {
  render() {
    return (
      <div className="body">
        <header>
          <h1>Learn Routing</h1>
          <nav>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/stocks">Stocks</Link></li>
            </ul>
          </nav>
          <div>
            <Switch>
              <Route path="/about" component={ About } />
              <Route path="/stocks" component={ Stocks } />
            </Switch>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
