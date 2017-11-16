import React, { Component } from 'react';
import chalis from '../images/chalis.svg';
import keyImg from '../images/key.png';
import keyHoleImg from '../images/key-hole.png';
import './styles/Terrain.css';
import PropTypes from 'prop-types';

class Terrain extends Component {
  render() {

    const { i, terrain : { type, color }, hasKey, isLocked } = this.props;
    
    let chalice = null;
    if(type === 'chalice') chalice = (
      <img src={chalis} alt="" /> 
    );
    let key = null;
    if(hasKey) key = (
      <img 
        src={keyImg} 
        alt=""
      /> 
    );
    let keyhole = null;
    if(isLocked) keyhole = (
      <img src={keyHoleImg} alt="" /> 
    );

    return (
      <div
        className="Terrain"
        key={i}
        style={{
          backgroundColor: color,
        }}
      >
        {chalice}
        {key}
        {keyhole}
      </div>
    );
  }
}

Terrain.propTypes = {
  name: PropTypes.string
};

export default Terrain;