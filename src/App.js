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
        pockets: [],
        health: 25,
        dialog: [
          'Skrrat, skidi-kat-kat. The name’s Big Shaq and man’s not hot.',
          'Hold up let me light this tree right quick. puff puff puff. How do I get out of here anyway?',
          'Whatever donut, your nose  long like a garden hose anyway.'
        ]
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
