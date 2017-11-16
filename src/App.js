import React, { Component } from 'react';
import './App.css';
import floors from './Floors';
import moment from 'moment';
import Floor from './Floor';
import Controller from './Controller';


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

export default App;

