import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Signin } from '../components/home/Signin';
import { Signing } from '../components/home/Signing';
import { Home } from '../components/home/Home';

import { signIn } from '../actions/userActions';

import styles from '../main.css';

const STATE_SIGNIN = 1;
const STATE_WELCOME = 2;
const STATE_HOME = 3;

class HomeContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                name: '',
            },
            loginState: STATE_SIGNIN
        };
        this.handleChange = this.handleChange.bind(this);
        this.signIn = this.signIn.bind(this);
    }

    componentDidMount() {
        console.log(this.props.user);
        if(this.props.user.signed) {
            console.log('asdf');
            this.setState({user: this.props.user});
            this.setState({loginState: STATE_HOME});
        }
    }

    handleChange(e) {
        let _user = this.state.user;
        _user[e.target.name] = e.target.value;
        this.setState({ user: _user });
    }

    signIn(e) {
        e.preventDefault();
        this.props.signIn(this.state.user);
        this.setState({ loginState: STATE_WELCOME });
        setTimeout(() => {
            this.setState({ loginState: STATE_HOME });
        }, 2000);
    }

    render() {
        let component = '';
        switch (this.state.loginState) {
        case STATE_SIGNIN:
            component = <Signin user={this.state.user} handleChange={this.handleChange} handleSubmit={this.signIn} />;
            break;
        case STATE_WELCOME:
            component = <Signing user={this.state.user} />;
            break;
        case STATE_HOME:
            component = <Home user={this.state.user} />;
            break;
        default:
            component = <Home user={this.state.user} />;
        };

        return (
            <div className={styles.flex}>
                {component}
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

HomeContainer.propTypes = {
    signIn: PropTypes.func.isRequired,
    user: PropTypes.object
};