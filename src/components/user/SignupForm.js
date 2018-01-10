import React from 'react';
import PropTypes from 'prop-types';
import styles from './User.css';
import form from '../../shared/form.css';
import fonts from '../../shared/fonts.css';

export const SignupForm = (props) => {
    return (
        <div className={styles.formWrapper}>
            <h1 className={fonts.mainHeading}>Sign up</h1>

            <form onSubmit={props.handleSubmit}>
                <div className={form.formGroup}>
                    <input type="text" name="username" id="username" className={form.input} placeholder="Pick a nickname" onChange={props.handleChange} autoFocus/>
                </div>
                <div className={form.formGroup}>
                    <input type="email" name="email" id="email" className={form.input} placeholder="Give your email" onChange={props.handleChange}/>
                </div>
                <div className={form.formGroup}>
                    <input type="password" name="password" id="password" className={form.input} placeholder="Create a password. A strong one." onChange={props.handleChange}/>
                </div>
                <div className={form.formGroup}>
                    <input type="password" name="password2" id="password2" className={form.input} placeholder="And again" onChange={props.handleChange}/>
                </div>  
                <div className={form.formGroup}>
                    <input type="button" value="Already have account" className={form.button} onClick={() => props.changeForm(0)}/>
                    <input type="submit" value="Sign up" className={form.button}/>
                </div>
            </form>
        </div>
    );
};

SignupForm.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    changeForm: PropTypes.func
};