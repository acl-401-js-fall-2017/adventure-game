import React, { Component } from 'react';
import inventPic from '../pics/testing.png';



export default class Inventing extends Component {
  constructor() {
    super();
    this.state = {
      kids: [],
      gotGob: false
    };
  }

  handleClick(value, inv){
    const { handleInventory, inventory } = this.props;
    const kids = [...this.state.kids];
    if(this.state.kids.length <= 3 && inv === 'kids') {
      kids.push('kids');
    }
    const gotGob = inventory.indexOf('gobstopper') === -1 && inv === 'gobstopper' && kids.length >= 4 ? true : false;
    this.setState({
      kids,
      gotGob
    },() =>  {
      if (inventory.indexOf('gobstopper') === -1 && inv === 'gobstopper' && this.state.kids.length >= 4) {
        handleInventory('gobstopper');
      }
    });
  }


  render() {
    let message = 'Give Mr Wonka the loompas for the gobstopper';
    if(this.state.length < 4) {
      message = 'There are still children in your way';
    } else if(this.state.gotGob === true) {
      message = 'You got the gobstopper!';
    }
    
    return (
      <section>
        <img src={inventPic} alt="" useMap="#invMap" />
        <map name="invMap" id="Map">
          <area alt="grid" data-value="correct" data-inv="gobstopper" shape="poly" coords="436,249,436,295,486,295,486,242" onClick={({ target }) => this.handleClick(target.dataset.value, target.dataset.inv)}/>
          <area alt="grid" data-value="person" data-inv="kids" shape="poly" coords="6,432,8,635,163,631,222,442" onClick={({ target }) => this.handleClick(target.dataset.value, target.dataset.inv)}/>
          <area alt="grid" data-value="person" data-inv="kids" shape="poly" coords="246,324,207,613,458,618,383,321" onClick={({ target }) => this.handleClick(target.dataset.value, target.dataset.inv)}/>
          <area alt="grid" data-value="person" data-inv="kids" shape="poly" coords="467,609,580,304,743,324,784,608" onClick={({ target }) => this.handleClick(target.dataset.value, target.dataset.inv)}/>
          <area alt="grid" data-value="person" data-inv="kids" shape="poly" coords="795,602,918,295,1085,292,1142,590"   onClick={({ target }) => this.handleClick(target.dataset.value, target.dataset.inv)}/>
        </map>
        {this.state.kids.length < 4 && (
          <p className="App-script"> 
          Move the { 4 - this.state.kids.length} kids out of the way to get the everlasting gobstopper.
          </p>
        )}
        <p>
          Message: {message} 
        </p>
      </section>
    );
  }

}