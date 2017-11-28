import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../main.css';

import Welcome from './WelcomePage';
import Home from './HomePage';
import About from './AboutPage';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/about" component={About} />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
