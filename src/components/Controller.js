import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Buttons from './Buttons';
import SelectBox from './SelectBox';

class Controller extends Component{
  render(){  
    const { floor, floors, pizzaIngredients, floorChange, pickUpVal, pickUp, addToPizza, drop, handlePickUpValue, makePizza } = this.props;
    return(
      <div className="wrapper">
        <label className="label-one">The Elevator</label>
        <SelectBox options={floors} className="dropDown one" name="elevator"
          selectChange={floorNumber => floorChange(floorNumber)} />
        <Buttons pickUpVal={pickUpVal} pickUp={item => pickUp(item)} pizzaIngredients={pizzaIngredients}
          addToPizza={item => addToPizza(item)} drop={() => drop()} floor={floor} makePizza={makePizza}/>
        <img id="pics" alt={floor.alt} src={floor.img} />
        <label className="label-five">Items in the Room</label>
        <SelectBox options={floor.items} className="dropDown five" name="items-in-room" 
          selectChange={item => handlePickUpValue(item)}/>
      </div>
    );
  }
}
Controller.propTypes = {
  floor: PropTypes.object,
  floors: PropTypes.array,
  floorChange: PropTypes.func,
  addToPizza: PropTypes.func,
  pickUp: PropTypes.func,
  pickUpVal: PropTypes.string,
  drop: PropTypes.func,
  handlePickUpValue: PropTypes.func,
  holding: PropTypes.string
};
  
export default Controller;