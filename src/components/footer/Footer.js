import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.css';

export const Footer = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>1</div>
            <div className={styles.center}></div>
            
            <div className={styles.right}>
                <a href="#"><i 
                    className="fa fa-bars" 
                    onMouseEnter={props.showMenu} 
                    onMouseLeave={props.hideMenu}
                    aria-hidden="true"></i></a>
            </div>
        </div>
    );
};

Footer.propTypes = {
    showMenu: PropTypes.func.isRequired,
    hideMenu: PropTypes.func.isRequired
};