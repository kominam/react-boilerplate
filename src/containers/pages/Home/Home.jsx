// @flow
import React from 'react';
import { connect } from 'react-redux';

import App from '@components/App';

import selector from '@utils/selector';
import * as actions from './redux/actions';

type Props = {
  name: String,
  description: String,
}

const Home = (props: Props) => {
  const { name, description } =  props;
  
  return (
    <App
      name={name}
      description={description}
    />
  );
};

const mapStateToProps = (state) => ({
  name: selector('home.name')(state),
  description: selector('home.description')(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeAppName: (name) => dispatch(actions.changeAppName(name)),
  changeAppDescription:(desc) => dispatch(actions.changeAppDescription(desc)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
