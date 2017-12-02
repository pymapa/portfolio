import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../main.css';

import HomeContainer from './HomeContainer';
import AboutContainer from './AboutPage';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/about" component={AboutContainer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
