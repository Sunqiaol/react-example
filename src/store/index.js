/*==================================================
index.js
It sets up the Redux Store with boilerplate components.
================================================== */
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { reducer } from './getUsers';

// Construct Redux store
const logger = createLogger({ collapsed: true });  // Middleware to log actions and display in developer console.
const middleware = applyMiddleware(thunkMiddleware, logger);  // Apply Think and Logger middleware
// Syntax: createStore(reducer, [preloadedOption])
const store = createStore(reducer, middleware);

// Export the store to be used within the entire application
export default store;