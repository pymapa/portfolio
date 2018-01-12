import React, {Component} from 'react';
import { connect } from 'react-redux';
import styles from './Message.css';
import PropTypes from 'prop-types';

import constants from '../../shared/applicationConstants';

import Message from './Message';


class ApplicationMessage extends Component {
    constructor(props) {
        super(props);

        this.renderMessages = this.renderInfos.bind(this);
    }
    
    renderInfos() {
        const map = this.props.messages.filter(m => {
            return m.type === constants.MESSAGE_INFO;
        })
            .map((m, i) => {
                return (
                    <Message key={i} message={m} typestyle={styles.info}/>
                );
            });
        return map;
    }

    renderSuccess() {
        const map = this.props.messages.filter(m => {
            return m.type === constants.MESSAGE_SUCCESS;
        })
            .map((m, i) => {
                return (
                    <Message key={i} message={m} typestyle={styles.success}/>
                );
            });
        return map;
    }

    renderWarnings() {
        const map = this.props.messages.filter(m => {
            return m.type === constants.MESSAGE_WARNING;
        })
            .map((m, i) => {
                return (
                    <Message key={i} message={m} typestyle={styles.warning}/>
                );
            });
        return map;
    }

    renderError() {
        const map = this.props.messages.filter(m => {
            return m.type === constants.MESSAGE_ERROR;
        })
            .map((m, i) => {
                return (
                    <Message key={i} message={m} typestyle={styles.error}/>
                );
            });
        return map;
    }

    render() {
        return (
            <div className={styles.wrapper}>
                {this.renderInfos()}
                {this.renderSuccess()}
                {this.renderWarnings()}
                {this.renderError()}
            </div>
        );
    }
};

ApplicationMessage.propTypes = {
    messages: PropTypes.array
};

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

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationMessage);