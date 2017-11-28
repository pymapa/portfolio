const userReducer = (state = {
    name: "Pyry",
    role: ""
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            };
            break;
        case "SET_ROLE":
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

export default userReducer;