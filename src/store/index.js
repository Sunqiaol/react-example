import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { reducer } from './getUsers';

// Construct the Redux store;
const logger = createLogger({ collapsed: true });
const middleware = applyMiddleware(thunkMiddleware, logger);

const store = createStore(reducer, middleware);

// Export the store by default, which will be provided to and injected within the entire application;
export default store;