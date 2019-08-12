import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers';

const configureStore = () => {
  const middleware = applyMiddleware(thunk, logger);

  const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(rootReducer, reduxDevTools(middleware));

  return store;
};

export default configureStore;
