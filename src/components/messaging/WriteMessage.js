import React, { Component } from 'react';
import styles from './Messaging.css';
import form from '../../shared/form.css';
import ajax from '../../shared/ajax';


class WriteMessage extends Component {
    constructor(props) {
        super(props);

        this.send = this.send.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.message.focus();
    }

    send(e) {
        e.preventDefault();
        console.log(this.message.value);
        
    }

    handleChange(e) {
        if(e.key === 'Enter') {
            this.send(e);
        }
    }

    render () {
        return (
            <div className={styles.writemessageWrapper}>
                <form onSubmit={this.send} className={form.formGroup}>
                    <textarea onKeyPress={this.handleChange} type="text" ref={(input) => {this.message = input;}} className={form.input + ' ' + form.textarea}/>
                </form>
            </div>
        );
    }
}

export default WriteMessage;