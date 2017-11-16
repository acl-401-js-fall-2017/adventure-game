import React, { Component } from 'react';
import styled from 'styled-components';
 
export default class Death extends Component{
  
  state = { outcome: '', winnerImg: '' };
  
  determineOutcome(){
    const { playerOne, playerTwo } = this.props;
    let img = playerOne.img;
    if (playerOne.hp < 1 && playerTwo.hp < 1) {
      img = '';
      this.setState({ outcome: 'they both died', winnerImg: img });
    }

    else if (playerOne.hp < 1) {
      img = playerTwo.img;
      this.setState({ outcome: `${playerTwo.name} won!!!`, winnerImg: img });
    }

    else if (playerTwo.hp < 1) {
      img = playerOne.img;
      this.setState({ outcome: `${playerOne.name} won!!!`, winnerImg: img  });
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps === this.props) return;
    if (!nextProps.playerOne || !nextProps.playerTwo) return;
    this.determineOutcome();
  }

  render() {
    return ( 
      <WinScreen shouldDisplay={this.props.shouldDisplay}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span>{this.state.outcome}</span>
          <StyledP className="button" onClick={() => this.props.handleReset()}>Play Again?</StyledP>
        </div>
      </WinScreen>
    );
  }
}

const WinScreen = styled.div`
  display: ${props => (props.shouldDisplay) ? 'flex' : 'none'};
  justify-content: center;
  flex-direction: row;
  text-align: center;
  width: 100%;
  font-size: 70px;
  color: red;
  margin 10% 0;
`;
const StyledP = styled.div`
width: 100% ;
display: 'flex';
color: black;
border: 1px solid black;
font-size: 15px;
`;


