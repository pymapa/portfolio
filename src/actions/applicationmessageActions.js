const cuid = require('cuid');

module.exports = {
    addMessage: (text, type) => {
        const id = cuid();
        return {
            type: 'ADD_MESSAGE',
            payload: {
                message: text,
                type: type,
                id: id
            }
        };
    },

    clearMessages: () => {
        return {
            type: 'CLEAR_MESSAGES'
        };
    },

    clearMessage: (id) => {
        return {
            type: 'CLEAR_MESSAGE',
            payload: id
        };
    }
};