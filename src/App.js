import React, { Component } from 'react';
import logo from './goldenTx.jpg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: ''
    };
  }
  
  handleClick(className){
    this.setState({  
      message: className !== 'correct' ? 'Pick again' : 'You have got the golden ticket' 
    });
    
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Wonka Tour</h1>
        </header>
        <p className="App-pic">
          < img src="https://i.ytimg.com/vi/sizCBeS03YU/maxresdefault.jpg" useMap="#shopMap" alt="Candy shop"/>
          <map name="shopMap" id="shopMap">
            <area alt="grid" ref="wrong" className="wrong" shape="poly" coords="91,270,95,543,394,546,381,305" onClick={event => this.handleClick(event.target.className)}/>
            <area alt="grid" ref="wrong" className="wrong" shape="poly" coords="440,293,434,548,892,546,881,302" onClick={event => this.handleClick(event.target.className)}/>
            <area alt="grid" ref="wrong" className="wrong" shape="poly" coords="91,556,84,707,380,706,381,566" onClick={event => this.handleClick(event.target.className)}/>
            <area alt="grid" ref="wrong" className="wrong" shape="poly" coords="435,564,434,703,892,709,892,563" onClick={event => this.handleClick(event.target.className)}/>
            <area alt="grid" ref="wrong" className="wrong" shape="poly" coords="88,726,90,870,375,860,376,720" onClick={event => this.handleClick(event.target.className)}/>
            <area alt="grid" ref="wrong" className="wrong" shape="poly" coords="432,720,434,862,889,878,894,724" onClick={event => this.handleClick(event.target.className)}/>
            <area alt="grid" ref="wrong" className="wrong" shape="poly" coords="1458,760,1462,944,1698,978,1696,775" onClick={event => this.handleClick(event.target.className)}/>
            <area alt="grid" ref="wrong" className="wrong" shape="poly" coords="1458,546,1465,737,1696,746,1692,546" onClick={event => this.handleClick(event.target.className)}/>
            <area alt="grid" ref="wrong" className="wrong" shape="poly" coords="1458,311,1462,530,1697,519,1694,310" onClick={event => this.handleClick(event.target.className)}/>
            <area alt="grid" ref="wrong" className="wrong" shape="poly" coords="1729,777,1736,989,1918,1013,1917,786" onClick={event => this.handleClick(event.target.className)}/>
            <area alt="grid" ref="wrong" className="wrong" shape="poly" coords="1734,522,1744,319,1914,305,1918,516" onClick={event => this.handleClick(event.target.className)}/>
            <area alt="grid" ref="correct" className="correct" shape="poly" coords="1734,542,1741,748,1919,759,1914,535" onClick={event => this.handleClick(event.target.className)} />
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
