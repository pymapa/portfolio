import {actions} from '../actions/messageActions';

const initialState = {
    conversations: [],
    conversation: { id: null },
    messages: []
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
    case actions.SELECT_CONVERSATION:
        state = {
            ...state,
            conversation: action.payload
        };
        break;
    case actions.RECEIVE_MESSAGES:
        state = {
            ...state,
            messages: action.payload
        };
        break;
    case actions.RECEIVE_CONVERSATIONS:
        state = {
            ...state,
            conversations: action.conversations
        };
    case actions.NEW_MESSAGE:
        state = {
            ...state,
            messages: [...state.messages, action.message]
        };
        break;
    default:
        break;
    }
    return state;
};

export default messageReducer;
