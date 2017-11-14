import React from 'react';

import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

import App from '../App';

describe('Game', () => {

  it('shows a app', () => {
    const wrapper = shallow(<App/>);
    console.log(toJSON(wrapper));
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});