import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from '../reducers'

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    const { logger } = require(`redux-logger`);
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));