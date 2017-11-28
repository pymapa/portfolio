const beverageReducer = (state = {
    drink: "",
    amount: 100
}, action) => {
    switch (action.type) {
        case "SET_DRINK":
            state = {
                ...state,
                name: action.payload
            };
            break;
        case "TAKE_SIP":
            state = {
                ...state,
                role: action.payload
            }
            break;
        default:
            break;
    }
    return state;
}

export default beverageReducer;