import React from 'react';
import PropTypes from 'prop-types';
import styles from './Technologies.css';

export const Technologies = () => {
    return (
        <div className={styles.technologies}>
            <div className={styles.client}>
                <Client name='React.js'/>
                <Client name='Redux'/>
                <Client name='Flexbox'/>
                <Client name='CSS Grid'/>
            </div>

            <div className={styles.backend}>
                <Backend name='Node.js'/>
                <Backend name='MongoDB'/>
                <Backend name='Heroku'/>
            </div>
        </div>
    );
};

const Client = (props) => {
    return (
        <div className={styles.clientItem}>
            <p>{props.name}</p>
        </div>
    );
};

Client.propTypes = {
    name: PropTypes.string
};

const Backend = (props) => {
    return (
        <div className={styles.backendItem}>
            <p><b>{props.name}</b></p>
        </div>
    );
};

Backend.propTypes = {
    name: PropTypes.string
};