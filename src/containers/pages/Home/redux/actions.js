import * as constant from './constant';

export function changeAppName(name) {
  return {
    type: constant.CHANGE_APP_NAME,
    payload: {
      name
    }
  };
}

export function changeAppDescription(description) {
  return {
    type: constant.CHANGE_APP_DESCRIPTION,
    payload: {
      description
    }
  };
}
