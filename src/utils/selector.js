import { createSelector } from 'reselect';
import { get } from 'lodash';

const selector = (propPath, fn = value => value) => state =>
  createSelector(
    [s => get(s, propPath)],
    fn
  )(state);

export default selector;
