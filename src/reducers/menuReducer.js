const menuReducer = (state = {
    show: false
}, action) => {
    switch (action.type) {
    case 'SHOW_MENU':
        state = {
            ...state,
            show: true
        };
        break;
    case 'HIDE_MENU':
        state = {
            ...state,
            show: false
        };
        break;
    default:
        break;
    }
    return state;
};

export default menuReducer;