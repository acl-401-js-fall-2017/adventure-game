import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GameInfo extends Component {
  render() {
    const { holding, pizzaIngredients } = this.props;
    return (
      <div>
        <label> </label>
        <p>Holding: {holding}</p>
        <p>Pizza: {pizzaIngredients.join()}</p>
      </div>
    );
  }
}
GameInfo.propTypes = {
  pizzaIngredients: PropTypes.array,
  holding: PropTypes.string
};


export default GameInfo;