import React, { Component } from 'react';
import styles from '../components/messaging/Messaging.css';
import {Messaging} from '../components/messaging/Messaging';

class MessagingContainer extends Component {
    render () {
        return (
            <div className={styles.wrapper}>
                <Messaging />
            </div>
        );
    }
}

export default MessagingContainer;