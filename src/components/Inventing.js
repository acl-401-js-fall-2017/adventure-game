import React, { Component } from 'react';
import inventPic from '../pics/testing.png';



export default class Inventing extends Component {
  constructor() {
    super();
    this.state = {
      invMessage: 'You got the Gobstopper',
      people: []
    };
  }

  handleClick(value, inv){
    const { handleInventory, inventory } = this.props;
    this.setState({
      message: value !== 'correct' ? 'There are still children in your way' : this.state.invMessage
    },() =>  {
      if (inventory.indexOf('gobstopper') === -1 && inv === 'gobstopper') {
        handleInventory('gobstopper');
      }
    });
  }

  // handleShove(value, people) {
  //   const { removeInventory, people } = this.props;
  //   this.setState({
  //     message: people.indexOf('golden-ticket') === -1 ? 'You need a ticket to get in' : this.state.invMessage
  //   }, () => {
  //     if (people.indexOf('golden-ticket') > -1) {
  //       removeInventory();
  //     }
  //   });
  // }


  render() {
    
    return (
      <section>
        <img src={inventPic} alt="" useMap="#invMap" />
        <map name="invMap" id="Map">
          <area alt="grid" data-value="correct" data-inv="gobstopper" href="#" shape="poly" coords="436,249,436,295,486,295,486,242" 
            onClick={({ target }) => this.handleClick(target.dataset.value)}/>
          <area alt="grid" data-value="person" href="#" shape="poly" coords="6,432,8,635,163,631,222,442" 
            onClick={({ target }) => this.handleClick(target.dataset.value)}/>
          <area alt="grid" data-value="person" href="#" shape="poly" coords="246,324,207,613,458,618,383,321" 
            onClick={({ target }) => this.handleClick(target.dataset.value)}/>
          <area alt="grid" data-value="person" href="#" shape="poly" coords="467,609,580,304,743,324,784,608" 
            onClick={({ target }) => this.handleClick(target.dataset.value)}/>
          <area alt="grid" data-value="person" href="#" shape="poly" coords="795,602,918,295,1085,292,1142,590"   
            onClick={({ target }) => this.handleClick(target.dataset.value)}/>
        </map>
        <p className="App-script">
          Move the 4 kids out of the way to get the everlasting gobstopper.
        </p>
        <p>
          Message: {this.state.message}
        </p>
      </section>
    );
  }

}