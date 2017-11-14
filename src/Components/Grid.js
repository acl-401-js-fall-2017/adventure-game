import React, { Component } from 'react';
import Terrain from './Terrain';
import Gnome from './Gnome';
import './styles/Grid.css';

class Grid extends Component {

  render() {
    const { 
      gridArray, 
    } = this.props;

    const flattenedGrid = gridArray
      .reduce((outputArr, row) => outputArr.concat(row))
      .map((gridElem, i) => {
        const land = (
          <Terrain
            key={i}
            i={i}
            terrain={gridElem.terrain}
            hasKey={gridElem.hasKey}
            isLocked={gridElem.isLocked}
          ></Terrain>
        );
        const gnome = (
          <Gnome
            key={i}
            terrainColor={gridElem.terrain.color}
          ></Gnome>
        );
        return gridElem.hasGnome ? gnome : land;
      });

    return (
      <div className="Grid">
        {flattenedGrid}
      </div>
    );
  }
}

export default Grid;