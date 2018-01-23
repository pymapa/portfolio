import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Messaging.css';

import {Message} from './Message';

class Messages extends Component {
    constructor(props) {
        super(props);

        this.renderMessages = this.renderMessages.bind(this);
    }

    renderMessages() {
        let messages = this.props.messaging.messages.map((message, i) => {
            return <Message key={i} message={message} />;
        });
        return messages;
    }

    render() {
        return (
            <div className={styles.messagesWrapper}>
                {this.props.messaging.conversation.id ? this.renderMessages() : <h3>Select conversation</h3>}
            </div>
        );
    }
};

Messages.propTypes = {
    messaging: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        messaging: state.messaging
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);