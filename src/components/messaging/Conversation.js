import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Messaging.css';
import {selectConversation, fetchMessages} from '../../actions/messageActions';

const Conversation = (props) => {

    return (
        <div onClick={() => props.selectConversation(props.conversation)}  className={props.conversation.id === props.messageState.conversation.id ? styles.selectedConversation : styles.conversation} >
            <h3>{props.conversation.name}</h3>
        </div>
    );
};

Conversation.propTypes = {
    conversation: PropTypes.object,
    selectConversation: PropTypes.func,
    messageState: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        messageState: state.messaging
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectConversation: (conversation) => {
            dispatch(selectConversation(conversation));
            dispatch(fetchMessages(conversation));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Conversation);