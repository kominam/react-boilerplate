import Immutable from 'seamless-immutable';
import * as constant from './constant';

const initialState = {
  name: 'React Boilerplate',
  description: 'Minimal React Boilerplate for starter'
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case constant.CHANGE_APP_NAME: {
      return Immutable.merge(state, {
        name: payload.name
      });
    }
    case constant.CHANGE_APP_DESCRIPTION: {
      return Immutable.merge(state, {
        description: payload.description
      });
    }
    default:
      return state;
  }
}
