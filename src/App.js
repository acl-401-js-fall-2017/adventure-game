import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Death from './Death';
import Player from './Player';
import styled from 'styled-components';
import GameProgress from './GameProgress';

class App extends Component {
  state = {
    playerOne: { name: 'guest', hp: 10, action: '' },
    playerTwo: { name: 'guest2', hp: 10, action: '' },
    playersReady: false
  }

  setNextRound = () => {
    this.setState({ playersReady: false });
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
    switch(key){
    case 'w': 
      this.changePlayerAction('playerOne', 'quick');
      break;
    case 'e': 
      this.changePlayerAction('playerOne', 'heavy');
      break;
    case 'a': 
      this.changePlayerAction('playerOne', 'kick');
      break;
    case 's': 
      this.changePlayerAction('playerOne', 'reposte');
      break;
    case 'd': 
      this.changePlayerAction('playerOne', 'block');
      break;

    case 'i': 
      this.changePlayerAction('playerTwo', 'quick');
      break;
    case 'o': 
      this.changePlayerAction('playerTwo', 'heavy');  
      break;
    case 'j': 
      this.changePlayerAction('playerTwo', 'kick');
      break;
    case 'k': 
      this.changePlayerAction('playerTwo', 'reposte');
      break;
    case 'l': 
      this.changePlayerAction('playerTwo', 'block');
      break;
    case ' ':
      this.setState({ spaceDetected: true });
      break;
    default : break;
    }
  }

  turnDone =() =>{
    this.setState({ isDone: false });
  }

  bothAlive =() =>{
    const { playerOne, playerTwo } = this.state;
    return(playerOne.hp > 0 && playerTwo.hp > 0);
  }
  componentDidMount(){
    document.addEventListener('keydown', this.handleAction); 
  }

  render() {
    const { playerOne , playerTwo, spaceDetected } = this.state;
    return (
      <div className="App" >
        <header className="App-header">
          <h1 className="App-title">Parking Massacre</h1>
        </header>
        <Death shouldDisplay = {!this.bothAlive} hp={[playerOne.hp, playerTwo.hp]}/>

        <GameDiv shouldDisplay ={this.bothAlive}>
          <Player player ={playerOne}/>

          <GameProgress setNextRound = {this.setNextRound} spaceDetected = {spaceDetected} updateHealth ={this.updateHealth} playerOneAction = {playerOne.action} playerTwoAction = {playerTwo.action}/>

          <Player player ={playerTwo}/>
        </GameDiv>
      </div>
    );
  }
}

export default App;

const GameDiv = styled.div`
  justify-content:space-between;
  margin: 0 10%;
  width: 80%;
  display:${props => props.shouldDisplay ? 'flex' : 'none'};
`;