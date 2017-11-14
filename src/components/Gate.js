import React, { Component } from 'react';
import gatePic from '../wonkaGate.jpg';



export default class Gate extends Component {
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
        <img src={gatePic} alt="" useMap="#gateMap" />
        <map name="gateMap" id="Map">
          <area data-value="correct" alt="grid" shape="poly" coords="479,147,477,566,636,567,622,156" 
            onClick={({ target }) => this.handleClick(target.dataset.value)} />
        </map>
        <p className="App-script">
          Do you have a ticket to give Mr Wonka?
        </p>
        <p>
          Message: {this.state.message}
        </p>
      </section>
    );
  }

}