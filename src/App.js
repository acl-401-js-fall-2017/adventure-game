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
  }

  setGnomeOnGrid(gridArray){
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
