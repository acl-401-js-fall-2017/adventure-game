import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Death from './Death';
import Player from './Player';
import styled from 'styled-components';
import GameProgress from './GameProgress';

class App extends Component {
  state ={
    playerOne:{ name: 'guest', hp:10, action:'' },
    playerTwo:{ name: 'guest2', hp:10, action:'' },
  }

  handleAction = ({ key }) => {
    const{ playerOne, playerTwo } = this.state;
    const one = playerOne;
    const two = playerTwo;
    switch(key){
    case 'w': 
      one.action='quick';
      this.setState({ playerOne: one });
      break;
    case 'e': 
      one.action='heavy';
      this.setState({ playerOne: one });
      break;
    case 'a': 
      one.action='kick';
      this.setState({ playerOne: one });
      break;
    case 's': 
      one.action='riposte';
      this.setState({ playerOne: one });
      break;
    case 'd': 
      one.action='block';
      this.setState({ playerOne: one });
      break;

    case 'i': 
      two.action='quick';
      this.setState({ playerTwo: two });
      break;
    case 'o': 
      two.action='heavy';
      this.setState({ playerTwo: two });
      break;
    case 'j': 
      two.action='kick';
      this.setState({ playerTwo: two });
      break;
    case 'k': 
      two.action='riposte';
      this.setState({ playerTwo: two });
      break;
    case 'l': 
      two.action='block';
      this.setState({ playerTwo: two });
      break;
    default : break;
    }
  }

  turnDone

  bothAlive =() =>{
    const { playerOne, playerTwo } = this.state;
    return(playerOne.hp > 0 && playerTwo.hp > 0);
  }
  componentDidMount(){
    document.addEventListener('keydown', this.handleAction); 
  }

  render() {
    const { playerOne , playerTwo } = this.state;
    return (
      <div className="App" >
        <header className="App-header">
          <h1 className="App-title">Parking Massacre</h1>
        </header>
        <Death shouldDisplay = {!this.bothAlive} hp={[playerOne.hp, playerTwo.hp]}/>

        <GameDiv shouldDisplay ={this.bothAlive}>
          <Player player ={playerOne}/>

          <GameProgress PlayerOneAction = {playerOne.action} PlayerTwoAction = {playerTwo.action}/>

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
