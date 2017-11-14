import React, { Component } from 'react';
import './App.css';
import Stage from './Stage';
import Player from './Player';
import stages from './stages';

class App extends Component {
  
  constructor () {
    super();
    this.state = {
      stages,
      stage: stages[0],
      player: {
        name: 'Big Shaq',
        pockets: [],
        health: 25
      }
    };
  }

  handleExit = stage => {
    const { player } = this.state;
    
    stage.door.open = true;
    player.inventory.splice(index, 1);

    this.setState({ stage });
  }

  handleDoor = door => {
    const { player, stage } = this.state;
    const index = player.inventory.indexOf({ name: 'key' });
    
    if(index > -1) {
      door.available = true;
    }

    this.setState({
      stage, player
    });
    
  }

  handlePickup = item => {
    const { stage, player } = this.state;
    const index = stage.items.indexOf(item);
    if(index > -1) stage.items.splice(index, 1);

    player.pockets.push(item);

    this.setState({
      stage, player
    });
  }

  handleRiddle = riddle => {
    const { stage } = this.state;
    if (!stage.riddle.solved) {
      const query = prompt(riddle.question);
      if (riddle.answer.includes(query)) {
        alert('Correct, looks like that was no sweat for you. Man’s not hot! New items may be available for pickup.');
        stage.items.available = true;

        this.setState({ stage });
      }
    }
  }

  handleEncounter = encounter => {
    const { stage } = this.state;
  }
  handleOutput() {
    const { stage, stage: { riddle }, player, handleRiddle } = this.state;    
    if (!stage.intro.read) {
      return stage.intro.text;
    } else if (riddle) { 
      return handleRiddle(riddle);
    } 
  }


  render() {
    const { player, stage } = this.state;
    
    return (
      <div className="App">
        <div className="Player-info">
          <Player player={player}
            onDrop={this.handleDrop}
          />
        </div>
        <Stage
          player={player}
          stage={stage}
          onDoor={this.handleDoor}
          onOutput={this.handleOutput}
          onPickup={this.handlePickup}
          onExit={this.handleExit}
        />
      </div>
    );
  }
}

export default App;
