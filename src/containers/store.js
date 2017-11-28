import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import userReducer from '../reducers/userReducer';
import beverageReducer from '../reducers/beverageReducer';

export default createStore(
    combineReducers({
        user: userReducer,
        beverage: beverageReducer
    }),
    {},
    applyMiddleware(createLogger())
)