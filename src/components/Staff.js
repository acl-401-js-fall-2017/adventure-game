import React, { Component } from 'react';
import staffPic from '../pics/staff.jpg';



export default class Staff extends Component {
  constructor() {
    super();
    this.state = {
      staffMessage: 'You won the Chocolate factory',
    };
  }

  handleClick(value, inv){
    const { removeInventory, inventory } = this.props;
    this.setState({
      message: inventory.indexOf('gobstopper') === -1 ? 'You need to give Mr Wonka a Gobstopper' : this.state.staffMessage
    },() =>  {
      if (inventory.indexOf('gobstopper') > -1) {
        removeInventory();
      }
    });
  }

  render() {
    
    return (
      <section>
        <img src={staffPic} alt="" useMap="#staffMap" />
        <map name="staffMap" id="Map">
          <area data-inv="gobstopper" alt="grid" shape="poly" coords="326,542,423,500,543,539,450,582" onClick={({ target }) => this.handleClick(target.dataset.value)} />
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