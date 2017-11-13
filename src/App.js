import React, { Component } from 'react';
import logo from './goldenTx.jpg';
import shop from './wonkaStore.jpg';

import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      shopMessage: 'You have got the golden ticket',
      message: '',
      inventory: '',
      rooms: []
    };
  }

  
  handleClick(className, id){
    this.setState({  
      inventory: id === 'golden-ticket' ? this.state.inventory + 'golden-ticket' : null,
      message: className !== 'correct' ? 'Pick again' : this.state.shopMessage
    });
    
  }
  
  render() {
    const { inventory } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Wonka Tour</h1>
          <h2> Your Inventory: {inventory}</h2>
        </header>
        <p className="App-pic">
          <img src={shop} useMap="#shopMap" alt="Candy shop"/>
          <map name="shopMap" id="shopMap">
            <area alt="grid"  className="wrong" shape="poly" coords="53,194,52,320,220,324,220,208" onClick={event => this.handleClick(event.target.className)}/>
            <area alt="grid"  className="wrong" shape="poly" coords="61,342,57,415,216,416,221,345" onClick={event => this.handleClick(event.target.className)}/>
            <area alt="grid"  className="wrong" shape="poly" coords="56,444,52,518,205,516,220,443" onClick={event => this.handleClick(event.target.className)}/>
            <area alt="grid"  className="wrong" shape="poly" coords="262,208,261,326,531,327,524,208" onClick={event => this.handleClick(event.target.className)}/>
            <area alt="grid"  className="wrong" shape="poly" coords="262,353,261,417,530,422,528,346" onClick={event => this.handleClick(event.target.className)}/>
            <area alt="grid"  className="wrong" shape="poly" coords="265,440,261,507,523,511,536,438" onClick={event => this.handleClick(event.target.className)}/>
            <area alt="grid"  className="wrong" shape="poly" coords="881,202,881,312,1016,305,1008,201" onClick={event => this.handleClick(event.target.className)}/>
            <area alt="grid"  className="wrong" shape="poly" coords="880,337,881,434,1014,444,1016,332" onClick={event => this.handleClick(event.target.className)}/>
            <area alt="grid"  className="wrong" shape="poly" coords="1055,198,1047,306,1144,305,1144,200" onClick={event => this.handleClick(event.target.className)}/>
            <area alt="grid"  className="wrong" shape="poly" coords="884,461,883,558,1013,581,1012,468" onClick={event => this.handleClick(event.target.className)}/>
            <area alt="grid"  className="wrong" shape="poly" coords="1045,467,1045,583,1148,603,1145,474" onClick={event => this.handleClick(event.target.className)}/>
            <area alt="grid"  className="wrong" shape="poly" coords="872,591,871,643,988,641,985,590" onClick={event => this.handleClick(event.target.className)}/>
            <area alt="grid"  id="golden-ticket" className="correct" shape="poly" coords="1049,337,1049,447,1150,452,1146,335" onClick={event => this.handleClick(event.target.className)}/>
          </map>
        </p>
        <p className="App-script"> 
        Pick what candy to buy! Try to get the 'Golden Ticket'. 
        </p>
        <p> 
          Message: {this.state.message}
        </p>
      </div>
    );
  }
}


export default App;