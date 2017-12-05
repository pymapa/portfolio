import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {Header} from '../components/header/Header';

class HeaderContainer extends Component {
    render() {
        return (
            <Header user={this.props.user} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(HeaderContainer);

HeaderContainer.propTypes = {
    user: PropTypes.object.isRequired
};