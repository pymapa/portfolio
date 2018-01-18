const messageReducer = (state = {conversation: null}, action) => {
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
