import React from 'react';
import PropTypes from 'prop-types';
import fonts from '../../shared/fonts.css';
import styles from './Home.css';

export const Home = (props) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={fonts.mainHeading}>Home!</h1>
            <h3>Hi there {props.user.name}! Nice to meet you. Would you like something?</h3>
        </div>
    );
};

Home.propTypes = {
    user: PropTypes.object.isRequired,
};