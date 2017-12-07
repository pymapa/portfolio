import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Footer} from '../components/footer/Footer';

import {showMenu, hideMenu} from '../actions/menuActions';

class FooterContainer extends Component {
    constructor(props) {
        super(props);

        this.showMenu = this.showMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
    }
    showMenu() {
        this.props.showMenu();
    }
    hideMenu() {
        // setTimeout(() => {
        this.props.hideMenu();
        // }, 500);
    }

    render () {
        return (
            <Footer showMenu={this.showMenu} hideMenu={this.hideMenu}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        menu: state.menu,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        showMenu: () => {
            dispatch(showMenu());
        },
        hideMenu: () => {
            dispatch(hideMenu());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);

FooterContainer.propTypes = {
    showMenu: PropTypes.func,
    hideMenu: PropTypes.func
};