import React, { Component } from 'react';
import styled from 'styled-components';
 
export default class GameProgress extends Component{
state ={
  outcome:'',
  outcomeArray: []
}
  
  resolveAction= (playersReady) =>{
    const updatedArray = this.state.outcomeArray;
    const { setNextRound, bobAction, jeffAction, updateHealth } = this.props;
    if (!playersReady) return;
    //Player One: Quick
    if (bobAction === 'quick'){
      if(jeffAction === 'quick') {
        updateHealth(-1, 'One');
        updateHealth(-1, 'Two');
        updatedArray.push('Both grown men stab each other at the same time, suffering 1 dmg each.');
      }
      if(jeffAction === 'heavy') {
        updateHealth(-2, 'Two');
        updatedArray.push('An enraged Jeff swung at Bob with a tire iron, only to be countered by a swift poke in the eye by Bob\'s umbrella. Jeff suffers 2 dmg.');
      } 
      if(jeffAction === 'riposte') {
        updateHealth(-2, 'One');
        updatedArray.push('Bob attempts a quick umbrella stab, only to be interrupted by a swift counter riposte from Jeff\'s tire iron. Bob suffers 2 dmg.');
      } 
    }

    //Player One Heavy
    if (bobAction === 'heavy'){
      if(jeffAction === 'quick') {
        updateHealth(-2, 'One');
        updatedArray.push('Bob attempts a heavy umbrella swing, only to get blindsided by Jeff\'s swift kick to the shin. Bob suffers 2 dmg.');
      }
      if(jeffAction === 'heavy') {
        updateHealth(-2, 'Two');
        updateHealth(-2, 'One');
        updatedArray.push('Both adult men attempt heavy attacks on one another, each connecting successfully. Both mutter \'I\'m getting too old for this shit\' under their breath and suffer 2 dmg.');
      } 
      if(jeffAction === 'riposte') {
        updateHealth(-2, 'Two');
        updatedArray.push('Jeff tries an elaborate counter attack, only to get humiliated by Bob\'s crushing overhead umbrella attack. Jeff suffers 2 dmg.');
      } 
    }

    //Player One Riposte
    if (bobAction === 'riposte'){
      if(jeffAction === 'quick') {
        updateHealth(-2, 'Two');
        updatedArray.push('Bob anticipates Jeff\'s tire iron jab, countering it with a flurry of umbrella pokes to the face. Jeff suffers 2 dmg and permanent scars.');
      }
      if(jeffAction === 'heavy') {
        updateHealth(-2, 'One');
        updatedArray.push('Hoping to outsmart Jeff, Bob prepares a counter-attack, only to be overpowered by Jeff\'s mighty tire iron swing. Bob suffers 2 dmg.');
      } 
      if(jeffAction === 'riposte') {
        updateHealth(1, 'One');
        updateHealth(1, 'Two'); 
        updatedArray.push('Both Bob and Jeff attempt to counter attack each other\'s attacks. For a moment, they meet each other\'s gaze and contemplate what they\'re doing with their lives. Rejuvinated by their introspection, both men gain +1 health');
      } 
    }
    this.setState({ outcomeArray : updatedArray });
    setNextRound();
  };

  componentWillReceiveProps(nextProps){
    if(nextProps.playersReady === this.props.playersReady) return;
    this.resolveAction(nextProps.playersReady);
  }

  render() {
    const { bobAction, jeffAction } = this.props;
    return(
      <InfoDiv>
        <span>player one chose to {bobAction}</span>
        <span>player Two chose to {jeffAction}</span>
        {this.state.outcomeArray.map((outcome, i) => <li key={i}>{outcome}</li>)}
      </InfoDiv>
    );
  }
}

const InfoDiv = styled.div`
display: flex;
flex-direction: column;
width: 40%;
`;