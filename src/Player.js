import React, { Component } from 'react';
import styled from 'styled-components';

export default class Player extends Component{

  render(){
    const { player, instruction } = this.props;
    return(
      <div style ={{ display: 'flex', justifyContent:'center', width:'50%' }}>

        <InfoDiv>
          <span>{player.name}</span>
          <img  style={{ width: '100%' }} alt={'avatar'} src={player.img}/>
          <span>Current Health:{player.hp}</span>
          <span> Actions: </span>
          { instruction.map((v, i) =><span key={i}>{v}</span>)}
          <span>{(player.action !== '')? `${player.name} is ready`: `${player.name} is making a choice...`}</span>
        </InfoDiv>

      </div>
    );
  }
}

const InfoDiv = styled.div`
width: 50%;
display: flex;
flex-direction: column;
`;