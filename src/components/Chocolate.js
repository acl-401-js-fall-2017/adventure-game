import React, { Component } from 'react';
import chocPic from '../pics/chocolate.jpg';



export default class Chocolate extends Component {
  constructor() {
    super();
    this.state = {
      gateMessage: 'Welcome to the Chocolate factory',
    };
  }

  handleClick(value, inv){
    const { removeInventory, inventory } = this.props;
    this.setState({
      message: inventory.indexOf('golden-ticket') === -1 ? 'You need a ticket to get in' : this.state.gateMessage
    },() =>  {
      if(inventory.indexOf('golden-ticket') > -1) {
        removeInventory();
      }
    });
  }

  render() {
    
    return (
      <section>
        <img src={chocPic} alt="" useMap="#chocMap" />
        <map name="chocMap" id="Map">
          <area alt="grid" shape="poly" coords="54,69,44,360,160,357,134,68" />
          <area alt="grid" shape="poly" coords="171,347,172,462,283,467,307,357" />
          <area alt="grid" shape="poly" coords="701,510,700,593,844,607,872,509" />
          <area data-value="correct"alt="grid" shape="poly" coords="455,103,459,230,597,236,594,110" 
            onClick={({ target }) => this.handleClick(target.dataset.value)} />
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