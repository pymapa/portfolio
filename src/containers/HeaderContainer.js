import React, { Component } from 'react';
import { connect } from 'react-redux';

import {Header} from '../components/header/Header';

class HeaderContainer extends Component {
    render() {
        return (
            <div>
                {/* <Header user={this.props.user} /> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};
const mapDispatchToProps = (dispatch) => {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);