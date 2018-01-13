const initialState = {
    messages: [
        // {
        //     message: 'Success message',
        //     type: 1,
        //     id: 'asdfö84'
        // },
        // {
        //     message: 'Info message',
        //     type: 0,
        //     id: 'alskfbnoir'
        // },
        // {
        //     message: 'warning message',
        //     type: 2,
        //     id: 'lkaegj5608'
        // },
        // {
        //     message: 'error message!!!!',
        //     type: 3,
        //     id: 'osabknsdgbi'
        // }
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