import React from 'react';

import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Inventing from '../components/Inventing';

describe('inventing', () => {

  it('shows a Inventing', () => {
    const wrapper = shallow(<Inventing handleInventory={() => {}} inventory={[]} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});