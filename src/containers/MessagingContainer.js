import React, { Component } from 'react';
import styles from '../components/messaging/Messaging.css';
import {Messaging} from '../components/messaging/Messaging';
import {Messages} from '../components/messaging/Messages';
import {WriteMessage} from '../components/messaging/WriteMessage';

class MessagingContainer extends Component {
    render () {
        return (
            <div className={styles.wrapper}>
                {/* <Messaging /> */}
                <Messages />
                <WriteMessage />

            </div>
        );
    }
}

export default MessagingContainer;