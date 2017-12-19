import React, { Component } from 'react';
import logo from './pics/goldenTx.jpg';
import Candyshop from './components/Candyshop';
import Gate from './components/Gate';
import Chocolate from './components/Chocolate';
import Inventing from './components/Inventing';
import Staff from './components/Staff';
import './styles/App.css';


class App extends Component {
  
  constructor() {
    super();
    this.state = {
      inventory: [],
      room: 0
    };
  }

  handleInventory = item => {
    const inventory = this.state.room ===3 ? [] : [ ...this.state.inventory ];
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
          <Candyshop handleInventory = {this.handleInventory} inventory = {this.state.inventory} />
        )}
        {this.state.room === 1 && (
          <Gate removeInventory={this.removeInventory} inventory={this.state.inventory}/>
        )}
        {this.state.room === 2 && (
          <Chocolate handleInventory={this.handleInventory} inventory={this.state.inventory} />
        )}
        {this.state.room === 3 && (
          <Inventing handleInventory={this.handleInventory} inventory={this.state.inventory} />
        )}
        {this.state.room === 4 && (
          <Staff  removeInventory={this.removeInventory} inventory={this.state.inventory} />
        )}
        {this.state.room !== 0 && (
          <button id="prevButton" onClick={this.changeRoom} >Previous room </button>
        )}
        {this.state.room !== 4 && (
          <button id="nextButton" onClick={this.changeRoom} >Next room </button>
        )}
      </div>
    );
  }
}

export default App;