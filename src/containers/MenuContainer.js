import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../components/menu/Menu.css';

import {Menu} from '../components/menu/Menu';
import {showMenu, hideMenu} from '../actions/menuActions';

class MenuContainer extends Component {
    constructor(props) {
        super(props);

        this.showMenu = this.showMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
    }
    componentDidMount() {
        console.log(this.props.menu);
    }

    showMenu() {
        this.props.showMenu();
    }

    hideMenu() {
        this.props.hideMenu();
    }

    render () {
        return (
            <div onMouseEnter={this.showMenu} onMouseLeave={this.hideMenu} className={this.props.menu.show ? styles.wrapper : styles.hidden}>
                {this.props.menu.show ? <Menu hideMenu={this.hideMenu} menu={this.props.menu} /> : ''}
            </div>
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

MenuContainer.propTypes = {
    menu: PropTypes.object,
    showMenu: PropTypes.func,
    hideMenu: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);