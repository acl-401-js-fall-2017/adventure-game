import React, { Component } from 'react';
import styled from 'styled-components';
 
export default class GameProgress extends Component{
state ={
  isProcessing: false,
}

scrollToBottom = () => {
  const node = document.findDOMNode(this.messagesEnd);
  node.scrollIntoView({ behavior: 'smooth' });
}

  resolveAction= (playersReady) =>{
    if (this.state.isProcessing) return;
    const updatedArray = this.props.log;
    const { setNextRound, playerOne, playerTwo, updateHealth, astralProject } = this.props;
    if (!playersReady) return;

    if (playerOne.action === 'dog'){
      if(playerTwo.action === 'quick') {
        updateHealth(-1, 'One');
        updateHealth(-3, 'Two');
        updatedArray.push(`${playerTwo.name} tried to stab ${playerOne.name} with a pointy end of his tennis racket, only to be blindsided by ${playerOne.dog}'s ferocious bite to his ankle. ${playerTwo.name} managed to swat the dog away causing 1 emotional dmg to ${playerOne.name}. ${playerTwo.name}'s ankle suffers 2 dmg.`);
      }
      if(playerTwo.action === 'heavy') {
        updateHealth(-3, 'Two');
        updatedArray.push(`${playerTwo.name} swung at ${playerOne.name} with his tennis racket. Sensing the opening, ${playerOne.dog} bit ${playerTwo.name}'s butt. Struggling to get ${playerOne.dog} off his back, ${playerTwo.name} suffers a devastating 3 dmg.`);
      } 
      if(playerTwo.action === 'riposte') {
        updateHealth(-2, 'One');
        updatedArray.push(`Unaware of ${playerTwo.name}\'s trap, ${playerOne.name} directed ${playerOne.dog} to attack, only to be countered by ${playerTwo.name}'s riposte. Seeing his pet beaten so brutally causes ${playerOne.name} 3 psychological dmg and thousands in future therapy bills.`);
      } 
    }
    if (playerOne.action === 'quick'){
      if(playerTwo.action === 'quick') {
        updateHealth(-1, 'One');
        updateHealth(-1, 'Two');
        updatedArray.push('Both grown men slap each other at the same time, suffering 1 dmg each.');
      }
      if(playerTwo.action === 'heavy') {
        updateHealth(-2, 'Two');
        updatedArray.push(`An enraged ${playerTwo.name} swung at ${playerOne.name} with a tennis racket, only to be countered by a swift poke in the eye by ${playerOne.name}\'s umbrella. ${playerTwo.name} suffers 2 dmg.`);
      } 
      if(playerTwo.action === 'riposte') {
        updateHealth(-2, 'One');
        updatedArray.push(`${playerOne.name} attempts a quick umbrella stab, only to be interrupted by a swift counter riposte from ${playerTwo.name}'s tennis racket. ${playerOne.name} suffers 2 dmg.`);
      }
      if(playerTwo.action === 'astralProject') {
        astralProject();
        updatedArray.push(`${playerTwo.name}'s spirit leaves his body and possesses ${playerOne.name}. Players switch hp totals.`);
      }  
    }

    //Player One Heavy
    if (playerOne.action === 'heavy'){
      if(playerTwo.action === 'quick') {
        updateHealth(-2, 'One');
        updatedArray.push(`${playerOne.name} attempts a heavy umbrella swing, only to get blindsided by ${playerTwo.name}'s swift kick to the shin. ${playerOne.name} suffers 2 dmg.`);
      }
      if(playerTwo.action === 'heavy') {
        updateHealth(-2, 'Two');
        updateHealth(-2, 'One');
        updatedArray.push('Both adult men attempt heavy attacks on one another, each connecting successfully. Both mutter "I\'m getting too old for this shit" under their breath and suffer 2 dmg.');
      } 
      if(playerTwo.action === 'riposte') {
        updateHealth(-2, 'Two');
        updatedArray.push(`${playerTwo.name} tries an elaborate counter attack, only to get humiliated by ${playerOne.name}'s crushing overhead umbrella attack. ${playerTwo.name} suffers 2 dmg.`);
      } 
      if(playerTwo.action === 'astralProject') {
        astralProject();
        updatedArray.push(`${playerTwo.name}'s spirit leaves his body and possesses ${playerOne.name}. Players switch hp totals. `);
      } 
    }

    //Player One Riposte
    if (playerOne.action === 'riposte'){
      if(playerTwo.action === 'quick') {
        updateHealth(-2, 'Two');
        updatedArray.push(`${playerOne.name} anticipates ${playerTwo.name}'s tennis racket jab, countering it with a flurry of umbrella pokes to the face. ${playerTwo.name} suffers 2 dmg and permanent scars.`);
      }
      if(playerTwo.action === 'heavy') {
        updateHealth(-2, 'One');
        updatedArray.push(`Hoping to outsmart ${playerTwo.name}, ${playerOne.name} prepares a counter-attack, only to be overpowered by ${playerTwo.name}'s mighty tennis racket swing. ${playerOne.name} suffers 2 dmg.`);
      } 
      if(playerTwo.action === 'riposte') {
        updateHealth(1, 'One');
        updateHealth(1, 'Two'); 
        updatedArray.push(`Both ${playerOne.name} and ${playerTwo.name} attempt to counter attack each other's attacks. For a moment, they meet each other's gaze and contemplate what they're doing with their lives. Rejuvinated by their introspection, both men gain +1 health`);
      }
      if(playerTwo.action === 'astralProject') {
        const jeffHp = - (playerTwo.hp - 1);
        playerTwo.hasProjected = true;
        updateHealth(jeffHp, 'Two');
        updatedArray.push(`${playerTwo.name}'s spirit form attempts to inhabit ${playerOne.name}'s body, but is knocked aside by a swift counter riposte. Without a soul, ${playerTwo.name}'s husk of a body is reduced to 1 hp`);
      } 
    }
    this.props.updateLog(updatedArray);
    setNextRound();
  };

  componentWillReceiveProps(nextProps){
    if(!nextProps.playersReady) return;
    // console.log('nextProps are', this.nextProps.play)
    if(nextProps.playersReady === this.props.playersReady) return;
    setTimeout(() => {
      this.resolveAction(nextProps.playersReady);
      this.setState({ isProcessing: true });
    }, 500);
    this.setState({ isProcessing: false });
  }

  render() {
    return(
      // everytime InfoDiv rerenders inner ref does the function;
      <InfoDiv innerRef={node => { node && (node.scrollTop = node.scrollHeight);}}>
        {/* <span>player one chose to {playerOne.action}</span>
        <span>player Two chose to {playerTwo.action}</span> */}
        <span style={{ marginTop: '500px' }}></span>
        {this.props.log.map((outcome, i) =>{
          return <li className="log" id={i} key={i}>{outcome}</li>;
        })}
      </InfoDiv>
    );
  }
}

const InfoDiv = styled.div`
overflow: scroll;
height: 300px;
display: flex;
flex-direction: column;
width: 100%;
margin: 0 2%;
background-color: black;
color: white;
scroll-behavior: auto;
`;