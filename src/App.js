import React, { Component } from 'react';
import './App.css';
import floors from './Floors';
import moment from 'moment';
// import images from './images/oldLady.jpg';

class App extends Component {

  constructor() {
    super();
    this.state = {
      itemInHand: null,
      timer: 0,
      floors,
      floor: floors[3],
      pickUpValue: floors[3].items[0],
      pizzaIngredients: []
    };
  }

  componentWillMount() {
    const savedGame = localStorage.getItem('currentGame');
    savedGame ? this.setState(JSON.parse(savedGame)) :
      this.setState({ timer: { minutes: parseInt(moment().format('mm'), 10), seconds: parseInt(moment().format('ss'), 10) } });
  }

  componentDidUpdate() {
    localStorage.setItem('currentGame', JSON.stringify(this.state));
  }

  handlePickUpValue = index => {
    this.setState({ pickUpValue: this.state.floor.items[index] });
  };

  handlePickUp = item => {
    if (this.state.itemInHand) alert ('You can only hold one item');
    this.setState({ itemInHand: item });
  }

  handleDrop = () => {
    this.setState({ itemInHand: null });
  }

  handleFloorChange = floorNumber => {
    const floorData = { pizzaIngredients: [], pickUpValue: floors[floorNumber].items[0], floor: floors[floorNumber] };
    floorNumber !== 1 && delete floorData.pizzaIngredients;
    this.setState(floorData);
  }

  handleAddtoPizza = ingredient => {
    if (!this.state.itemInHand) return;
    const pizzaIngredients = this.state.pizzaIngredients;
    pizzaIngredients.push(ingredient);
    this.setState({ pizzaIngredients, itemInHand: null });
  }

  handleMakePizza = () => {
    
    const minuteDuration = parseInt(moment().format('mm'), 10) - this.state.timer.minutes;
    const secondDuration = parseInt(moment().format('ss'), 10) - this.state.timer.seconds;
    alert(`You won the game in ${minuteDuration} minutes and ${secondDuration} seconds`);
    localStorage.clear();
  }


  render() {

    const makePizzaButton = <button name="make-pizza" onClick={() => this.handleMakePizza()}>make pizza</button>;
    const { floor, floors } =this.state;
    return (
      <div className="App">
        <Floor floorScript ={floor.message}/>
        <section className="wrapper">
          <Select options={floors} className="dropDown one" name="elevator" 
            selectChange ={floorNumber => this.handleFloorChange(floorNumber)}/>
          { floor.key === '4th Floor' && makePizzaButton }
          <Controller pickUpVal={this.state.pickUpValue} pickUp={item => this.handlePickUp(item)} 
            addToPizza={item => this.handleAddtoPizza(item)} drop={()=> this.handleDrop()}/>
          <img id="pics"alt="Old Lady" src={this.state.floor.img}/>
          <label>Items in the Room</label>
          <Select options={floor.items} className="dropDown five" name="items-in-room" 
            selectChange={item =>  this.handlePickUpValue(item)}/>
        </section>
      </div>
    );
  }
}

class Floor extends Component {
  render(){
    const { floorScript } = this.props;
    return (
      <header className="App-header">
        <h1 className="flash">Shane is lounging at home</h1>
        <p className="msg">{floorScript}</p>
      </header>
    );
  }
}

class Select extends Component {
  render(){
    const { selectChange, options, className, name } = this.props;
    const Options = options.map((option, index) => {
      const optionElement = option.name === '4th Floor' ? 
        <option key={index} value={index} default>Home</option> :
        <option key ={index} value={index}>{option.name || option}</option>;
      return optionElement;
    });
    return(
      <select className={className} name={name} onChange={({ target }) => selectChange(target.value)}>
        { Options }
      </select>
    );
  }
}


class Controller extends Component {
  render(){
    const { addToPizza, pickUp, pickUpVal, drop, holding } =this.props;
    return(
      <div>
        <button className="pick-up two" value={pickUpVal} onClick={({ target }) => pickUp(target.value)}>Pick Up</button>
        <button className="drop three" onClick= {() => drop()}>Drop</button>
        <button className="pizza-add four" value={holding} onClick={({ target }) => addToPizza(target.value)}>Add to Pizza</button>
      </div>
    );
  }
}
export default App;
