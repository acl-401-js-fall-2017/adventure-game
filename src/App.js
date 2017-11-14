import React, { Component } from 'react';
import './App.css';
import floors from './Floors';
import moment from 'moment';

import PropTypes from 'prop-types';


class App extends Component {

  constructor() {
    super();
    this.state = {
      itemInHand: null,
      timer: 0,
      floors,
      floor: floors[3],
      pickUpValue: floors[3].items[0],
      pizzaIngredients: [],
      timePenalty: 0
    };
  }

  componentWillMount() {
    const savedGame = localStorage.getItem('currentGame');
    savedGame ? this.setState(JSON.parse(savedGame)) :
      this.setState({ timer: { minutes: parseInt(moment().format('mm'), 10), seconds: parseInt(moment().format('ss'), 10) } });
  }

  componentDidUpdate() {
    localStorage.setItem('currentGame', JSON.stringify(this.state));
  }

  handlePickUpValue = index => {
    this.setState({ pickUpValue: this.state.floor.items[index] });
  };

  handlePickUp = item => {
    if (this.state.itemInHand) alert ('You can only hold one item');
    this.setState({ itemInHand: item });
  }

  handleDrop = () => {
    this.setState({ itemInHand: null });
  }

  handleFloorChange = floorNumber => {
    const floorData = { 
      pizzaIngredients: [],
      pickUpValue: floors[floorNumber].items[0],
      floor: floors[floorNumber], 
      timePenalty: this.state.timePenalty + 1 
    };
    parseInt(floorNumber, 10) !== 1 && delete floorData.pizzaIngredients;
    parseInt(floorNumber, 10) !== 0 && delete floorData.timePenalty;
    this.setState(floorData);
  }

  handleAddtoPizza = () => {
    if (!this.state.itemInHand) return;
    const pizzaIngredients = this.state.pizzaIngredients;
    pizzaIngredients.push(this.state.itemInHand);
    this.setState({ pizzaIngredients, itemInHand: null });
  }

  handleMakePizza = () => {
    const minuteDuration = parseInt(moment().format('mm'), 10) - this.state.timer.minutes + (this.state.timePenalty * 2);
    const secondDuration = parseInt(moment().format('ss'), 10) - this.state.timer.seconds;
    alert(`You won the game in ${minuteDuration} minutes and ${secondDuration} seconds`);
    localStorage.clear();
  }


  render() {

    const { floor, floors, pickUpValue, itemInHand, pizzaIngredients } =this.state;
    return (
      <div className="App">
        <Floor floorScript ={floor.message} holding={itemInHand} pizzaIngredients={pizzaIngredients}/>
        <div>
          <Controller floor={floor} floors={floors} floorChange={floorNumber => this.handleFloorChange(floorNumber)} pizzaIngredients={pizzaIngredients}
            pickUpVal={pickUpValue} pickUp={item => this.handlePickUp(item)} addToPizza={item => this.handleAddtoPizza(item)}
            drop={()=> this.handleDrop()} handlePickUpValue={item =>  this.handlePickUpValue(item)} holding={itemInHand} makePizza={() => this.handleMakePizza()}/>
        </div>
      </div>
    );
  }
}

class Gameinfo extends Component{
  render(){
    const { holding, pizzaIngredients } = this.props;
    return(
      <div>
        <label> </label>
        <p>Holding: {holding}</p>
        <p>Pantry: {pizzaIngredients.join()}</p>
      </div>
    );
  }
}

class Floor extends Component {
  render(){
    const { floorScript, holding, pizzaIngredients } = this.props;
    return (
      <div> 
        <header className="App-header">
          <h1 className="flash">Shane is starving at home</h1>
          <p className="msg">{floorScript}</p>
          <Gameinfo holding={holding} pizzaIngredients={pizzaIngredients}/>
          <img className="pizza" alt="pizza" src="./images/pizza2.png"/>
        </header>
      </div>
    );
  }
}
Floor.propTypes = {
  floorScript: PropTypes.string
};

class SelectBox extends Component {
  render(){
    const { selectChange, options, className, name } = this.props;
    const Options = options.map((option, index) => {
      const optionElement = option.name === '3rd Floor' ? 
        <option key={index} value={index} default>Home</option> :
        <option key ={index} value={index}>{option.name || option}</option>;
      return optionElement;
    });
    return(
      <select className={className} name={name} onChange={({ target }) => selectChange(target.value)}>
        { Options }
      </select>
    );
  }
}
SelectBox.PropTypes = {
  selectChange: PropTypes.func,
  options: PropTypes.array,
  className: PropTypes.string,
  string: PropTypes.string
};




class Buttons extends Component {
  render(){
    const arrSort = ['cheese', 'crust', 'sauce'];
    const { floor, addToPizza, pickUp, pickUpVal, drop, holding, pizzaIngredients, makePizza } = this.props;
    const check =  JSON.stringify(pizzaIngredients.sort()) === JSON.stringify(arrSort);
    console.log('I am the pizza ing sorted', pizzaIngredients.sort());
    console.log('I am the check array', arrSort);
    console.log('I am boolean', check);
    const makePizzaButton = check ? 
      <button className="make-pizza six" onClick={() => makePizza()}>make pizza</button>:
      <button className="hide" onClick={() => makePizza()}>make pizza</button>;
    return [
      <label key="0" className="label-two">Pick up an item to take home</label>,
      <br key="1"/>,
      <button key="2" className="pick-up two" value={pickUpVal} onClick={({ target }) => pickUp(target.value)}>Pick Up</button>,
      <label key="3" className="label-three">Get rid of this item</label>,
      <br key=""/>,
      <button key="4" className="drop three" onClick= {() => drop()}>Drop</button>,
      <label key="5" className="label-four">Add to your pantry</label>,
      <br key="6"/>,
      <button key="7" className="pizza-add four" value={holding} onClick={({ target }) => addToPizza(target.value)}>Add to Pizza</button>,
      <label key="8" className="label-six">You have enough ingredients</label>,
      <div>
        {floor.key === '3rd Floor' && makePizzaButton}
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
        <img id="pics" alt="{floor.alt}" src={floor.img} />
        <label className="label-five">Items in the Room</label>
        <SelectBox options={floor.items} className="dropDown five" name="items-in-room" 
          selectChange={item => handlePickUpValue(item)}/>
      </div>
    );
  }
}
Controller.propTypes = {
  floor: PropTypes.string,
  floors: PropTypes.array,
  floorChange: PropTypes.func,
  addToPizza: PropTypes.func,
  pickUp: PropTypes.func,
  pickUpVal: PropTypes.string,
  drop: PropTypes.func,
  handlePickUpValue: PropTypes.func,
  holding: PropTypes.string
};

export default App;
