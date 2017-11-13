import React, { Component } from 'react';
import './styles/Terrain.css';

class Terrain extends Component {
  render() {

    const { i,  terrain : { color } } = this.props;

    return (
      <div
        className="Terrain"
        key={i}
        style={{
          backgroundColor: color,
        }}
      ></div>
    );
  }
}

export default Terrain;