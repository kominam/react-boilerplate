import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('<App />', () => {
  const wrap = shallow(<App />);

  it('renders', () => {
    expect(wrap.find(App).exists()).toBe(true);
  });
});
