import React from 'react';
import styles from './About.css';
import font from '../../shared/fonts.css';

export const About = (props) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={font.mainHeading}>About</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore cumque architecto odit harum vero rem. Itaque beatae saepe, commodi nam asperiores tempora ipsum? Harum consequatur consectetur perferendis sequi quos repellendus!</p>
        </div>
    );
};