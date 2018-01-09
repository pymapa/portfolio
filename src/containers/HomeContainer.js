import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Home } from '../components/home/Home';

import { signIn } from '../actions/userActions';

// import styles from '../main.css';
import styles from '../components/home/Home.css';

class HomeContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                name: '',
            }
        };
    }

    componentDidMount() {
        if(this.props.user.signed) {
            this.setState({user: this.props.user});
        }
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <Home user={this.state.user} />
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