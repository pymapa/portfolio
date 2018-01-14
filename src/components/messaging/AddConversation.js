import React from 'react';
import PropTypes from 'prop-types';
import styles from './Messaging.css';
import form from '../../shared/form.css';

export const AddConversation = (props) => {
    return (
        <form onSubmit={props.createConversation}>
            <input 
                type="text" 
                name="conversationName" 
                id="conversationName" 
                value={props.conversationName}
                className={form.input} 
                placeholder="Create conversation"
                onChange={props.handleChange}/>
        </form>
    );
};

AddConversation.propTypes = {
    createConversation: PropTypes.func,
    conversationName: PropTypes.string,
    handleChange: PropTypes.func
};