import React, { Component } from 'react';
import styled from 'styled-components';
 
export default class GameProgress extends Component{
state ={
  outcome:''
}
  
  resolveAction= (spaceDetected) =>{
    const { setNextRound, playerOneAction, playerTwoAction, updateHealth } = this.props;
    if (!spaceDetected) return;
    console.log('in resolveaction');
    if (playerOneAction === 'quick'){
      if(playerTwoAction === 'quick') {
        updateHealth(-1, 'One');
        updateHealth(-1, 'Two');
        console.log('we are getting to set outcome');
        this.setState({ outcome: 'both Players suffered 1 dmg' });
        setNextRound();
      } 
    }
  };

  componentWillReceiveProps(nextProps){
    console.log('we got to props', nextProps, this.props);
    if(nextProps.spaceDetected === this.props.spaceDetected) return;
    console.log('we got past the guard');
    this.resolveAction(nextProps.spaceDetected);
  }

  render() {
    const { playerOneAction, playerTwoAction } = this.props;
    return(
      <InfoDiv>
        <span>player one chose to {playerOneAction}</span>
        <span>player Two chose to {playerTwoAction}</span>
        <span> Outcome: {this.state.outcome}</span>
      </InfoDiv>
    );
  }
}

const InfoDiv = styled.div`
display: flex;
flex-direction: column;
`;