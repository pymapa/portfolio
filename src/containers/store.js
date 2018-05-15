import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import userReducer from '../reducers/userReducer';
import beverageReducer from '../reducers/beverageReducer';
import menuReducer from '../reducers/menuReducer';
import applicationmessageReducer from '../reducers/applicationmessageReducer';
import messageReducer from '../reducers/messageReducer';

const reducers = combineReducers({
    user: userReducer,
    beverage: beverageReducer,
    menu: menuReducer,
    applicationMessages: applicationmessageReducer,
    messaging: messageReducer
});

const middleWare = applyMiddleware(/* createLogger(), */ thunk);

export default createStore(
    reducers,
    compose(
        middleWare,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
