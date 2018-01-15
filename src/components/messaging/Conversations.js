import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Messaging.css';
import {Conversation} from './Conversation';
import {AddConversation} from './AddConversation';
import ajax from '../../shared/ajax';

class Conversations extends Component {
    constructor(props) {
        super(props);

        this.state = {
            conversations: [],
            conversationName: ''
        };
        this.conversations = this.conversations.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.createConversation = this.createConversation.bind(this);
    }

    componentDidMount () {
        ajax.sendGet('/conversations')
            .catch(err => {
                console.log(err);
            })
            .then(res => {
                this.setState({conversations: res});
                console.log(res);
            });
    }
    
    conversations() {
        const conversations = this.state.conversations.slice(0).reverse().map((c, i) => {
            return <Conversation key={i} conversation={c.Conversation} />;
        });
        return conversations;
    }

    createConversation(e) {
        e.preventDefault();
        ajax.sendPut('/conversation', {name: this.state.conversationName})
            .then(res => {
                console.log(res);
                const _conversations = this.state.conversations.slice();
                _conversations.push({Conversation: res});
                this.setState({conversations: _conversations, conversationName: ''});
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleChange(e) {
        this.setState({conversationName: e.target.value});
    }

    render() {
        return (
            <div className={styles.conversationsWrapper}>
                <AddConversation createConversation={this.createConversation} conversationName={this.state.conversationName} handleChange={this.handleChange} />
                {this.conversations()}
                {this.state.conversations.length < 1 ? <p>No conversations</p>: ''}
            </div>
        );
    }
};

export default Conversations;