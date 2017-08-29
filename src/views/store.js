import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from './reducers';

const logger = store => next => (action) => { //eslint-disable-line
  console.log("Action!", action); //eslint-disable-line
  next(action);
};

const middleware = applyMiddleware(logger, promiseMiddleware());

export default createStore(reducers, middleware);
