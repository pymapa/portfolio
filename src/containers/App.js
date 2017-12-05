import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../main.css';
import { connect } from 'react-redux';
import { signIn } from '../actions/userActions';

import HeaderContainer from './HeaderContainer';
import FooterContainer from './FooterContainer';

import HomeContainer from './HomeContainer';
import AboutContainer from './AboutPage';

class App extends Component {
    componentWillMount() {
        let user = JSON.parse(sessionStorage.getItem('user'));
        console.log(user);
        if (user) {
            this.props.signIn(user);
        }
    }
    render() {
        return (
            <BrowserRouter>
                <div className={styles.mainWrapper}>
                    <div className={styles.headerWrapper}>
                        <HeaderContainer />
                    </div>
                    <div className={styles.contentWrapper}>
                        <Switch>
                            <Route exact path="/" component={HomeContainer} />
                            <Route exact path="/about" component={AboutContainer} />
                        </Switch>
                    </div>
                    <div className={styles.footerWrapper}>
                        <FooterContainer />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (user) => {
            dispatch(signIn(user));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
    signIn: PropTypes.func.isRequired,
};