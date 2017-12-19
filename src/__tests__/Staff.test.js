import React from 'react';

import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Staff from '../components/Staff';

describe('staff', () => {

  it('shows a Staff', () => {
    const wrapper = shallow(<Staff handleInventory={() => {}} inventory={[]} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});