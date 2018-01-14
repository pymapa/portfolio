import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import valid from '../../shared/formValidator';
import styles from './User.css';
import ajax from '../../shared/ajax';
import constants from '../../shared/applicationConstants';

import {signIn} from '../../actions/userActions';
import {addMessage} from '../../actions/applicationmessageActions';

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
                email: 'asdf@adsf.df',
                fname: 'asdf',
                lname: 'asdf',
            },

            // Ajax state
            loading: false,

            // Form state
            formState: STATE_SIGNUP
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.selectForm = this.selectForm.bind(this);
        this.changeForm = this.changeForm.bind(this);
    }

    componentWillMount() {
        if(this.props.user.signed) {
            // this.props.history.push('/');
        }
    }
    
    handleLogin(e) {
        e.preventDefault();
        this.setState({loading: true});
        ajax.sendPost('/login', {
            username: this.state.user.username,
            password: this.state.user.password
        })
            .catch(err => {
                this.props.addMessage(err.message, constants.MESSAGE_WARNING);
                this.setState({
                    loading: false
                });
            })
            .then(res => {
                if(!res)
                    return;
                this.props.addMessage('Welcome ' + res._user.username + '!', constants.MESSAGE_SUCCESS);
                this.props.signIn(res._user);
                this.setState({loading: false});
                this.props.history.push('/');
            })
        ;
    }

    handleSignup(e) {
        e.preventDefault();
        this.setState({loading: true});
        ajax.sendPut('/signup', {
            username: this.state.user.username,
            password: this.state.user.password,
            email: this.state.user.email
        })
            .catch(err => {
                this.props.addMessage(err.message, constants.MESSAGE_WARNING);
                this.setState({
                    loading: false,
                });
            })
            .then(res => {
                if(!res)
                    return;
                this.props.addMessage('Welcome ' + res._user.username + '!', constants.MESSAGE_SUCCESS);
                this.props.signIn(res._user);
                this.setState({loading: false});
                this.props.history.push('/');
            });
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
                loading={this.state.loading}
                {...this.state.user} />;
            break;
        case  STATE_SIGNUP:
            component = <SignupForm 
                changeForm={this.changeForm}  
                handleChange={this.handleChange}
                handleSubmit={this.handleSignup}
                loading={this.state.loading}
                {...this.state.user} />;
            break;
        default:
            component = <LoginForm 
                changeForm={this.changeForm} 
                handleChange={this.handleChange}
                loading={this.state.loading}
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
    signIn: PropTypes.func,
    addMessage: PropTypes.func,
    history: PropTypes.any,
    user: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (text, type) => {
            dispatch(addMessage(text, type));
        },

        signIn: (user) => {
            dispatch(signIn(user));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);