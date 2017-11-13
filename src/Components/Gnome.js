import React, { Component } from 'react';
import './styles/Gnome.css';

class Gnome extends Component {
  render() {
    const gnomeColor = 'red';
    return (
      <div
        className="Gnome"
        style={{
          backgroundColor: gnomeColor     
        }}
      ></div>
    );
  }
}

export default Gnome;