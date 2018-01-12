const initialState = {
    messages: [
        {
            message: 'Success message',
            type: 1
        },
        {
            message: 'Info message',
            type: 0
        },
        {
            message: 'warning message',
            type: 2
        },
        {
            message: 'error message!!!!',
            type: 3
        }
    ]
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
            messages: state.messages.filter((m, i) => {
                return i !== action.payload;
            })
        };
        break;
    default:
        return state;
    }
    return state;
};
export default applicationmessageReducer;