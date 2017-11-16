import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import Grid from './Components/Grid';

import cartes from './utils/maps';
const carte = cartes.firstQuest;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders a snapshot', () => {
  let gridSetUp = [];
  gridSetUp = carte.map(row => {
    return row.map(elem => {
      return {
        terrain: elem, 
        hasGnome: false
      };
    });
  });
  
  let gridArray = gridSetUp;
  
  let gnomeStats = {
    health: 100,
    strength: 1,
    speed: 10,
    pos: {
      X: 9,
      Y: 9
    }
  };

  const component = renderer.create(
    <Grid gridArray={gridArray} gnomeStats={gnomeStats}>GRID</Grid>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});