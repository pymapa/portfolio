import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Message.css';
import {clearMessage} from '../../actions/applicationmessageActions';

class Message extends Component {
    componentDidMount() {
        setTimeout(() => {
            console.log('asdfasd');
        }, 5000);
    }

    removeMessage() {

    }

    render () {
        return (
            <div className={styles.message + ' ' + this.props.typestyle}>
                <div className={styles.text}>
                    {this.props.message.message}
                </div>
                <div className={styles.close}>
                    <a href="#" onClick={this.removeMessage}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.applicationMessages.messages,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (user) => {
            dispatch(signIn(user));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Message);

Message.propTypes = {
    message: PropTypes.object,
    typestyle: PropTypes.any
};