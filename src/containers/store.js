import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import userReducer from '../reducers/userReducer';
import beverageReducer from '../reducers/beverageReducer';
import menuReducer from '../reducers/menuReducer';

export default createStore(
    combineReducers({
        user: userReducer,
        beverage: beverageReducer,
        menu: menuReducer
    }),
    {},
    applyMiddleware(createLogger(), thunk)
);