import React, { Component } from 'react';
import valid from '../../shared/formValidator';
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
            user: {
                username: '',
                password: '',
                email: '',
                fname: '',
                lname: '',
            },

            // Form state
            formState: STATE_LOGIN
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.selectForm = this.selectForm.bind(this);
        this.changeForm = this.changeForm.bind(this);
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

    changeForm(state) {
        this.setState({formState: state});
    }

    selectForm() {
        let component;
        switch (this.state.formState) {
        case STATE_LOGIN:
            component = <LoginForm 
                changeForm={this.changeForm} 
                handleChange={this.handleChange}
                handleSubmit={this.handleLogin}
                {...this.state} />;
            break;
        case  STATE_SIGNUP:
            component = <SignupForm 
                changeForm={this.changeForm}  
                handleChange={this.handleChange}
                handleSubmit={this.handleSignup}
                {...this.state} />;
            break;
        default:
            component = <LoginForm 
                changeForm={this.changeForm} 
                handleChange={this.handleChange}
                {...this.state} />;
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