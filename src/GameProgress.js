import React, { Component } from 'react';
import styled from 'styled-components';
 
export default class GameProgress extends Component{
state ={
  outcomeArray: []
}

scrollToBottom = () => {
  const node = document.findDOMNode(this.messagesEnd);
  node.scrollIntoView({ behavior: 'smooth' });
}



  
  resolveAction= (playersReady) =>{
    const updatedArray = this.state.outcomeArray;
    const { setNextRound, playerOne, playerTwo, updateHealth } = this.props;
    if (!playersReady) return;

    //Player One: Quick
    if (playerOne.action === 'quick'){
      if(playerTwo.action === 'quick') {
        updateHealth(-1, 'One');
        updateHealth(-1, 'Two');
        updatedArray.push('Both grown men stab each other at the same time, suffering 1 dmg each.');
      }
      if(playerTwo.action === 'heavy') {
        updateHealth(-2, 'Two');
        updatedArray.push('An enraged Jeff swung at Bob with a tire iron, only to be countered by a swift poke in the eye by Bob\'s umbrella. Jeff suffers 2 dmg.');
      } 
      if(playerTwo.action === 'riposte') {
        updateHealth(-2, 'One');
        updatedArray.push('Bob attempts a quick umbrella stab, only to be interrupted by a swift counter riposte from Jeff\'s tire iron. Bob suffers 2 dmg.');
      } 
    }

    //Player One Heavy
    if (playerOne.action === 'heavy'){
      if(playerTwo.action === 'quick') {
        updateHealth(-2, 'One');
        updatedArray.push('Bob attempts a heavy umbrella swing, only to get blindsided by Jeff\'s swift kick to the shin. Bob suffers 2 dmg.');
      }
      if(playerTwo.action === 'heavy') {
        updateHealth(-2, 'Two');
        updateHealth(-2, 'One');
        updatedArray.push('Both adult men attempt heavy attacks on one another, each connecting successfully. Both mutter \'I\'m getting too old for this shit\' under their breath and suffer 2 dmg.');
      } 
      if(playerTwo.action === 'riposte') {
        updateHealth(-2, 'Two');
        updatedArray.push('Jeff tries an elaborate counter attack, only to get humiliated by Bob\'s crushing overhead umbrella attack. Jeff suffers 2 dmg.');
      } 
    }

    //Player One Riposte
    if (playerOne.action === 'riposte'){
      if(playerTwo.action === 'quick') {
        updateHealth(-2, 'Two');
        updatedArray.push('Bob anticipates Jeff\'s tire iron jab, countering it with a flurry of umbrella pokes to the face. Jeff suffers 2 dmg and permanent scars.');
      }
      if(playerTwo.action === 'heavy') {
        updateHealth(-2, 'One');
        updatedArray.push('Hoping to outsmart Jeff, Bob prepares a counter-attack, only to be overpowered by Jeff\'s mighty tire iron swing. Bob suffers 2 dmg.');
      } 
      if(playerTwo.action === 'riposte') {
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
    setTimeout(() => {
      this.resolveAction(nextProps.playersReady);
    }, 500);
  }

  render() {
    const { playerOne, playerTwo } = this.props;
    return(
      // everytime InfoDiv rerenders inner ref does the function;
      <InfoDiv innerRef={node => { node && (node.scrollTop = node.scrollHeight);}}>
        <span style={{ marginTop: '50px' }}></span>
        {this.state.outcomeArray.map((outcome, i) =>{
          return <li id={i} key={i}>{outcome}</li>;
        })}
      </InfoDiv>
    );
  }
}

const InfoDiv = styled.div`
overflow: scroll;
height: 80px;
display: flex;
flex-direction: column;
width: 100%;
margin: 0 2%;
background-color: black;
color: white;
scroll-behavior: auto;
`;