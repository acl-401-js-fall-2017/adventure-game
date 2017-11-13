import React, { Component } from 'react';
import styled from 'styled-components';
 
export default class Death extends Component{

  determineOutcome(bobHp, jeffHp){
    if (bobHp < 1 && jeffHp < 1) {
      return 'they both died';
    }

    else if (bobHp < 1) {
      return 'Jeff won';
    }

    else if (jeffHp < 1) {
      return 'Bob won';
    }
  }

  render(){
    return( 
      <WinScreen shouldDisplay ={this.props.shouldDisplay}>
        {this.determineOutcome(this.props.hp[0], this.props.hp[1])}
      </WinScreen>
    );
  }
}

const WinScreen = styled.div`
  display: ${props => (props.shouldDisplay) ? 'flex' : 'none'};
`;


