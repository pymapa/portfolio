import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import userReducer from '../reducers/userReducer';
import beverageReducer from '../reducers/beverageReducer';
import menuReducer from '../reducers/menuReducer';
import applicationmessageReducer from '../reducers/applicationmessageReducer';
import messageReducer from '../reducers/messageReducer';

export default createStore(
    combineReducers({
        user: userReducer,
        beverage: beverageReducer,
        menu: menuReducer,
        applicationMessages: applicationmessageReducer,
        messaging: messageReducer
    }),
    {},
    applyMiddleware(createLogger(), thunk)
);