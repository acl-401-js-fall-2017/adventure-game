import React, { Component } from 'react';
import staffPic from '../pics/staff.jpg';



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
        <img src={staffPic} alt="" useMap="#staffMap" />
        <map name="staffMap" id="Map">
          <area data-value="correct" alt="grid" shape="poly" coords="326,542,423,500,543,539,450,582" 
            onClick={({ target }) => this.handleClick(target.dataset.value)} />
        </map>
        <p className="App-script">
          Place the Everlasting Gobstopper on Mr Wonka's desk.
        </p>
        <p>
          Message: {this.state.message}
        </p>
      </section>
    );
  }

}