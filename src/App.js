import React, { Component } from 'react';
import Grid from './Components/Grid';
import Battle from './Components/Battle';
import './App.css';

import defeatImg from './images/defeated.png';
import victoryImg from './images/VictoryFlag.jpg';

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
        speed: 10,
        pos: {
          X: 9,
          Y: 9
        },
        hasKey: false
      },
      inBattle: false,
      victory: false,
      defeat: false
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
    this.tryLock = this.tryLock.bind(this);
  }

  playerTurn({ key }) {
    const { inBattle } = this.state;
    if(!inBattle) {
      this.move(key);
    }
  }

  spotEnemy() {
    const { gnomeStats, gridArray } = this.state;
    const enemyFrequency = gridArray[gnomeStats.pos.Y][gnomeStats.pos.X].terrain.fightProbability;
    const enemySpotted = Math.random() < enemyFrequency;
    console.log(enemyFrequency);
    return enemySpotted;
  }

  exitBattle(gnomeStatus, gotChalice) {
    let defeated = false;
    if(gnomeStatus.health <= 0) defeated = true;
    this.setState({
      inBattle: false,
      gnomeStats: gnomeStatus,
      defeat: defeated,
      victory: gotChalice
    });
  }

  move(key) {
    if(key.includes('Arrow')) {
      const { gnomeStats, gridArray } = this.state;  

      this.removeGnomeFromGrid(gnomeStats, gridArray);
      this.setGnomePosition(gnomeStats, key);
      this.setGnomeOnGrid(gridArray, gnomeStats);
      this.setState({ gnomeStats: gnomeStats, gridArray: gridArray });

      if(this.spotEnemy()) this.setState({ inBattle: true });          
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
    else if(gridArray[tempY][tempX].terrain.hasKey) {
      const keyedUpGnome = Object.assign({}, this.state.gnomeStats);
      keyedUpGnome.hasKey = true;
      this.setState({ gnomeStats: keyedUpGnome });
      console.log('got key');
      canMove = true;
    }
    else if(gridArray[tempY][tempX].terrain.isLocked) canMove = this.tryLock(gridArray, tempY, tempX);
    else canMove = gridArray[tempY][tempX].terrain.passable;
    return canMove ? { X: tempX, Y: tempY } : position;
  }

  tryLock(gridArray, x, y) {
    const { gnomeStats } = this.state;
    if(gnomeStats.hasKey) {
      const unlockedGrid = Object.assign({}, gridArray);
      unlockedGrid[x][y].terrain.isLocked = false;
      this.setState({ gridArray: unlockedGrid });
      return true;
    }
    return false;
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
          hasGnome: false,
          hasKey: false,
          isLocked: false
        };
      });
    });
    gridSetUp[4][6].isBlocked = true;
    gridSetUp[9][3].hasKey = true;

    this.setGnomeOnGrid(gridSetUp);
    this.setState({ gridArray: gridSetUp });
  }

  render() {
    const { gridArray, gnomeStats, inBattle, victory, defeat } = this.state;

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
    const victoryPage=(
      <img
        src={victoryImg} 
        alt='You win!'
        style={{
          width: '100%',
          height: '100%'
        }}
      />
    );
    const defeatPage=(
      <div 
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'black',
          color: 'gray'
        }}
      >
        <img 
          src={defeatImg} 
          alt='The ogre ate u'
        />
        <h1>GAME OVER</h1>
      </div>
    );

    const inGame = inBattle ? battle : mapGrid;
    const postGame = victory ? victoryPage : defeatPage;

    return (
      <div className="App"
        onKeyDown={this.playerTurn}
        tabIndex="0"
        ref={(input) => {
          if (input != null && !inBattle) {
            input.focus();
          }
        }}
      >
        {victory || defeat ? postGame : inGame}
      </div>
    );
  }
}

export default App;
