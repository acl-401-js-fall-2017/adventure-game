import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import tiles from'./models/tiles';
import Player from'./Player';

console.log(tiles);

class App extends Component {
  constructor () {
    super();
    this.state = {
      index: 0,
      message:' Game of Tiles. Do no be afraid of taking risks. It might get get you to finish line faster, on not!! click proceed button to move forward',
      player: {
        position: 0,
        inventory : [],
        energy: 10,
        bonus : 0
      },
      x:0,
      display: true
      
    };
    this.diceRoll = this.diceRoll.bind(this);
    this.takingRisk = this.takingRisk.bind(this);
    this.pickItem = this.pickItem.bind(this);
  }

  getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

  diceRoll() {
    
    const player = { ...this.state.player };
    player.position += this.getRandom(1,3) ;
    const index = player.position;
    if(!tiles[index-1]) {
      this.setState(
        { 
          index: tiles.length,
          message: 'You Won',
          display: false
        });
      return;
    }else{
      this.setState(
        {
          index,
          message: tiles[index -1].message,
          player,
          x: index*10,
        }
      );
    }
  }

  takingRisk() {
    const player = { ...this.state.player };
    const index = player.position += tiles[player.position -1].bonus;
    if(!tiles[index-1]) {
      this.setState(
        { 
          index: tiles.length,
          message: 'Game Over',
          player: {
            position: tiles.length,
          },
          display: false
        });
      return;
    }else{
      this.setState(
        {
          index,
          message: tiles[index -1].message,
          player,
          x : index
        }
      );
    }
  }

  pickItem(event) {
    event.target.disabled = true;
    const player = { ...this.state.player };
    if(player.inventory.length >= 2) player.inventory.splice(0,1);
    player.inventory.push(event.target.value);
    this.setState({ player });
  }
  
  
  render() {
    
    const { index, player, message, x, display } = this.state;
    let bonusPrompt = (<div style={{ display: this.state.display ? 'block' : 'none' }} >
      <button onClick={this.takingRisk}>Yes</button>
      <button onClick={this.diceRoll}>No</button>
    </div>);

    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Most Awful Game!!!</h1>
        </header>
        <div>
          <h3>{message}</h3>
        </div>
        <div>
          { !tiles[index-1] || tiles[index-1].bonus === 0 ? 'keep moving' : bonusPrompt }
        </div>
        <div>
          <button  style={{ display: display ? 'inline' : 'none' }} onClick={this.diceRoll}>proceed!</button>
        </div>
        <Player player={player} pickItem={this.pickItem} x={x} index={index} display={display}/>
      </div>
    );
  }
}

export default App;

