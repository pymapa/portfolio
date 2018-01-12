module.exports = {
    addMessage: (message) => {
        return {
            type: 'ADD_MESSAGE',
            payload: message
        };
    },

    clearMessages: () => {
        return {
            type: 'CLEAR_MESSAGES'
        };
    },

    clearMessage: (i) => {
        return {
            type: 'CLEAR_MESSAGE',
            payload: i
        };
    }
};