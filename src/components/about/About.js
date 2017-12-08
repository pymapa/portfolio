import React from 'react';
import styles from './About.css';
import font from '../../shared/fonts.css';

export const About = (props) => {
    return (
        <div className={styles.parent}>
            <h1 className={font.mainHeading}>About</h1>
        </div>
    );
};