import React, { Component } from 'react';
import styled from 'styled-components';
 
export default class GameProgress extends Component{
  render(){
    return(
      <InfoDiv>
        <span>player one chose to {this.props.PlayerOneAction}</span>
        <span>player Two chose to {this.props.PlayerTwoAction}</span>
      </InfoDiv>
    );
  }
} 

const InfoDiv = styled.div`
display: flex;
flex-direction: column;
`;