import React, { Component } from 'react';
import {Footer} from '../components/footer/Footer';

class FooterContainer extends Component {
    showMenu() {
        console.log('show menu');
    }
    hideMenu() {
        console.log('hide menu');
    }

    render () {
        return (
            <Footer showMenu={this.showMenu} hideMenu={this.hideMenu}/>
        );
    }
}

export default FooterContainer;