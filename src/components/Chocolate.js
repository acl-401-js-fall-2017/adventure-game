import React, { Component } from 'react';
import chocPic from '../pics/chocolate.jpg';



export default class Chocolate extends Component {
  constructor() {
    super();
    this.state = {
      chocMessage: 'You have avoided death, but another child was not so lucky',
    };
  }

  handleClick(value, inv = ''){
    const { handleInventory, inventory } = this.props;
    this.setState({
      message: value === 'correct' && inventory.length >= 1 ? this.state.chocMessage : 'The oompa loompa are about to sing about your death' 
    },() =>  {
      if (inv === 'loompa') {
        handleInventory('loompa');
      }
    });
  }

  render() {
    
    return (
      <section>
        <img src={chocPic} alt="" useMap="#chocMap" />
        <map name="chocMap" id="Map">
          <area data-inv="loompa" data-value="correct" alt="grid" shape="poly" coords="54,69,44,360,160,357,134,68" 
            onClick={({ target }) => this.handleClick(target.dataset.value, target.dataset.inv)}/>
          <area alt="grid" shape="poly" coords="171,347,172,462,283,467,307,357" />
          <area alt="grid" shape="poly" coords="701,510,700,593,844,607,872,509" />
          <area data-inv="loompa" data-value="correct" alt="grid" shape="poly" coords="455,103,459,230,597,236,594,110" 
            onClick={({ target }) => this.handleClick(target.dataset.value, target.dataset.inv)} />
        </map>
        <p className="App-script">
          The oompa loompas are coming after the kids, where are they going to come from?
        </p>
        <p>
          Message: {this.state.message}
        </p>
      </section>
    );
  }

}