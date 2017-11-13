import React, { Component } from 'react';
import styled from 'styled-components';

export default class Player extends Component{

  render(){
    return(
      <InfoDiv>
        <span>Bob</span>
        <span>Current Health:{this.props.player.hp}</span>
        <span>{this.props.instruction}</span>
      </InfoDiv>
    );
  }
}

const InfoDiv = styled.div`
display: flex;
flex-direction: column;
`;