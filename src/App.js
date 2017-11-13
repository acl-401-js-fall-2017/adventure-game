import React, { Component } from 'react';
import './App.css';
import Grid from './Components/Grid';

const terrain = {
  forest: {
    type: 'forest',
    color: 'green',
    fightProbability: 0.2
  },
  field: {
    type: 'field',
    color: 'lightgreen',
    fightProbability: 0.02
    
  }
};
  
class App extends Component {
  constructor() {
    super();
    this.state = {
      gridArray:[],
      gnomeStats: {
        health: 100,
        strength: 1,
        pos: {
          X: 9,
          Y: 9
        }
      }
    };

    this.settings = {
      grid: {
        height: 10,
        width: 10
      }
    };
  }

  setGnomeOnGrid(gridArray){
    const { gnomeStats } = this.state;
    gridArray[gnomeStats.pos.Y][gnomeStats.pos.X].hasGnome = true;
  }

  componentWillMount() {
    const gridSetUp = [];
    for(let i = 0; i < 10; i++) {
      gridSetUp[i] = [];
      for(let k = 0; k < 10; k++) {
        gridSetUp[i][k] = {
          terrain: i < 3 ? terrain.forest : terrain.field,
          hasGnome: false
        };
      }
    }

    this.setGnomeOnGrid(gridSetUp);
    this.setState({ gridArray: gridSetUp });
  }

  render() {
    const { gridArray, gnomeStats } = this.state;

    return (
      <div className="App">
        <Grid
          gridArray={gridArray}
          gnomeStats={gnomeStats}
        ></Grid>
      </div>
    );
  }
}

export default App;
