import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Death from './Death';
import Player from './Player';
import styled from 'styled-components';
import GameProgress from './GameProgress';

class App extends Component {
  state = {
    bob: { hp: 5, action: '' },
    jeff: { hp: 5, action: '' },
    playersReady: false
  }

  setNextRound = () => {
    this.changePlayerAction('bob', '');
    this.changePlayerAction('jeff', '');
    this.setState({ playersReady: false });
  }

  updateHealth = (hp, player) => {
    const { bob, jeff } = this.state;
    const one = bob;
    const two = jeff;
    if (player === 'One') one.hp += hp;
    else two.hp += hp;
    this.setState({ bob: one, jeff: two });
  }

  changePlayerAction(player, action) {
    const playerState = this.state[player];
    playerState.action = action;
    return this.setState({ [player] : playerState });
  }

  handleAction = ({ key }) => {
    switch(key){
    case 'q': 
      this.changePlayerAction('bob', 'quick');
      break;
    case 'w': 
      this.changePlayerAction('bob', 'heavy');
      break;
    case 'e': 
      this.changePlayerAction('bob', 'riposte');
      break;
    case 'p': 
      this.changePlayerAction('jeff', 'quick');
      break;
    case 'o': 
      this.changePlayerAction('jeff', 'heavy');  
      break;
    case 'i': 
      this.changePlayerAction('jeff', 'riposte');
      break;
    case ' ':
      this.setState({ playersReady: true });
      break;
    default : break;
    }
  }

  bothAlive =() =>{
    const { bob, jeff } = this.state;
    return(bob.hp > 0 && jeff.hp > 0);
  }

  componentDidMount(){
    document.addEventListener('keydown', this.handleAction); 
  }

  render() {
    const { bob , jeff, playersReady } = this.state;
    return (
      <div className="App" >
        <header className="App-header">
          <h1 className="App-title">Parking Massacre</h1>
        </header>
        <Death shouldDisplay = {!this.bothAlive()} hp={[bob.hp, jeff.hp]}/>

        <GameDiv shouldDisplay ={this.bothAlive()}>
          <Player player={bob} name='Bob' instruction={'Q: quick attack  W: heavy attack  E: riposte'}/>

          <GameProgress setNextRound = {this.setNextRound} playersReady = {playersReady} updateHealth ={this.updateHealth} bobAction = {bob.action} jeffAction = {jeff.action}/>

          <Player player={jeff} name='Jeff' instruction={'P: quick attack  O: heavy attack  I: riposte'}/>

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