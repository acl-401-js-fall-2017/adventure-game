import React, { Component } from 'react';
import './styles/Battle.css';

class Battle extends Component {
  constructor(props) {
    super();
    console.log(props);
    this.state = {
      gnomeStats: props.gnomeStats,
      ogreStats: null,
      terrain: props.terrain
    };

    this.exitBattle = props.exitBattle;
  }

  render() {
    const { terrain } = this.state;
    return (
      <div
        className="Battle"
        style={{
          backgroundColor: terrain.color
        }}
      >
        
      </div>
    );
  }
}

export default Battle;