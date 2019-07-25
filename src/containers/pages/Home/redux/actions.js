import * as constant from './constant';

export function changeActionName(name) {
  return {
    type: constant.ACTION_NAME,
    payload: {
      name,
    }
  };
}

export function changeActionName2(name) {
  return {
    type: constant.ACTION_NAME_2,
    payload: {
      name,
    }
  };
}

