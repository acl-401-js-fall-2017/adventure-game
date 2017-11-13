import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Death from './Death';
import Player from './Player';
import styled from 'styled-components';
import GameProgress from './GameProgress';

class App extends Component {
  state = {
    playerOne: { hp: 5, action: '' },
    playerTwo: { hp: 5, action: '' },
    playersReady: false
  }

  setNextRound = () => {
    this.changePlayerAction('playerOne', '');
    this.changePlayerAction('playerTwo', '');
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
    case ' ':
      this.setState({ playersReady: true });
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

  render() {
    const { playerOne , playerTwo, playersReady } = this.state;
    return (
      <div className="App" >
        <header className="App-header">
          <h1 className="App-title">Parking Massacre</h1>
        </header>
        <Death shouldDisplay = {!this.bothAlive} hp={[playerOne.hp, playerTwo.hp]}/>

        <GameDiv shouldDisplay ={this.bothAlive}>
          <Player player={playerOne} instruction={'Q: quick attack  W: heavy attack  E: riposte'}/>

          <GameProgress setNextRound = {this.setNextRound} playersReady = {playersReady} updateHealth ={this.updateHealth} playerOneAction = {playerOne.action} playerTwoAction = {playerTwo.action}/>

          <Player player ={playerTwo} instruction={'P: quick attack  O: heavy attack  I: riposte'}/>

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