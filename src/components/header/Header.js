import React from 'react';
import styles from './Header.css';

export const Header = (props) => {
    let content = "";
    if (props.user.signed) {
        content = <h1>{props.user.name}</h1>
    }
    return (
        <div className={styles.bar}>
            {content}
        </div>
    )
}