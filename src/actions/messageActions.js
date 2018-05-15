import ajax from '../shared/ajax';

export const actions = {
    NEW_MESSAGE: 'NEW_MESSAGE',
    SELECT_CONVERSATION: 'SELECT_CONVERSATION',
    RECEIVE_MESSAGES: 'RECEIVE_MESSAGES',
    RECEIVE_CONVERSATIONS: 'RECEIVE_CONVERSATIONS'
};

export function createConversation(conversation) {
    return async dispatch => {
        try {
            await ajax.sendPost('/conversation', conversation);
            dispatch(fetchConversations());
        } catch(err) {

        }
    };
}

export function selectConversation(conversation) {
    return {
        type: actions.SELECT_CONVERSATION,
        payload: conversation
    };
}

export function fetchConversations() {
    return async dispatch => {
        try {
            const conversations = await ajax.sendGet('/conversations');
            dispatch(receiveConversations(conversations));
        } catch (err) {}
    };
}

export function fetchMessages(conversation) {
    return dispatch => {
        return ajax
            .sendGet('/messages/' + conversation.id)
            .then(json => dispatch(receiveMessages(conversation, json)))
            .catch(err => console.log(err));
    };
}

export function sendMessage(message, conversation) {
    return dispatch => {
        return ajax
            .sendPut('/message', {
                message: message,
                conversationId: conversation.id
            })
            .then(res => {
                dispatch(newMessage(res));
            })
            .catch(err => console.log(err));
    };
}

function receiveConversations(conversations) {
    console.log(conversations);
    return {
        type: actions.RECEIVE_CONVERSATIONS,
        conversations
    };
}

function receiveMessages(conversation, json) {
    return {
        type: actions.RECEIVE_MESSAGES,
        payload: json
    };
}

function newMessage(message) {
    return {
        type: actions.NEW_MESSAGE,
        message
    };
}
