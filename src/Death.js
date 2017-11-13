import React, { Component } from 'react';
import styled from 'styled-components';
 
export default class Death extends Component{

  determineOutcome(bobHp, jeffHp){
    if (bobHp < 1 && jeffHp < 1) {
      return 'they both died';
    }

    else if (bobHp < 1) {
      return 'Jeff won!!!';
    }

    else if (jeffHp < 1) {
      return 'Bob won!!!!';
    }
  }

  render(){
    return( 
      <WinScreen shouldDisplay ={this.props.shouldDisplay}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span>{this.determineOutcome(this.props.hp[0], this.props.hp[1])}</span>
          <StyledP onClick={this.props.reset}> Play Again?</StyledP>
        </div>
      </WinScreen>
    );
  }
}

const WinScreen = styled.div`
  display: ${props => (props.shouldDisplay) ? 'flex' : 'none'};
  justify-content: center;
  flex-direction: row;
  text-align: center;
  width: 100%;
  font-size: 70px;
  color: red;
  margin 10% 0;
`;
const StyledP = styled.div`
width: 100% ;
display: 'flex';
color: black;
border: 1px solid black;
font-size: 15px;
`;


