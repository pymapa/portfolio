import React from 'react';
import styles from './Header.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export const Header = (props) => {
    let content = '';
    if (props.user.signed) {
        content = <p>{props.user.name}</p>;
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <Link to='/'>
                    <p>Bar Foo</p>
                </Link>
            </div>

            <div className={styles.center}></div>
            <div className={styles.right}>
                <SomeLink link='https://github.com/pymapa/portfolio' faIcon='github'/>
                <SomeLink link='https://www.linkedin.com/in/pyry-pajunp%C3%A4%C3%A4-98890457/' faIcon='linkedin'/>
            </div>
        </div>
    );
};

Header.propTypes = {
    user: PropTypes.object
};

const SomeLink = (props) => {
    return (
        <div className={styles.someLink}>
            <a href={props.link}><i className={'fa fa-' + props.faIcon} aria-hidden="true"></i></a>
        </div>
    );
};

SomeLink.propTypes = {
    link: PropTypes.string,
    faIcon: PropTypes.string
};