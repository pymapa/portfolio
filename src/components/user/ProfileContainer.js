import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './User.css';
import fonts from '../../shared/fonts.css';

class ProfileContainer extends Component {

    componentDidMount() {
        if(!this.props.user.signed) {
            this.props.history.push('/login');
        }
    }

    render () {
        return (
            <div className={styles.wrapper}>
                <div className={styles.formWrapper}>
                    <h1 className={fonts.mainHeading}>Profile</h1>
                    <p>{this.props.user.username}</p>
                    <p>{this.props.user.email}</p>
                </div>
            </div>
        );
    }
}

ProfileContainer.propTypes = {
    user: PropTypes.object,
    history: PropTypes.any
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);