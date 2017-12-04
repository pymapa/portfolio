import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from  '../main.css';
import { connect } from 'react-redux';
import {signIn} from '../actions/userActions';

import HeaderContainer from './HeaderContainer';

import HomeContainer from './HomeContainer';
import AboutContainer from './AboutPage';

class App extends Component {
  componentDidMount() {
    let user = JSON.parse(sessionStorage.getItem('user'));
    if(user) {
      this.signIn(user);
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div className={styles.mainWrapper}>
          <HeaderContainer />
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/about" component={AboutContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (user) => {
      dispatch(signIn(user));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
