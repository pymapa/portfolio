module.exports = {
    selectConversation: (conversation) => {
        return {
            type: 'SELECT_CONVERSATION',
            payload: conversation
        };
    },
};