import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import invariant from 'invariant';
import { isEmpty, isFunction, isString } from 'lodash';

import createReducer from './reducers';

const configureStore = () => {
  const middleware = applyMiddleware(thunk, logger);

  const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(createReducer(), reduxDevTools(middleware));

  // Create an object to store on-the-fly reducer registration
  store.injectedReducers  = {};

  // delegate ultilized function for `injectReducer`
  store.injectReducer = (key, reducer) => {
    invariant(
      isString(key) && !isEmpty(key) && isFunction(reducer),
      '(src/utils...) injectReducer: Expected `reducer` to be a reducer function',
    );

    // Check `store.injectedReducers[key] === reducer` for hot reloading when a key is the same but a reducer is different
    if (
      Reflect.has(store.injectedReducers, key) &&
      store.injectedReducers[key] === reducer
    )
      return;

    store.injectedReducers [key] = reducer;
    store.replaceReducer(createReducer(store.injectedReducers ));
  };

  return store;

};

export default configureStore;
