import React, { Component } from 'react';
import './styles/Grid.css';

class Grid extends Component {

  render() {
    const { gridArray } = this.props;
    const testArr = [];

    for(let i = 0; i < 100; i++) {
      testArr.push(
        <div
          key={i}
          style={{ 
            backgroundColor: `hsl(${i * 3.6}, 50%, 50%)`,
            gridColumnStart: 'auto',
            gridColumnEnd: 'span 1',
            gridRowStart: 'auto',
            gridRowEnd: 'span 1'
          }}
        ></div>
      );
    }
    
    return (
      <div 
        className="Grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
          gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'
        }}
      >
        {testArr}
      </div>
    );
  }
}

export default Grid;