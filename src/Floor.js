import React, { Component } from 'react';
import GameInfo from './GameInfo';
import PropTypes from 'prop-types';


class Floor extends Component {
  render() {
    const { floorScript, holding, pizzaIngredients } = this.props;
    return (
      <div>
        <header className="App-header">
          <h1 className="flash">Shane is starving at home</h1>
          <p className="msg">{floorScript}</p>
          <GameInfo holding={holding} pizzaIngredients={pizzaIngredients} />
          <img className="pizza" alt="pizza" src="./images/pizza2.png" />
        </header>
      </div>
    );
  }
}
Floor.propTypes = {
  floorScript: PropTypes.string
};

export default Floor;