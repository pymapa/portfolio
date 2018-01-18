import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Footer.css';
import {Modal} from '../modal/Modal';
import {addMessage} from '../../actions/applicationmessageActions';

export const Footer = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <a href="#" onClick={props.contact}>
                    Contact
                </a>
                
            </div>
            <div className={styles.center}>
                <Modal />
            </div>
            
            <div className={styles.right}>
                {props.user.signed ? (
                    <a href="#" onClick={props.signOut}>Sign out</a>)
                    : (
                        <Link to='/login'>Login</Link>)
                }
                
            </div>
        </div>
    );
};

Footer.propTypes = {
    showMenu: PropTypes.func.isRequired,
    hideMenu: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired,
    contact: PropTypes.func.isRequired,
    user: PropTypes.object
};