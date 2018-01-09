import React from 'react';
import styles from './User.css';
import form from '../../shared/form.css';
import fonts from '../../shared/fonts.css';

export const LoginForm = (props) => {
    return (
        <div className={styles.formWrapper}>
            <h1 className={fonts.mainHeading}>Login</h1>
            <form>
                <div className={form.formGroup}>
                    <input type="text" name="username" id="username" className={form.input} placeholder="Username" />   
                </div>
                <div className={form.formGroup}>
                    <input type="password" name="password" id="password" className={form.input} placeholder="Password"/>
                </div>
                <div className={form.formGroup}>
                    <input type="submit" value="Login" className={form.submit}/>
                </div>
            </form>
        </div>
    );
};