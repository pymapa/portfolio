import ajax from '../shared/ajax';

export function selectConversation(conversation) {
    return {
        type: 'SELECT_CONVERSATION',
        payload: conversation
    };
}

export function fetchMessages(conversation) {
    return (dispatch) => {
        return ajax.sendGet('/messages/' + conversation.id)
            .then(json => dispatch(receiveMessages(conversation, json)))
            .catch(err => console.log(err));
    };
}

export function sendMessage(message, conversation) {
    return (dispatch) => {
        return ajax.sendPut('/message', {message: message, conversationId: conversation.id})
            .then(res => {
                console.log(res);
                dispatch(newMessage(res));
            })
            .catch(err => console.log(err));
    };
}

function receiveMessages(conversation, json) {
    return {
        type: 'RECEIVE_MESSAGES',
        payload: json
    };
}

function newMessage(res) {
    return {
        type: 'NEW_MESSAGE',
        payload: res
    };
}