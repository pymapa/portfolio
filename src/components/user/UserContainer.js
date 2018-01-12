import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import valid from '../../shared/formValidator';
import styles from './User.css';
import ajax from '../../shared/ajax';

import {signIn} from '../../actions/userActions';

import {LoginForm} from './LoginForm';
import {SignupForm} from './SignupForm';

// Form state, which form will be displayed
const STATE_LOGIN = 0;
const STATE_SIGNUP = 1;
const STATE_CHANGEPASSWORD = 2;
const STATE_FORGOTPASSWORD = 3;
const STATE_WELCOME = 4;

class UserContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // Credentials
            user: {
                username: 'pyry',
                password: 'password',
                email: '',
                fname: '',
                lname: '',
            },

            // Ajax state
            loading: false,
            errorMessage: '',

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
        this.setState({loading: true});
        ajax.sendPost('/login', {
            username: this.state.user.username,
            password: this.state.user.password
        })
            .catch(err => {
                console.log(err);
                this.setState({
                    loading: false,
                    errorMessage: err.message
                });
            })
            .then(res => {
                if(!res)
                    return;
                console.log(res);
                this.props.signIn(res._user);
                this.setState({loading: false});
            })
        ;
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

UserContainer.propTypes = {
    signIn: PropTypes.func
};

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

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);