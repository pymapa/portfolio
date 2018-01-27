import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './Messaging.css';
import form from '../../shared/form.css';
import ajax from '../../shared/ajax';
import {sendMessage} from '../../actions/messageActions';


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
        this.props.sendMessage(this.message.value, this.props.messaging.conversation);
        
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

WriteMessage.propTypes = {
    messaging: PropTypes.object,
    sendMessage: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        messaging: state.messaging
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (message, conversation) => {
            dispatch(sendMessage(message, conversation));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WriteMessage);