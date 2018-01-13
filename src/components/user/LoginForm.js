import React from 'react';
import PropTypes from 'prop-types';
import styles from './User.css';
import form from '../../shared/form.css';
import fonts from '../../shared/fonts.css';

export const LoginForm = (props) => {
    return (
        <div className={styles.formWrapper}>
            <h1 className={fonts.mainHeading}>Login</h1>
            <form onSubmit={props.handleSubmit}>
                <div className={form.formGroup}>
                    <input type="text" value={props.username} name="username" id="username" className={form.input} placeholder="Username" onChange={props.handleChange} autoFocus />   
                </div>
                <div className={form.formGroup}>
                    <input type="password" name="password" id="password" className={form.input} placeholder="Password" onChange={props.handleChange}/>
                </div>
                <div className={form.formGroup}>
                    <input type="button" value="Create account" className={form.button} onClick={() => props.changeForm(1)} />
                    <input type="submit" value="Login" disabled={props.loading} className={form.button} />
                </div>
            </form>
        </div>
    );
};

LoginForm.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    changeForm: PropTypes.func,
    loading: PropTypes.bool
};