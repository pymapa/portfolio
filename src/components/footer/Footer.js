import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.css';
import {Modal} from '../modal/Modal';

export const Footer = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <a href="#">
                    Contact
                </a>
                
            </div>
            <div className={styles.center}>
                <Modal />
            </div>
            
            <div className={styles.right}>
                <a href="#">Sign out</a>
            </div>
        </div>
    );
};

Footer.propTypes = {
    showMenu: PropTypes.func.isRequired,
    hideMenu: PropTypes.func.isRequired
};