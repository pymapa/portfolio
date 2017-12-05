const userReducer = (state = {
    name: '',
    role: '',
    signed: false
}, action) => {
    switch (action.type) {
    case 'SET_NAME':
        state = {
            ...state,
            name: action.payload
        };
        break;
    case 'SET_ROLE':
        state = {
            ...state,
            role: action.payload
        };
        break;
    case 'SIGN_IN':
        state = {
            ...state,
            name: action.payload.name,
            signed: true
        };
        break;
    default:
        break;
    }
    return state;
};

export default userReducer;