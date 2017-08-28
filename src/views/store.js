import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const logger = store => next => (action) => { //eslint-disable-line
  console.log("Action!", action); //eslint-disable-line
  next(action);
};

const middleware = applyMiddleware(logger);

export default createStore(reducers, middleware);
