import { combineReducers } from 'redux';
import homeReducer from './containers/pages/Home/redux/reducers';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    home: homeReducer,
    ...injectedReducers
  });

  return rootReducer;
}
