import React, { Component } from 'react';
import './App.css';
import floors from './Floors';
import moment from 'moment';

class App extends Component {

  constructor() {
    super();
    this.state = {
      itemInHand: null,
      timer: 0,
      floors,
      floor: floors[3],
      pickUpValue: floors[3].items[0],
      pizzaIngredients: []
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

  handlePickUpValue = item => {
    this.setState({ pickUpValue: item });
  };

  handlePickUp = item => {
    if (this.state.itemInHand) alert ('You can only hold one item');
    this.setState({ itemInHand: item });
  }

  handleDrop = () => {
    this.setState({ itemInHand: null });
  }

  handleFloorChange = floorNumber => {
    const floorData = { pizzaIngredients: [], pickUpValue: floors[floorNumber].items[0], floor: floors[floorNumber] };
    floorNumber !== 1 && delete floorData.pizzaIngredients;
    this.setState(floorData);
  }

  handleAddtoPizza = ingredient => {
    if (!this.state.itemInHand) return;
    const pizzaIngredients = this.state.pizzaIngredients;
    pizzaIngredients.push(ingredient);
    this.setState({ pizzaIngredients, itemInHand: null });
  }

  handleMakePizza = () => {
    
    const minuteDuration = parseInt(moment().format('mm'), 10) - this.state.timer.minutes;
    const secondDuration = parseInt(moment().format('ss'), 10) - this.state.timer.seconds;
    alert(`You won the game in ${minuteDuration} minutes and ${secondDuration} seconds`);
    localStorage.clear();
  }


  render() {
    const makePizzaButton = <button className="make-pizza six" onClick={() => this.handleMakePizza()}>make pizza</button>;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="fla sh">Shane is lounging at home</h1>
          <p className="msg">{ this.state.floor.message }</p>
        </header>
        <div className="wrapper">
          <label className = "label-one">The Elevator</label>
          <select className="dropDown one" name="elevator" onChange={({ target }) => this.handleFloorChange(target.value)}>
            <option value="0">Ground floor</option>
            <option value="1">Floor 1</option>
            <option value="2">Floor 2</option>
            <option value="3" defaultValue>Home</option>
            <option value="4">Floor 4</option>
            <option value="5">Floor 5</option>
            <option value="6">Floor 6</option>
          </select>
          { this.state.floor.key === 'floor3' && makePizzaButton }
          <label className = "label-two">Pick up an item to take home</label>
          <button className="pick-up two" value={this.state.pickUpValue} onClick={({ target }) => this.handlePickUp(target.value)}>Pick Up</button>
          <label className = "label-three">Get rid of this item</label>
          <button className="drop three" onClick= {() => this.handleDrop()}>Drop</button>
          <label className = "label-four">Add to your pantry</label>
          <button className="pizza-add four" value={this.state.itemInHand} onClick={({ target }) => {this.handleAddtoPizza(target.value);}}>Add to Pizza</button>
          <img id="pics"alt="Old Lady" src={this.state.floor.img}/>
          <label>Items in the Room</label><br/>
          <select className="dropDown five" name="items-in-room" onChange={({ target }) => {
            this.handlePickUpValue(target.value);}}>
            { this.state.floor.items.map((item, index) => {
              return <option key={index} value={item}>{item}</option>;
            }) }
          </select>
        </div>
      </div>
    );
  }
}

export default App;
