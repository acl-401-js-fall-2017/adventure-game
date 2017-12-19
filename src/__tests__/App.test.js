import React from 'react';

import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import App from '../App';

describe('Game', () => {

  it('shows a app', () => {
    const wrapper = shallow(<App/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});