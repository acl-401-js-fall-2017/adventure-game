import React from 'react';

import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Chocolate from '../components/Chocolate';

describe('Chocolate', () => {

  it('shows a chocolate', () => {
    const wrapper = shallow(<Chocolate handleInventory={() => {}} inventory={[]} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});