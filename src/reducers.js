import { combineReducers } from 'redux';
import homeReducer from './containers/pages/Home/redux/reducers';

const rootReducer = combineReducers({
  home: homeReducer
});

export default rootReducer;
