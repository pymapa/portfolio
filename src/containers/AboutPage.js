import React from 'react';
import {About} from '../components/about/About';
import styles from '../components/about/About.css';

const AboutContainer = () => {
    return (
        <div className={styles.wrapper}>
            <About />
        </div>
    );
};

export default AboutContainer;