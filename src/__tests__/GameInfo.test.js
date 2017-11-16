import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import GameInfo from '../GameInfo';
import SelectBox from '../SelectBox';
import floors from '../Floors';


describe('App', () => {

  it('should render game info component', () => {
    const wrapper = shallow(<GameInfo holding="sauce" pizzaIngredients={['cheese', 'crust']} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should render SelectBox component', () => {
    const wrapper = shallow(<SelectBox options={floors} className="dropDown one" name="elevator"
      selectChange={floorNumber => floorNumber} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });


});