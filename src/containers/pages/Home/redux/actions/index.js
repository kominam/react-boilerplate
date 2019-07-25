export const ACTION_NAME = 'ACTION_NAME';

export function changeActionName(name) {
  return {
    type: ACTION_NAME,
    payload: {
      name,
    }
  };
}
