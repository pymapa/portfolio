import React, { Component } from 'react';
import styles from './User.css';

import {LoginForm} from './LoginForm';
import {SignupForm} from './SignupForm';

const STATE_LOGIN = 0;
const STATE_SIGNUP = 1;
const STATE_CHANGEPASSWORD = 2;
const STATE_FORGOTPASSWORD = 3;

class UserContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // Credentials
            username: '',
            password: '',
            email: '',
            fname: '',
            lname: '',

            // Form state
            loginState: STATE_LOGIN
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.selectForm = this.selectForm.bind(this);
    }
    
    handleLogin(e) {
        e.preventDefault();
        console.log('login');
    }

    handleSignup(e) {
        e.preventDefault();
        console.log('signup');
    }

    handleChange(e) {

    }

    selectForm() {
        let component;
        switch (this.state.loginState) {
        case STATE_LOGIN:
            component = <LoginForm />;
            break;
        case  STATE_SIGNUP:
            component = <SignupForm />;
            break;
        default:
            component = <LoginForm />;
        }
        
        return component;
    }
    
    render () {
        return (
            <div className={styles.wrapper}>
                {this.selectForm()}
            </div>
        );
    }
}

export default UserContainer;