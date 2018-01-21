import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Messaging.css';
import Messages from './Messages';
import WriteMessage from './WriteMessage';
import Conversations from './Conversations';

class MessagingContainer extends Component {
    componentWillMount() {
        if(!this.props.user.signed) {
            this.props.history.push('/login');
        }
    }
    render () {
        return (
            <div className={styles.wrapper}>
                <Conversations />
                <Messages />
                <WriteMessage />

            </div>
        );
    }
}

MessagingContainer.propTypes = {
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
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagingContainer);