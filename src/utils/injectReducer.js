// @flow
import React from 'react';
import { ReactReduxContext } from 'react-redux';

const withReducer = (key, reducer) => WrappedComponent => {
  const Extended = (props, context) => {
    const { store } = context;

    store.injectReducer(key, reducer);

    // Now just give back the original component as-is.
    return <WrappedComponent {...props} />;
  };

  // To use context, you must define contextTypes
  // https://reactjs.org/docs/context.html
  Extended.contextTypes = {
    store: Object
  };

  return Extended;
};

const useInjectReducer = ({ key, reducer }) => {
  const context = React.useContext(ReactReduxContext);
  React.useEffect(() => {
    context.store.injectReducer(key, reducer);
  }, []);
};

export { useInjectReducer };
export default withReducer;