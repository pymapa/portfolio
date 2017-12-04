import React from 'react';

import styles from './Home.css'

export const Signing = (props) => {
    return (
        <div className={styles.container}>
            <h1>Hi there {props.user.name}</h1>
        </div>
    )
}