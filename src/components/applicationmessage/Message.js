import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Message.css';
import {clearMessage} from '../../actions/applicationmessageActions';

class Message extends Component {
    constructor(props) {
        super(props);

        this.removeMessage = this.removeMessage.bind(this);
    }

    componentDidMount() {
        if(this.props.message.autoHide || true) {
            setTimeout(() => {
                this.props.clearMessage(this.props.message.id);
            }, 5000);
        }
       
    }

    removeMessage(id) {
        this.props.clearMessage(id);
    }

    render () {
        return (
            <div className={styles.message + ' ' + this.props.typestyle}>
                <div className={styles.text}>
                    {this.props.message.message}
                </div>
                <div className={styles.close}>
                    <a href="#" onClick={() => this.removeMessage(this.props.message.id)}>
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
        clearMessage: (id) => {
            dispatch(clearMessage(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Message);

Message.propTypes = {
    message: PropTypes.object,
    typestyle: PropTypes.any,
    clearMessage: PropTypes.func
};