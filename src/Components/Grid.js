import React, { Component } from 'react';
import Terrain from './Terrain';
import Gnome from './Gnome';
import './styles/Grid.css';
import PropTypes from 'prop-types';

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

Grid.propTypes = {
  gridArray: PropTypes.array
};

export default Grid;