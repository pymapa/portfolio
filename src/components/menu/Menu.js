import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Menu.css';

export const Menu = (props) => {
    return (
        <div className={styles.menuContainer}>
            <MenuLink to=''faIcon='home'/>
            {/* <MenuLink to='about' faIcon='question'/> */}
            <MenuLink to='messaging' faIcon='comments'/>
            <MenuLink to='code' faIcon='code'/>
            <MenuLink to='profile' faIcon='user'/>
        </div>
    );
};

Menu.propTypes = {
    hideMenu: PropTypes.func
};

const MenuLink = (props) => {
    return (
        <div className={styles.menuItem}>
            <Link to={'/' + props.to} id={props.to}>
                <i className={'fa fa-' + props.faIcon + ' ' + styles.menuIcon} aria-hidden="true"></i>
            </Link>
        </div>
    );
};

MenuLink.propTypes = {
    to: PropTypes.string,
    label: PropTypes.string,
    faIcon: PropTypes.string
};