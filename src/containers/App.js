import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../main.css';
import { connect } from 'react-redux';
import { signIn } from '../actions/userActions';
import ApplicationMessage from '../components/applicationmessage/ApplicationMessage';

import HeaderContainer from './HeaderContainer';
import FooterContainer from './FooterContainer';
import MenuContainer from './MenuContainer';
import MessagingContainer from './MessagingContainer';
import CodeContainer from './CodeContainer';

import HomeContainer from './HomeContainer';
import AboutContainer from './AboutPage';

import UserContainer from '../components/user/UserContainer';

class App extends Component {
    componentWillMount() {
        let user = JSON.parse(sessionStorage.getItem('user'));
        if (user) {
            this.props.signIn(user);
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className={styles.mainWrapper}>
                    <div className={styles.headerWrapper}>
                        <ApplicationMessage />
                        <HeaderContainer />
                    </div>
                    <div className={styles.contentWrapper}>
                        <div></div>
                        <Switch>
                            <Route exact path="/" component={HomeContainer} />
                            <Route exact path="/about" component={AboutContainer} />
                            <Route exact path='/messaging' component={MessagingContainer} />
                            <Route exact path='/code' component={CodeContainer} />
                            <Route exact path='/login' component={UserContainer} />
                        </Switch>
                        <MenuContainer />
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