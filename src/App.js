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
      // pickUpValue: floor.items[0],
      pizzaItems: null
    };
  }

  // handlePickUp = item => {
  //   onClick = 
  // };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pizza</h1>
          <p>{ this.state.floor.message }</p>
        </header>
        <div>
          <select name="elevator">
            <option value="floor1">Floor 1</option>
            <option value="floor2">Floor 2</option>
            <option value="floor3">Floor 3</option>
            <option value="floor4">Floor 4</option>
            <option value="floor5">Floor 5</option>
            <option value="floor6">Floor 6</option>
            <option value="floor7">Floor 7</option>
          </select>
          <button name="pick-up">Pick Up</button>
          <button name="drop">Drop</button>
          <button name="pizza-add">Add to Pizza</button>
          <label>Items in the Room</label>
          <select name="items-in-room" onChange={({ target }) => {console.log ('select value', target.value);}}>{ this.state.floor.items.map((item) => {
            return <option value={item}>{item}</option>;
          }) }</select>
          


        </div>
      </div>
    );
  }
}

export default App;
