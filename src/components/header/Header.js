import React from 'react';
import styles from './Header.css';
import PropTypes from 'prop-types';

export const Header = (props) => {
    let content = '';
    if (props.user.signed) {
        content = <h1>{props.user.name}</h1>;
    }
    return (
        <div className={styles.bar}>
            <div className={styles.left}>1</div>

            <div className={styles.center}>2</div>
            <div className={styles.right}>3</div>
            <div className={styles.line}><hr/></div>
            {/* {content} */}
        </div>
    );
};

Header.propTypes = {
    user: PropTypes.object
};