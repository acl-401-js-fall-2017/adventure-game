import React, { Component } from 'react';
import './styles/Gnome.css';

class Gnome extends Component {
  render() {
    const { terrainColor } = this.props;
    const gnomeColor = 'red';
    return (
      <div
        className="GnomeFloor"
        style={{
          backgroundColor: terrainColor   
        }}
      >
        <div
          className="Gnome"
          style={{
            height: '100%',
            backgroundColor: gnomeColor     
          }}
        ></div>
      </div>
    );
  }
}

export default Gnome;