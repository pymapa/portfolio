import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Menu.css';

export const Menu = (props) => {
    return (
        <div className={styles.menuContainer}>
            <div className={styles.menuItem}>
                <p>Home</p>
            </div>
            <div className={styles.menuItem}>
                <Link onClick={props.hideMenu} to="/about"><p>About</p></Link>
            </div>
            <div className={styles.menuItem}>
                <p>Menuitem</p>
            </div>
            <div className={styles.menuItem}>
                <p>Menuitem</p>
            </div>
        </div>
    );
};

Menu.propTypes = {
    hideMenu: PropTypes.func
};

const MenuLink = () => {
    return (
        <div></div>
    );
};