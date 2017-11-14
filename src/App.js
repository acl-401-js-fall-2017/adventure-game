import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Death from './Death';
import Player from './Player';
import styled from 'styled-components';
import GameProgress from './GameProgress';
import SignUp from './SignUp';
import handleAction from './scripts/handleAction';

class App extends Component {
  state = {
    playerOne: { hp: 5, action: '', name: 'Bob' },
    playerTwo: { hp: 5, action: '', name: 'Jeff' },
    signedIn: false,
    log: []
  }

  // handleAction = handleAction.bind(this); 

  updateNames = (one, two) => {
    this.setState({ signedIn: true });
    let updated = this.state;
    updated.playerOne.name = one;
    updated.playerOne.action = '';

    updated.playerTwo.name = '';
    updated.playerTwo.name = two;
    this.setState({ updated });
  }

  setNextRound = () => {
    this.changePlayerAction('playerOne', '');
    this.changePlayerAction('playerTwo', '');
  }

  updateHealth = (hp, player) => {
    const { playerOne, playerTwo } = this.state;
    const one = playerOne;
    const two = playerTwo;
    if (player === 'One') one.hp += hp;
    else two.hp += hp;
    this.setState({ playerOne: one, playerTwo: two });
  }

  changePlayerAction(player, action) {
    const playerState = this.state[player];
    playerState.action = action;
    return this.setState({ [player] : playerState });
  }

  handleAction = ({ key }) => {
    // const result = keys[key];
    // if(!result) return; 
    // this.changePlayerAction(result.player, result.action);
    
    // strategy pattern 
    switch(key){
    case 'q': 
      this.changePlayerAction('playerOne', 'quick');
      break;
    case 'w': 
      this.changePlayerAction('playerOne', 'heavy');
      break;
    case 'e': 
      this.changePlayerAction('playerOne', 'riposte');
      break;
    case 'p': 
      this.changePlayerAction('playerTwo', 'quick');
      break;
    case 'o': 
      this.changePlayerAction('playerTwo', 'heavy');  
      break;
    case 'i': 
      this.changePlayerAction('playerTwo', 'riposte');
      break;
    default : break;
    }
  }

  bothAlive =() =>{
    const { playerOne, playerTwo } = this.state;
    return(playerOne.hp > 0 && playerTwo.hp > 0);
  }

  startListener = ()=>{
    document.addEventListener('keydown', this.handleAction); 
  }

  reset(){
    document.removeEventListener('keydown', this.handleAction);
    return this.setState({
      playerOne: { hp: 5, action: '', name: 'Bob' },
      playerTwo: { hp: 5, action: '', name: 'Jeff' },
      signedIn: false,
      log: []
    });
  }

  render() {
    const { playerOne , playerTwo, log, signedIn } = this.state;
    return (
      <div className="App" >
        <header className="App-header">
          <h1 className="App-title">Parking Massacre</h1>
        </header>
        <SignUp shouldDisplay={!signedIn} updateNames={this.updateNames} startListener={this.startListener} />

        <Death shouldDisplay={!this.bothAlive() && signedIn} playerOne={playerOne} playerTwo={playerTwo}
          handleReset={() => this.reset()} />

        <GameDiv shouldDisplay={this.bothAlive() && signedIn}>
        
          <Player player={playerOne} instruction={['Q: quick attack',  'W: heavy attack',  'E: riposte']}/>

          <GameProgress 
            setNextRound={this.setNextRound} 
            playersReady={(playerOne.action !== '' && playerTwo.action !== '')} 
            updateHealth={this.updateHealth} 
            playerOne={playerOne} 
            playerTwo={playerTwo}
            log = {log}
            updateLog = {(updated) => this.setState({ log: updated })} />

          <Player player={playerTwo} instruction={['P: quick attack',  'O: heavy attack',  'I: riposte']}/>

        </GameDiv>
      </div>
    );
  }
}

export default App;

const GameDiv = styled.div`
  justify-content:center;
  width: 100%;
  display:${props => props.shouldDisplay ? 'flex' : 'none'};
`;