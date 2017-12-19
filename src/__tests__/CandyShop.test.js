import React from 'react';

import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Candyshop from '../components/Candyshop';

describe('CandyShop', () => {

  it('shows a candyshop', () => {
    const wrapper = shallow(<Candyshop handleInventory={() => {}} inventory={[]} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});