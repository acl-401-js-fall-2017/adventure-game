import React, { Component } from 'react';
import './App.css';
import floors from './Floors';
import moment from 'moment';
// import images from './images/oldLady.jpg';

class App extends Component {

  constructor() {
    super();
    this.state = {
      itemInHand: null,
      timer: 0,
      floors,
      floor: floors[3],
      pickUpValue: floors[3].items[0],
      pizzaItems: []
    };
  }

  componentWillMount() {
    let currentGame = localStorage.getItem('currentGame');
    if (currentGame) {
      console.log('current game', currentGame);
      this.setState(JSON.parse(currentGame));
    } else {
      let time = moment().format('mm ss');
      this.setState({ timer: time });
      console.log('are we in willmount');

    }
  }

  componentDidUpdate() {
    localStorage.setItem('currentGame', JSON.stringify(this.state));
    console.log('are we in didUpdate');
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
    if (value === 1) {
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

  handleMakePizza = () => {
    let finishTime = moment().format('mm ss');
    let totalTime = finishTime - this.state.timer;
    alert('You won the game in ', totalTime);
    localStorage.clear();

  }


  render() {
    const makePizzaButton = <button name="make-pizza" onClick={() => this.handleMakePizza}>make pizza</button>;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="fla sh">Shane is lounging at home</h1>
          <p className="msg">{ this.state.floor.message }</p>
          <img id="pics"alt="Old Lady" src={this.state.floor.img}/>
        </header>
        <div>
          <select className="dropDown" name="elevator" onChange={({ target }) => this.handleFloorChange(target.value)}>
            <option value="0">Ground floor</option>
            <option value="1">Floor 1</option>
            <option value="2">Floor 2</option>
            <option value="3" defaultValue>Home</option>
            <option value="4">Floor 4</option>
            <option value="5">Floor 5</option>
            <option value="6">Floor 6</option>
          </select>
          { this.state.floor.key === 'floor4' && makePizzaButton }
          <button name="pick-up" value={this.state.pickUpValue} onClick={({ target }) => this.handlePickUp(target.value)}>Pick Up</button>
          <button name="drop" onClick= {() => this.handleDrop()}>Drop</button>
          <button name="pizza-add" value={this.state.itemInHand} onClick={({ target }) => {this.handleAddtoPizza(target.value);}}>Add to Pizza</button>
          <label>Items in the Room</label>
          <select className="dropDown" name="items-in-room" onChange={({ target }) => {
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
