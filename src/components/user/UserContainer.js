import React, { Component } from 'react';
import valid from '../../shared/formValidator';
import styles from './User.css';
import ajax from '../../shared/ajax';

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
        ajax.sendPost('/login', {
            username: this.state.user.username,
            password: this.state.user.password
        })
            .then(res => {
                console.log(res.body);
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleSignup(e) {
        e.preventDefault();
        console.log('signup');
    }

    handleChange(e) {
        let _user = {...this.state.user};
        _user[e.target.name] = e.target.value;
        this.setState({user: _user});
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
                {...this.state.user} />;
            break;
        case  STATE_SIGNUP:
            component = <SignupForm 
                changeForm={this.changeForm}  
                handleChange={this.handleChange}
                handleSubmit={this.handleSignup}
                {...this.state.user} />;
            break;
        default:
            component = <LoginForm 
                changeForm={this.changeForm} 
                handleChange={this.handleChange}
                {...this.state.user} />;
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