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
    this.setState({ stage });
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
    const { stage, player } = this.state;
    if (!stage.riddle.solved) {
      alert(riddle.question);
    }
  }

  handleOutput() {
    const { stage, stage: { riddle }, player, handleRiddle } = this.state;    
    if (stage.intro) {
      return stage.intro;
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
          onExit={this.handleExit}
          onRiddle={this.handlePickup}
          onOutput={this.handleOutput}
        />
      </div>
    );
  }
}

export default App;
