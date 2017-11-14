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
    this.watchStep = this.watchStep.bind(this);
  }

  move({ key }) {
    if(key === ' ' || key.includes('Arrow')) {
      const { gnomeStats, gridArray } = this.state;  

      this.removeGnomeFromGrid(gnomeStats, gridArray);
      this.setGnomePosition(gnomeStats, key);
      console.log(gnomeStats);
      this.setGnomeOnGrid(gridArray, gnomeStats);
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
      gnomeStats.pos = waryYStep('decrement', gnomeStats.pos);
      break;
    case 'ArrowDown':
      gnomeStats.pos = waryYStep('increment', gnomeStats.pos);
      break;
    case 'ArrowLeft':
      gnomeStats.pos = waryXStep('decrement', gnomeStats.pos);
      break;
    case 'ArrowRight':
      gnomeStats.pos = waryXStep('increment', gnomeStats.pos);
      break;
    default:
      console.log('Whack!!!');
    }
  }
  
  watchStep = changeCoordinate => (direction, position) => {
    const { gridArray } = this.state;

    const tempX = changeCoordinate !== 'X'   ?   position.X   :   position.X + (direction === 'increment' ? 1 : -1);
    const tempY = changeCoordinate !== 'Y'   ?   position.Y   :   position.Y + (direction === 'increment' ? 1 : -1);

    console.log(gridArray[9][9].terrain.passable);
    console.log(tempY, ': ', tempX);
    
    let canMove = null;
    if(
      tempX < 0 || tempX > 9 ||
      tempY < 0 || tempY > 9
    ) canMove = false;
    else canMove = gridArray[tempY][tempX].terrain.passable;
    return canMove ? { X: tempX, Y: tempY } : position;
  }

  setGnomeOnGrid(gridArray, gnomeStats) {
    console.log(gnomeStats);
    if(!gnomeStats) gnomeStats = this.state.gnomeStats;
    console.log(gnomeStats);
    console.log(gridArray);

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
