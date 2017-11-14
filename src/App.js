import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Death from './Death';
import Player from './Player';
import styled from 'styled-components';
import GameProgress from './GameProgress';
import SignUp from './SignUp';
import keys from './scripts/handleAction';

class App extends Component {
  state = {
    playerOne: { hp: 8, action: '', name: 'Bob', dog:'', img: '' },
    playerTwo: { hp: 8, action: '', name: 'Jeff', hasProjected: false, img: '' },
    signedIn: false,
    log: []
  }

  updateNames = (one, two, dog, oneImg, twoImg) => {
    this.setState({ signedIn: true });
    let updated = this.state;
    updated.playerOne.name = one;
    updated.playerOne.action = '';
    updated.playerOne.dog = dog;
    updated.playerOne.img = oneImg;


    updated.playerTwo.name = '';
    updated.playerTwo.name = two;
    updated.playerTwo.img = twoImg;
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

  switchHealth = () => {
    const bob = this.state.playerOne;
    const jeff = this.state.playerTwo;
    let jeffHp = jeff.hp;
    jeff.hp = bob.hp;
    jeff.hasProjected = true;
    bob.hp = jeffHp;
    this.setState({ playerOne : bob });
    this.setState({ playerTwo : jeff });
  }

  changePlayerAction(player, action) {
    const playerState = this.state[player];
    playerState.action = action;
    return this.setState({ [player] : playerState });
  }

  handleAction = ({ key }) => {
    const { playerTwo } = this.state;
    const result = keys[key];
    if(!result) return;
    if(result.action === 'astralProject' && playerTwo.hasProjected === true) return;
    this.changePlayerAction(result.player, result.action);
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
      playerTwo: { hp: 5, action: '', name: 'Jeff', hasProjected: false },
      signedIn: false,
      log: []
    });
  }

  render() {
    const { playerOne , playerTwo, log, signedIn } = this.state;
    return (
      <div className="App" >
        <header className="App-header">
          <img src={require('./pics/parkingspot.jpg')} className="Header-Image" alt="parking spot"/>
        </header>
        <SignUp shouldDisplay={!signedIn} updateNames={this.updateNames} startListener={this.startListener} />

        <Death shouldDisplay={!this.bothAlive() && signedIn} playerOne={playerOne} playerTwo={playerTwo}
          handleReset={() => this.reset()} />

        <GameDiv shouldDisplay={this.bothAlive() && signedIn}>
        
          <Player player={playerOne} instruction={['Q: quick attack',  'W: heavy attack',  'E: riposte', 'D: Dog attack']}/>

          <GameProgress 
            setNextRound={this.setNextRound} 
            playersReady={(playerOne.action !== '' && playerTwo.action !== '')} 
            updateHealth={this.updateHealth} 
            playerOne={playerOne} 
            playerTwo={playerTwo}
            log={log}
            updateLog={(updated) => this.setState({ log: updated })}
            astralProject={() => this.switchHealth()}/>

          <Player player={playerTwo} instruction={['P: quick attack',  'O: heavy attack',  'I: riposte', 'U: Astral Projection']}/>

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