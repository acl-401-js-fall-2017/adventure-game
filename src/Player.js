import React, { Component } from 'react';
import styled from 'styled-components';

export default class Player extends Component{


  render(){
    return(
      
      <div>
        <span>{this.props.player.hp}</span>
      </div>
    );
  }
}