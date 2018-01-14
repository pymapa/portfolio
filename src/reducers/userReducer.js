const userReducer = (state = 
    JSON.parse(sessionStorage.getItem('user')) || {signed: false}, action) => {
    switch (action.type) {
    case 'SET_NAME':
        state = {
            ...state,
            username: action.payload
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
            username: action.payload.username,
            email: action.payload.email,
            signed: action.payload.signed
        };
        break;
    case 'SIGN_OUT':
        state = {
            ...state,
            signed: false,
            username: '',
            email: ''
        };
        break;
    default:
        break;
    }
    return state;
};

export default userReducer;