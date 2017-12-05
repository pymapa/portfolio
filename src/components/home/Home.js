import React from 'react';
import PropTypes from 'prop-types';

export const Home = (props) => {
    return (
        <div>
            <h1>Home!</h1>

            <h3>Hi there {props.user.name}! Nice to meet you. Would you like something?</h3>
        </div>
    );
};

Home.propTypes = {
    user: PropTypes.object.isRequired,
};