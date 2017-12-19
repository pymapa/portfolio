import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.css';

export const Modal = (props) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                {props.content}
            </div>
        </div>
    );
} ;

Modal.propTypes = {
    content: PropTypes.object
};