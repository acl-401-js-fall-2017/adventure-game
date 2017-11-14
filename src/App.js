import React, { Component } from 'react';
import logo from './pics/goldenTx.jpg';
import Candyshop from './components/Candyshop';
import Gate from './components/Gate';
import Chocolate from './components/Chocolate';
import Inventing from './components/Inventing';
import Staff from './components/Staff';
import letter from './pics/letter.jpg';

import rooms from './data/rooms';

import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      inventory: [],
      room: 0
      // rooms: []
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

  changeRoom = ({ target }) => {
    this.setState(prevState => {
      let room;
      if (target.id === 'prevButton') {
        room = prevState.room - 1;
      }
      if (target.id === 'nextButton') {
        room = prevState.room + 1;
      }
      return { room };
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
        {this.state.room === 0 && (
          <Candyshop name="shop" handleInventory = {this.handleInventory} inventory = {this.state.inventory} />
        )}
        {this.state.room === 1 && (
          <Gate name="gate" removeInventory={this.removeInventory} inventory={this.state.inventory}/>
        )}
        {this.state.room === 2 && (
          <Chocolate name="chocolate" handleInventory={this.handleInventory} inventory={this.state.inventory} />
        )}
        {this.state.room === 3 && (
          <Inventing name="testing" handleInventory={this.handleInventory} inventory={this.state.inventory} />
        )}
        {this.state.room === 4 && (
          <Staff name="staff" removeInventory={this.removeInventory} inventory={this.state.inventory} />
        )}
        <button id="prevButton" onClick={this.changeRoom} >Previous room </button><button id="nextButton" onClick={this.changeRoom} >Next room </button>
        {/* <img src={letter} alt="poster"/> */}
      </div>
    );
  }
}

export default App;