import React, { Component } from 'react';
import './styles/Gnome.css';
import gnome from '../images/gnome.svg';
import PropTypes from 'prop-types';

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

Gnome.propTypes = {
  terrainColor: PropTypes.string
};

export default Gnome;