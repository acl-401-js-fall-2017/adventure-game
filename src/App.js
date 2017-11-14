import React, { Component } from 'react';
import Grid from './Components/Grid';
import './App.css';

import cartes from './utils/maps';
const carte = cartes.test;


  
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
    this.move = this.move.bind(this);
  }

  move({ key }) {
    if(key === ' ' || key.includes('Arrow')) {
      const { gnomeStats, gridArray } = this.state;  

      this.removeGnomeFromGrid(gnomeStats, gridArray);
      this.setGnomePosition(gnomeStats, key);
      this.setGnomeOnGrid(gridArray);
      this.setState({ gnomeStats: gnomeStats, gridArray: gridArray });
    }
  }

  removeGnomeFromGrid(gnomeStats, gridArray) {
    gridArray[gnomeStats.pos.Y][gnomeStats.pos.X].hasGnome = false; 
  }

  setGnomePosition(gnomeStats, key) {
    const waryYStep = this.watchStep('Y');
    const waryXStep = this.watchStep('X');

    switch(key) {
    case 'ArrowUp':
      waryYStep('decrement', gnomeStats.pos);
      break;
    case 'ArrowDown':
      waryYStep('increment', gnomeStats.pos);
      break;
    case 'ArrowLeft':
      waryXStep('decrement', gnomeStats.pos);
      break;
    case 'ArrowRight':
      waryXStep('increment', gnomeStats.pos);
      break;
    default:
      console.log('Whack!!!');
    }
  }
  
  watchStep = coord => (direction, position) => {
    const { gridArray } = this.state;
  }

  setGnomeOnGrid(gridArray) {
    const { gnomeStats } = this.state;
    gridArray[gnomeStats.pos.Y][gnomeStats.pos.X].hasGnome = true;
  }

  componentWillMount() {
    let gridSetUp = [];
    gridSetUp = carte.map(row => {
      return row.map(elem => {
        return {
          terrain: elem, 
          hasGnome: false
        };
      });
    });

    this.setGnomeOnGrid(gridSetUp);
    this.setState({ gridArray: gridSetUp });
  }

  render() {
    const { gridArray, gnomeStats } = this.state;

    return (
      <div className="App"
        onKeyDown={this.move}
        tabIndex="0"
      >
        <Grid
          gridArray={gridArray}
          gnomeStats={gnomeStats}
        ></Grid>
      </div>
    );
  }
}

export default App;
