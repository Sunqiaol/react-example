/*==================================================
index.js
It sets up the Redux Store with boilerplate components.
================================================== */
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { reducer } from './getUsers';

// Construct the Redux store;
const logger = createLogger({ collapsed: true });
const middleware = applyMiddleware(thunkMiddleware, logger);

const store = createStore(reducer, middleware);

// Export the store to be used within the entire application
export default store;