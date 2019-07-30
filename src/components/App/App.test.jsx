import React from 'react';
import { mount } from 'enzyme';

import App from './App';

describe('<App />', () => {
  it('renders', () => {
    const wrapper = mount(<App name="AppName" description="AppDescription" />);

    expect(wrapper.props().name).toBe('AppName');
  });
});
