import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Death from './Death';
import Player from './Player';
import styled from 'styled-components';
import GameProgress from './GameProgress';

class App extends Component {
  state = {
    playerOne: { hp: 5, action: '', name: 'Bob' },
    playerTwo: { hp: 5, action: '', name: 'Jeff' },
    log: []
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

  componentDidMount(){
    document.addEventListener('keydown', this.handleAction); 
  }

  reset(){
    return this.setState({
      playerOne: { hp: 5, action: '', name: 'Bob' },
      playerTwo: { hp: 5, action: '', name: 'Jeff' },
      log: []
    });
  }

  render() {
    const { playerOne , playerTwo, log } = this.state;
    return (
      <div className="App" >
        <header className="App-header">
          <h1 className="App-title">Parking Massacre</h1>
        </header>
        <Death shouldDisplay = {!this.bothAlive()} hp={[playerOne.hp, playerTwo.hp]}
          handleReset = {() => this.reset()} />

        <GameDiv shouldDisplay ={this.bothAlive()}>
        
          <Player player={playerOne} name='playerOne' instruction={['Q: quick attack',  'W: heavy attack',  'E: riposte']}/>

          <GameProgress 
            setNextRound = {this.setNextRound} 
            playersReady = {(playerOne.action !== '' && playerTwo.action !== '')} 
            updateHealth ={this.updateHealth} 
            playerOne = {playerOne} 
            playerTwo = {playerTwo}
            log = {log}
            updateLog = {(updated) => this.setState({ log: updated })} />

          <Player player={playerTwo} name='playerTwo' instruction={['P: quick attack',  'O: heavy attack',  'I: riposte']}/>

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