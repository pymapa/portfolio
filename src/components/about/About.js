import React from 'react';
import styles from './About.css';
import font from '../../shared/fonts.css';

export const About = (props) => {
    return (
        <div className={styles.parent}>
            <h1 className={font.mainHeading}>About _this</h1>
            <p><i>Bar Foo</i> is a portfolio-ish site that I created as a playground for practising new technologies and showcasing my way of doing web stuff.</p>
        </div>
    );
};