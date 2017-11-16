import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import GameInfo from '../GameInfo';
//import Floors from '../Floors';

describe('App', () => {
  it('should render game info component', () => {
    const wrapper = shallow(<GameInfo holding="sauce" pizzaIngredients={['cheese', 'crust']} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});