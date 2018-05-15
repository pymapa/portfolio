import React, { Component } from 'react';
import cuid from 'cuid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Messaging.css';

import { Message } from './Message';

const Messages = ({ messaging }) => {
    const renderMessages = () => {
        console.log(messaging.messages);
        let messages = messaging.messages.map((message) => {
            return <Message key={cuid()} message={message} />;
        });
        return messages;
    };

    return (
        <div className={styles.messagesWrapper}>
            {messaging.conversation.id ? (
                renderMessages()
            ) : (
                <h3>Select conversation</h3>
            )}
        </div>
    );
};

Messages.propTypes = {
    messaging: PropTypes.object
};

const mapStateToProps = state => {
    return {
        messaging: state.messaging
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
