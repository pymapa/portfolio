import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Menu.css';

export const Menu = (props) => {
    return (
        <div className={styles.menuContainer}>
            <MenuLink to='' label={<i className="fa fa-home" aria-hidden="true"></i>}/>
            <MenuLink to='about' label={<i className="fa fa-question" aria-hidden="true"></i>}/>
        </div>
    );
};

Menu.propTypes = {
    hideMenu: PropTypes.func
};

const MenuLink = (props) => {
    return (
        <div className={styles.menuItem}>
            <Link to={'/' + props.to}>{props.label}</Link>
        </div>
    );
};

MenuLink.propTypes = {
    to: PropTypes.string,
    label: PropTypes.string
};