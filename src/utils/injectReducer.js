// @flow
import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { ReactReduxContext } from 'react-redux';

const withReducer = (key, reducer) => WrappedComponent => {
  class ReducerInjector extends React.Component {
    static contextType = ReactReduxContext;

    static WrappedComponent = WrappedComponent;

    constructor(props, context) {
      super(props, context);

      // register reducer on-the-fly
      const {
        context: { store }
      } = this;
      store.injectReducer(key, reducer);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return hoistNonReactStatics(ReducerInjector, WrappedComponent);
};

const useInjectReducer = (key, reducer) => {
  const context = React.useContext(ReactReduxContext);

  React.useEffect(() => {
    context.store.injectReducer(key, reducer);
  }, []);
};

export { useInjectReducer };
export default withReducer;
