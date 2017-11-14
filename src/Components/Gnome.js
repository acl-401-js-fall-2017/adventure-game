import React, { Component } from 'react';
import './styles/Gnome.css';
import gnome from '../images/gnome.svg';

class Gnome extends Component {
  render() {
    const { terrainColor } = this.props;

    return (
      <div
        className="GnomeFloor"
        style={{
          backgroundColor: terrainColor   
        }}
      >
        <div
          className="Gnome"
          style={{ height: '90%' }}
        ><img src={gnome} alt="" /></div>
      </div>
    );
  }
}

export default Gnome;