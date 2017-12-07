import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.css';
import fonts from '../../shared/fonts.css';
import form from '../../shared/form.css';

export const Signin = (props) => {
    return (
        <div className={styles.parent}>
            <div className={styles.header}>
                <h1 className={fonts.mainHeading}>Hi there! What should I call you?</h1>
            </div>
            
            <form onSubmit={props.handleSubmit} className={styles.form}>
                <input className={form.input} value={props.user.name} name="name" type="text" onChange={props.handleChange}/>
                <input className={form.submit} type="submit" value="Continue" />
            </form>
        </div>
    );
};

Signin.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
};