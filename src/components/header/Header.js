import React from 'react';
import styles from './Header.css';
import PropTypes from 'prop-types';

export const Header = (props) => {
    let content = '';
    if (props.user.signed) {
        content = <p>{props.user.name}</p>;
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>1</div>

            <div className={styles.center}>{content}</div>
            <div className={styles.right}>
                <SomeLink link='https://github.com/pymapa/portfolio' faIcon='github'/>
                <SomeLink link='' faIcon='linkedin'/>
            </div>
            {/* <div className={styles.line}><hr/></div> */}
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