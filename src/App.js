import React, { Component } from 'react';
import logo from './goldenTx.jpg';
import Candyshop from './components/Candyshop';
import Rooms from './Rooms';
import gatePic from './wonkaGate.jpg';

import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      message: '',
      inventory: [],
      rooms: []
    };
  }

  handleInventory = item => {
    const inventory = [ ...this.state.inventory ];
    inventory.push(item);
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
        <section>
          <img src={gatePic} alt="" useMap="#Map" />
          <map name="Map" id="Map">
            <area alt="" title="" href="#" shape="poly" coords="479,147,477,566,636,567,622,156"/>
          </map>
        </section>
      </div>
    );
  }
}


export default App;