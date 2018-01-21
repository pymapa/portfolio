const messageReducer = (state = {conversation: {id: null}}, action) => {
    switch (action.type) {
    case 'SELECT_CONVERSATION':
        state = {
            ...state,
            conversation: action.payload
        };
        break;
    default:
        break;
    }
    return state;
};

export default messageReducer;