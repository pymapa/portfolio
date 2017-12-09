import React, { Component } from 'react';
import styles from '../components/code/Code.css';
import {Code} from '../components/code/Code';

class CodeContainer extends Component {
    render () {
        return (
            <div className={styles.wrapper}>
                <Code />
            </div>
        );
    }
}

export default CodeContainer;