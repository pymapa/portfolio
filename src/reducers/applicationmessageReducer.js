const initialState = {
    messages: []
};

const applicationmessageReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'ADD_MESSAGE':
        state = {
            ...state,
            messages: [...state.messages, action.payload]
        };
        break;
    case 'CLEAR_MESSAGES':
        break;
    case 'CLEAR_MESSAGE':
        state = {
            ...state,
            messages: state.messages.filter((m) => {
                return m.id !== action.payload;
            })
        };
        break;
    default:
        return state;
    }
    return state;
};
export default applicationmessageReducer;