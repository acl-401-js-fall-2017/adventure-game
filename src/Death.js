import React, { Component } from 'react';
import styled from 'styled-components';
 
export default class Death extends Component{
  render(){
    return( 
      <WinScreen hp ={this.props.hp}>
        {`Player ${this.props.hp[0] <1 ? 'Two' : 'One'} has Won the game`}
      </WinScreen>
    );
  }
}

const WinScreen = styled.div`
  display: ${props => (props.hp[0] > 0 && props.hp[1] > 0) ? 'none' : 'flex'};
`;


