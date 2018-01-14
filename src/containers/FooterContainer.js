import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Footer} from '../components/footer/Footer';

import {showMenu, hideMenu} from '../actions/menuActions';
import {signOut} from '../actions/userActions';

class FooterContainer extends Component {
    constructor(props) {
        super(props);

        this.showMenu = this.showMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
        this.signOut = this.signOut.bind(this);
    }
    showMenu() {
        this.props.showMenu();
    }
    hideMenu() {
        this.props.hideMenu();
    }
    signOut() {
        this.props.signOut();
    }

    render () {
        return (
            <Footer signOut={this.signOut} user={this.props.user} showMenu={this.showMenu} hideMenu={this.hideMenu}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        menu: state.menu,
        user: state.user
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        showMenu: () => {
            dispatch(showMenu());
        },
        hideMenu: () => {
            dispatch(hideMenu());
        },
        signOut: () => {
            dispatch(signOut());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);

FooterContainer.propTypes = {
    showMenu: PropTypes.func,
    hideMenu: PropTypes.func,
    signOut: PropTypes.func,
    user: PropTypes.object
};