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
                and will continue tweaking and adding useless stuff. 
                Unless I lose my interest.
            </p>
            <p>There are information about technologies used in the project, 
                link to Github repo and my LinkedIn profile, for those interested. 
                I will add a discussion forum that most likely no one will use, 
                but just for the heck of it. At least geeks can mock my ugly code.
            </p>
            <p>Enjoy!</p>
        </div>
    );
};

Home.propTypes = {
    user: PropTypes.object.isRequired,
};