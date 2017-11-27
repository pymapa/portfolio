import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './main.css';

import Home from './components/common/Home';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
