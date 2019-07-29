import Immutable from 'seamless-immutable';
import * as constant from './constant';

const initialState = {};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case constant.ACTION_NAME: {
      return Immutable.merge(state, {
        ...payload
      });
    }
    default:
      return state;
  }
}
