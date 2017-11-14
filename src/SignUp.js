import React, { Component } from 'react';
import styled from 'styled-components';
const harold = require('./pics/harold.jpg');
const angryMan = require('./pics/angry-worker.jpg');
const tired = require('./pics/tiredworker.jpg');
const jeff1 = require('./pics/jeff1.png');
const jeff2 = require('./pics/jeff2.jpg');
const jeff3 = require('./pics/jeff3.png');


export default class SignUp extends Component{
  state = { isFocused: false, playerOneName: 'Bob', playerOneDog: 'Lewis', playerTwoName: 'Jeff', playerOneImg:'', playerTwoImg: '' };


  addImgOne = (e) => {
    this.setState({ playerOneImg: e.target.value });
  }
  addImgTwo = (e) => {
    this.setState({ playerTwoImg: e.target.value });
  }

  render(){
    const { playerOneName, playerTwoName, isFocused, playerOneDog, playerOneImg, playerTwoImg } = this.state;
    return(
      <SignUpWrapper shouldDisplay ={this.props.shouldDisplay}>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column' }} >
            <span>In the left Corner:</span>
            <img  style={{ width: '40%' }} src={playerOneImg}/>
            <div>
              <select onChange ={this.addImgOne}>
                <option>Choose your avatar</option>
                <option value ={harold}> Harold</option>
                <option value ={angryMan}>Angry Man</option>
                <option value ={tired}>Project Week Bob</option>
              </select>
            </div>
            <input 
              value={playerOneName}
              onChange ={({ target }) => this.setState({ playerOneName: target.value })}
            />
            <span>And his trusted Companion:</span>
            <input 
              value={playerOneDog}
              onChange ={({ target }) => this.setState({ playerOneDog: target.value })}
            />
            <p> {playerOneName} has two kids and mid-range husband, All his life he dreamed of being accountant for Dunder Mifflin Paper Company. Armed with his trusty umbrella and loving emotional support animal {playerOneDog} he is ready to fight for whats his</p>
          </div>

        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginTop:'20%' }} >
          <p style={{ textAlign:'center' }}>Two men find a parking spot, only one will live to use it.</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <StyledP onClick={() =>{
              this.props.updateNames(playerOneName, playerTwoName, playerOneDog, playerOneImg, playerTwoImg);
              this.props.startListener();
            }}> Let the Fight Begin!
            </StyledP>
          </div>
        </div>
        <div style ={{ display:'flex', flexDirection: 'column' }}>
          <span>In the Right Corner:</span>
          <img  style={{ width: '40%' }} src={playerTwoImg}/>
          <div>
            <select onChange ={this.addImgTwo}>
              <option>Choose your avatar</option>
              <option value ={jeff1}> The Boss </option>
              <option value ={jeff2}> Jeff </option>
              <option value ={jeff3}> Chad </option>
            </select>
          </div>
          <input 
            value={playerTwoName}
            onChange ={({ target })=> this.setState({ playerTwoName: target.value })}
          />
          <p> {playerTwoName} (or "Denim-Lord" as his friends call him) is a defense attorney in a small but trusted maritime law firm. He graduated in the top 80th percentile of his class and can astral project himself once per battle.</p>
        </div>
      </SignUpWrapper>
    );
  }

  
  
  
}
const SignUpWrapper = styled.div`

margin: 5%;
display:${props => props.shouldDisplay ? 'flex' : 'none'};
justify-content: space-between; 
`;

const StyledP = styled.div`
text-align: center;
width: 100%;
margin: 0 20%;
justify-content: center;
display: flex;
color: black;
border: 1px solid black;
font-size: 15px;
`;