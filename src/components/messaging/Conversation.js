import React from 'react';
import PropTypes from 'prop-types';
import styles from './Messaging.css';

export const Conversation = (props) => {
    return (
        <div className={styles.conversation}>
            <h3>{props.conversation.name}</h3>
        </div>
    );
};

Conversation.propTypes = {
    conversation: PropTypes.object
};