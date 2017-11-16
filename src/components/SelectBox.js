import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SelectBox extends Component {
  render(){
    const { selectChange, options, className, name } = this.props;
    const Options = options.map((option, index) => {
      const optionElement = option.name === '3rd Floor' ? 
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
SelectBox.PropTypes = {
  selectChange: PropTypes.func,
  options: PropTypes.array,
  className: PropTypes.string,
  string: PropTypes.string
};

export default SelectBox;
  