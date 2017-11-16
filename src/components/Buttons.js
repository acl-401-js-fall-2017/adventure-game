import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Buttons extends Component {
  render(){
    const arrSort = ['cheese', 'crust', 'sauce'];
    const { floor, addToPizza, pickUp, pickUpVal, drop, pizzaIngredients, makePizza } = this.props;
    const check =  JSON.stringify(pizzaIngredients.sort()) === JSON.stringify(arrSort);
    const pizzaButton = check ? 
      <button key="7" className="make-pizza six" onClick={() => makePizza()}>bake pizza</button> :
      <button key="7" className="make-pizza six" onClick={() => addToPizza()}>Add to Pizza</button>;
    return [
      <label key="0" className="label-two">Pick up an item to take home</label>,
      <br key="1"/>,
      <button key="2" className="pick-up two" value={pickUpVal} onClick={({ target }) => pickUp(target.value)}>Pick Up</button>,
      <label key="3" className="label-three">Get rid of this item</label>,
      <br key=""/>,
      <button key="4" className="drop three" onClick= {() => drop()}>Drop</button>,
      <br key="5"/>,
      <label key="6" className="label-six">You have enough ingredients</label>,
      <div>
        {floor.key === '3rd Floor' && pizzaButton}
      </div>
    ];
  }
}
Buttons.propTypes = {
  addToPizza: PropTypes.func,
  pickUp: PropTypes.func,
  pickUpVal: PropTypes.string,
  drop: PropTypes.func,
  holding: PropTypes.string
};

export default Buttons;
  