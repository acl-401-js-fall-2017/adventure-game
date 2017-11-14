import React, { Component } from 'react';
import styled from 'styled-components';

export default class SignUp extends Component{
  state = { isFocused: false, playerOneName: 'Bob', playerOneDog: 'Lewis', playerTwoName: 'Jeff' };


  ComponentDidMount(){
    console.log('are we here',this.props);
  }
  render(){
    const { playerOneName, playerTwoName, isFocused, playerOneDog } = this.state;
    return(
      <SignUpWrapper shouldDisplay ={this.props.shouldDisplay}>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column' }} >
            <span>In the left Corner:</span>
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
              this.props.updateNames(playerOneName, playerTwoName, playerOneDog);
              this.props.startListener();
            }}> Let the Fight Begin!
            </StyledP>
          </div>
        </div>
        <div style ={{ display:'flex', flexDirection: 'column' }}>
          <span>In the Right Corner:</span>
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