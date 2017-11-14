import React, { Component } from 'react';
import styled from 'styled-components';

export default class SignUp extends Component{
  state = { isFocused: false, playerOneName: 'Bob', playerTwoName: 'Jeff' };


  ComponentDidMount(){
    console.log('are we here',this.props);
  }
  render(){
    const { playerOneName, playerTwoName, isFocused } = this.state;
    return(
      <SignUpWrapper shouldDisplay ={this.props.shouldDisplay}>
        <div>
          <span>In the left Corner:</span>
          <input 
            value={playerOneName}
            onChange ={({ target }) => this.setState({ playerOneName: target.value })}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }} >
          <p style={{ textAlign:'center' }}>Two men find a parking spot, only one will live to use it.</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <StyledP onClick={() =>{
              this.props.updateNames(playerOneName, playerTwoName);
              this.props.startListener();
            }}> Let the Fight Begin!
            </StyledP>
          </div>
        </div>
        <div>
          <span>In the Right Corner:</span>
          <input 
            value={playerTwoName}
            onChange ={({ target })=> this.setState({ playerTwoName: target.value })}
          />
        </div>
      </SignUpWrapper>
    );
  }

  
  
  
}
const SignUpWrapper = styled.div`

margin: 10%;
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