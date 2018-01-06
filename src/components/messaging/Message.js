import React from 'react';
import styles from './Messaging.css';

import PropTypes from 'prop-types';

export const Message = (props) => {
    return(
        <div className={styles.messageWrapper}>
            <div className={styles.avatar}>
                P
            </div>
            <div className={styles.message}>
                <p>{props.message}</p>
            </div>
        </div>
    );
};

Message.propTypes = {
    message: PropTypes.string.isRequired
};