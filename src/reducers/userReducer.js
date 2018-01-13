const userReducer = (state = 
    JSON.parse(sessionStorage.getItem('user')) || {signed: false}, action) => {
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
            signed: action.payload.signed
        };
        break;
    case 'SIGN_OUT':
        state = {
            ...state,
            signed: false
        };
        break;
    default:
        break;
    }
    return state;
};

export default userReducer;