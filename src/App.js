import React, { Component } from 'react';
import logo from './pics/goldenTx.jpg';
import Candyshop from './components/Candyshop';
import Gate from './components/Gate';
import Chocolate from './components/Chocolate';
import Inventing from './components/Inventing';
import Staff from './components/Staff';
import letter from './pics/letter.jpg';

import Rooms from './components/rooms';

import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      Rooms,
      message: '',
      inventory: [],
      room: Rooms[0]
    };
  }

  handleInventory = item => {
    const inventory = [ ...this.state.inventory ];
    inventory.push(item);
    this.setState({
      inventory
    });
  }
  
  removeInventory = () => {
    const inventory = [...this.state.inventory];
    inventory.splice(-1);
    this.setState({
      inventory
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Wonka Tour</h1>
          <h2> Your Inventory: {this.state.inventory} </h2>
        </header>
        <Candyshop handleInventory = {this.handleInventory} inventory = {this.state.inventory} />
        <Gate removeInventory={this.removeInventory} inventory={this.state.inventory}/>
        <Chocolate removeInventory={this.removeInventory} inventory={this.state.inventory} />
        <Inventing removeInventory={this.removeInventory} inventory={this.state.inventory} />
        <Staff removeInventory={this.removeInventory} inventory={this.state.inventory} />
        <img src={letter} alt="poster"/>
      </div>
    );
  }
}

export default App;