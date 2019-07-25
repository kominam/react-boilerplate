import React from 'react';
import loadable from '@utils/loadable';

export default loadable(() => import('./Home'), {
  fallbackComponent: <p>Loading </p>,
});
