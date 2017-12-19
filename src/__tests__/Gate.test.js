import React from 'react';

import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Gate from '../components/Gate';

describe('gate', () => {

  it('shows a Gate', () => {
    const wrapper = shallow(<Gate handleInventory={() => {}} inventory={[]} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});