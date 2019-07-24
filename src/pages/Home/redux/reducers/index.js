import Immutable from 'seamless-immutable';
import * as actions from '../actions';

const initialState = {};

export default function (state = initialState, action) {
  const {
    type,
    payload,
  } = action;

  switch (type) {
  case actions.ACTION_NAME: {
    return Immutable.merge(state, {
      ...payload
    });
  }
  default:
    return state;
  }
}
