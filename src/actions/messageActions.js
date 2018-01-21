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
            .then(json => dispatch(receiveMessages(conversation, json)));
    };
}

function receiveMessages(conversation, json) {
    console.log(json);
    return {
        type: 'RECEIVE_MESSAGES',
        conversation,
        messages: json.data
    };
}