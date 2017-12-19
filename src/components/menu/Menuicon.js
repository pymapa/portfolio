import React from 'react';
import styles from './Menu.css';

export const Menuicon = () => {
    return (
        <div className={styles.menuContainer}>
            <a className={styles.menuItem} href="#"><i 
                className="fa fa-bars" 
                aria-hidden="true"></i></a>
        </div>
    );
};