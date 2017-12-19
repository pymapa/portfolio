import React from 'react';
import PropTypes from 'prop-types';
import fonts from '../../shared/fonts.css';
import styles from './Home.css';

export const Home = (props) => {
    return (
        <div className={styles.parent}>
            <h1 className={fonts.mainHeading}>Bar _Foo</h1>
            <h3>Hi there {props.user.name}! Nice to meet you.</h3>
            <br/>
            <p>My name is Pyry and this is my web-playground. 
                I started this project in December 2017 
                and will continue tweaking and adding useless stuff 
                until I lose my interest.
            </p>
            <p>There are information about technologies used in the project, 
                link to Github repo and to my LinkedIn profile, for those interested. 
                You are free to contact regarding recruitment, fancy ideas or just mock my ugly code.
            </p>
            <p><i>Enjoy!</i></p>
        </div>
    );
};

Home.propTypes = {
    user: PropTypes.object.isRequired,
};