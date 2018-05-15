import React, { Component } from 'react';
import cuid from 'cuid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Messaging.css';
import Conversation from './Conversation';
import { AddConversation } from './AddConversation';
import ajax from '../../shared/ajax';
import {createConversation, selectConversation, fetchConversations} from '../../actions/messageActions';

class Conversations extends Component {

    constructor(props) {
        super(props);

        this.state = {
            conversationName: ''
        };
        this.conversations = this.conversations.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.createConversation = this.createConversation.bind(this);
    }

    async componentDidMount() {
        this.props.fetchConversations();
    }

    conversations() {
        const conversations = this.props.conversations
            .slice(0)
            .reverse()
            .map((c) => {
                return <Conversation key={cuid()} conversation={c.Conversation} />;
            });
        return conversations;
    }

    async createConversation(e) {
        e.preventDefault();
        console.log('createconv');
        this.props.createConversation({name: this.state.conversationName});
    }

    handleChange(e) {
        this.setState({ conversationName: e.target.value });
    }

    render() {
        return (
            <div className={styles.conversationsWrapper}>
                <AddConversation
                    createConversation={this.createConversation}
                    conversationName={this.state.conversationName}
                    handleChange={this.handleChange}
                />
                {this.conversations()}
                {this.props.conversations.length < 1 ? (
                    <p>No conversations</p>
                ) : (
                    ''
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        conversations: state.messaging.conversations,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchConversations: () => dispatch(fetchConversations()),
        createConversation: (conversation) => dispatch(createConversation(conversation))
    };
};

Conversations.propTypes = {
    fetchConversations: PropTypes.func,
    conversations: PropTypes.array,
    createConversation: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Conversations);
