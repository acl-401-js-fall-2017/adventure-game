import React, { Component } from 'react';
import shopPic from '../wonkaStore.jpg';



export default class Candyshop extends Component {
  constructor() {
    super();
    this.state = {
      shopMessage: 'You have got the golden ticket',
    };
  }

  handleClick(value, inv = ''){
    const { handleInventory, inventory } = this.props;
    this.setState({
      message: value !== 'correct' ? 'Pick again' : this.state.shopMessage
    },() =>  {
      if(inventory.indexOf('golden-ticket') === -1 && inv === 'golden-ticket') {
        handleInventory('golden-ticket');
      }
    });
    
  }

  render() {
    
    return (
      <section>
        <p className="App-pic">
          <img src={shopPic} useMap="#shopMap" alt="Candy shop"/>
          <map name="shopMap" id="shopMap">
            <area alt="grid"  data-value="wrong" shape="poly" coords="53,194,52,320,220,324,220,208" onClick={({ target }) => this.handleClick(target.dataset.value)}/>
            <area alt="grid"  data-value="wrong" shape="poly" coords="61,342,57,415,216,416,221,345" onClick={({ target }) => this.handleClick(target.dataset.value)}/>
            <area alt="grid"  data-value="wrong" shape="poly" coords="56,444,52,518,205,516,220,443" onClick={({ target }) => this.handleClick(target.dataset.value)}/>
            <area alt="grid"  data-value="wrong" shape="poly" coords="262,208,261,326,531,327,524,208" onClick={({ target }) => this.handleClick(target.dataset.value)}/>
            <area alt="grid"  data-value="wrong" shape="poly" coords="262,353,261,417,530,422,528,346" onClick={({ target }) => this.handleClick(target.dataset.value)}/>
            <area alt="grid"  data-value="wrong" shape="poly" coords="265,440,261,507,523,511,536,438" onClick={({ target }) => this.handleClick(target.dataset.value)}/>
            <area alt="grid"  data-value="wrong" shape="poly" coords="881,202,881,312,1016,305,1008,201" onClick={({ target }) => this.handleClick(target.dataset.value)}/>
            <area alt="grid"  data-value="wrong" shape="poly" coords="880,337,881,434,1014,444,1016,332" onClick={({ target }) => this.handleClick(target.dataset.value)}/>
            <area alt="grid"  data-value="wrong" shape="poly" coords="1055,198,1047,306,1144,305,1144,200" onClick={({ target }) => this.handleClick(target.dataset.value)}/>
            <area alt="grid"  data-value="wrong" shape="poly" coords="884,461,883,558,1013,581,1012,468" onClick={({ target }) => this.handleClick(target.dataset.value)}/>
            <area alt="grid"  data-value="wrong" shape="poly" coords="1045,467,1045,583,1148,603,1145,474" onClick={({ target }) => this.handleClick(target.dataset.value)}/>
            <area alt="grid"  data-value="wrong" shape="poly" coords="872,591,871,643,988,641,985,590" onClick={({ target }) => this.handleClick(target.dataset.value)}/>
            <area alt="grid"  data-inv="golden-ticket" data-value="correct" shape="poly" coords="1049,337,1049,447,1150,452,1146,335" onClick={({ target }) => this.handleClick(target.dataset.value, target.dataset.inv)}/>;
          </map>
        </p>
        <p className="App-script"> 
    Pick what candy to buy! Try to get the 'Golden Ticket'. 
        </p>
        <p> 
      Message: {this.state.message}
        </p>
      </section>
    );
  }

}