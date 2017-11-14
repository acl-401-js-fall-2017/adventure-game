import React, { Component } from 'react';
import Grid from './Components/Grid';
import Battle from './Components/Battle';
import './App.css';

import cartes from './utils/maps';
const carte = cartes.firstQuest;


  
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
      },
      inBattle: false
    };

    this.settings = {
      grid: {
        height: 10,
        width: 10
      }
    };
    this.playerTurn = this.playerTurn.bind(this);
    this.move = this.move.bind(this);
    this.watchStep = this.watchStep.bind(this);
    this.spotEnemy = this.spotEnemy.bind(this);
    this.exitBattle = this.exitBattle.bind(this);
  }

  playerTurn({ key }) {
    const { inBattle } = this.state;
    if(!inBattle) {
      this.move(key);
      if(this.spotEnemy()) this.setState({ inBattle: true });
    }
  }

  spotEnemy() {
    const { gnomeStats, gridArray } = this.state;
    const enemyFrequency = gridArray[gnomeStats.pos.Y][gnomeStats.pos.X].terrain.fightProbability;
    const enemySpotted = Math.random() < enemyFrequency;
    console.log(enemyFrequency);
    return enemySpotted;
  }

  exitBattle() {
    this.setState({ inBattle: false });
  }

  move(key) {
    if(key === ' ' || key.includes('Arrow')) {
      const { gnomeStats, gridArray } = this.state;  

      this.removeGnomeFromGrid(gnomeStats, gridArray);
      this.setGnomePosition(gnomeStats, key);
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
    
    let canMove = null;
    if(
      tempX < 0 || tempX > 9 ||
      tempY < 0 || tempY > 9
    ) canMove = false;
    else canMove = gridArray[tempY][tempX].terrain.passable;
    return canMove ? { X: tempX, Y: tempY } : position;
  }

  setGnomeOnGrid(gridArray, gnomeStats) {

    if(!gnomeStats) gnomeStats = this.state.gnomeStats;

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
    const { gridArray, gnomeStats, inBattle } = this.state;

    const mapGrid = (
      <Grid
        gridArray={gridArray}
        gnomeStats={gnomeStats}
      ></Grid>
    );
    const battle = (
      <Battle
        gnomeStats={gnomeStats}
        terrain={gridArray[gnomeStats.pos.Y][gnomeStats.pos.X].terrain}
        exitBattle={this.exitBattle}
      ></Battle>
    );

    return (
      <div className="App"
        onKeyDown={this.playerTurn}
        tabIndex="0"
      >
        {inBattle ? battle : mapGrid}
      </div>
    );
  }
}

export default App;
