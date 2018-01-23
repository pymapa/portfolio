const messageReducer = (state = {
    conversation: {id: null},
    messages: []
}, action) => {
    switch (action.type) {
    case 'SELECT_CONVERSATION':
        state = {
            ...state,
            conversation: action.payload
        };
        break;
    case 'RECEIVE_MESSAGES':
        state = {
            ...state,
            messages: action.payload
        };
    default:
        break;
    }
    return state;
};

export default messageReducer;