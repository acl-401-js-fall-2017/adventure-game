import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import GameInfo from '../components/GameInfo';
import SelectBox from '../components/SelectBox';
import floors from '../Floors';
import Buttons from '../components/Buttons';
import Controller from '../components/Buttons';
import Floor from '../components/Floor';


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

  it('should render Buttons component', () => {
    const wrapper = shallow(<Buttons pickUpVal="cheese" pizzaIngredients={['sauce', 'crust']} floor={floors[0]}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should render Controller component', () => {
    const wrapper = shallow(<Controller floor={floors[0]} floors={floors}  pizzaIngredients={['sauce', 'crust']}
      pickUpVal="sauce" holding="crust"/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should render Floor component', () => {
    const wrapper = shallow(<Floor floorScript ={floors[1].message} holding="sauce" pizzaIngredients={['sauce', 'crust']}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });


});