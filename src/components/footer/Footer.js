import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.css';
import {Technologies} from './Technologies';

export const Footer = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <a href="#">
                    Contact
                </a>
                
            </div>
            <div className={styles.center}>
                {/* <Technologies /> */}
            </div>
            
            <div className={styles.right}
                onMouseEnter={props.showMenu} 
                onMouseLeave={props.hideMenu}>
                <a href="#"><i 
                    className="fa fa-bars" 
                    aria-hidden="true"></i></a>
            </div>
        </div>
    );
};

Footer.propTypes = {
    showMenu: PropTypes.func.isRequired,
    hideMenu: PropTypes.func.isRequired
};