import React, { Component } from 'react';
import './App.css';
import floors from './Floors';

class App extends Component {

  constructor() {
    super();
    this.state = {
      itemInHand: null,
      timer: 0,
      floors,
      floor: floors[1],
      pickUpValue: floors[1].items[0],
      pizzaItems: []
    };
  }

  handlePickUpValue = value => {
    console.log('current pick up value', value);
    this.setState({ pickUpValue: value });
  };

  handlePickUp = value => {
    if (this.state.itemInHand) return alert ('You can only hold one item');
    this.setState({ itemInHand: value });
  }

  handleDrop = () => {
    this.setState({ itemInHand: null });
  }

  handleFloorChange = value => {
    if (value == 1) {
      console.log('are we in floor change', value);
      this.setState({
        pizzaItems: [],
        pickUpValue: floors[value].items[0],
        floor: floors[value]
      });
    } else { 
      this.setState({ 
        pickUpValue: floors[value].items[0],
        floor: floors[value]
      });
    }
  }

  handleAddtoPizza = value => {
    let pizzaItems = this.state.pizzaItems;
    pizzaItems.push(value);
    console.log('I am the pizza ', pizzaItems);
    this.setState({ pizzaItems, itemInHand: null });
  }


  render() {
    const makePizzaButton = <button name="make-pizza">make pizza</button>;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pizza</h1>
          <p>{ this.state.floor.message }</p>
        </header>
        <div>
          <select name="elevator" onChange={({ target }) => this.handleFloorChange(target.value)}>
            <option value="0">Floor 1</option>
            <option value="1">Floor 2</option>
            <option value="2">Floor 3</option>
            <option value="3">Floor 4</option>
            <option value="4">Floor 5</option>
            <option value="5">Floor 6</option>
            <option value="6">Floor 7</option>
          </select>
          { this.state.floor.key === 'floor4' && makePizzaButton }
          <button name="pick-up" value={this.state.pickUpValue} onClick={({ target }) => this.handlePickUp(target.value)}>Pick Up</button>
          <button name="drop" onClick= {() => this.handleDrop()}>Drop</button>
          <button name="pizza-add" value={this.state.itemInHand} onClick={({ target }) => {this.handleAddtoPizza(target.value)}}>Add to Pizza</button>
          <label>Items in the Room</label>
          <select name="items-in-room" onChange={({ target }) => {
            this.handlePickUpValue(target.value);}}>
            { this.state.floor.items.map((item) => {
              return <option value={item}>{item}</option>;
            }) }
          </select>
          


        </div>
      </div>
    );
  }
}

export default App;
