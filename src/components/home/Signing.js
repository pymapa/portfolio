import React from 'react';
import PropTypes from 'prop-types';

import styles from './Home.css';

export const Signing = (props) => {
    return (
        <div className={styles.wrapper}>
            <h1>Hi there {props.user.name}</h1>
        </div>
    );
};

Signing.propTypes = {
    user: PropTypes.object.isRequired
};