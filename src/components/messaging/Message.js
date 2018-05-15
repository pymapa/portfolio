import React from 'react';
import styles from './Messaging.css';

import PropTypes from 'prop-types';

export const Message = ({message}) => {
    return(
        <div className={styles.messageWrapper}>
            <div className={styles.avatar}>
                P
            </div>
            <div className={styles.message}>
                <p>{message ? message.message : ''}</p>
            </div>
        </div>
    );
};

Message.propTypes = {
    message: PropTypes.object.isRequired
};
