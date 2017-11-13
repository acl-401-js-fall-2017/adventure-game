import React, { Component } from 'react';
import Stage from './Stage';
import Player from './Player';
import stages from './stages';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      stages,
      stage: stages[0],
      player: {
        name: 'Big Shaq',
        pockets: []
      },

    };
  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
