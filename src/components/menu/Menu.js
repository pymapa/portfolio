import React from 'react';

import styles from './Menu.css';

export const Menu = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.menuContainer}>
                <div className={styles.menuItem}>
                    <p>Menuitem</p>
                </div>
            </div>
        </div>
    );
};