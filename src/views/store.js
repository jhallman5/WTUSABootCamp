import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';

import reducers from './reducers';

const middleware = applyMiddleware(logger, promiseMiddleware());

export default createStore(reducers, middleware);
