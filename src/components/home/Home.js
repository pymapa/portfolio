import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import fonts from '../../shared/fonts.css';
import styles from './Home.css';

export const Home = (props) => {
    return (
        <div className={styles.parent}>
            <h1 className={fonts.mainHeading}>Bar _Foo</h1>
            {props.user.signed ? <h3>Hi there {props.user.username}! Nice to meet you.</h3> : <p>Mind to <Link to='/login'>sign in?</Link></p>}
            <br/>
        </div>
    );
};

Home.propTypes = {
    user: PropTypes.object.isRequired,
};