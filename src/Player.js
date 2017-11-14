import React, { Component } from 'react';
import tiles from'./models/tiles';

class Player extends Component {
  
  render() {
    const { player, pickItem, x, index, display } = this.props;
    return(
      <div>
        <div className="player" style={{ 
          border: 'solid', 
          marginTop: '60px',
          left: '10px',
          fontSize: '22px',
          padding: '10px',
          position: 'absolute',
          transform: `translateX(${x*20}px) `,
          transition: 'transform 1s',
        }}>
          <h3>Player Stats:</h3>
          <p>player energy:{player.energy}</p>
          <p>
            {player.inventory.map(i => {
              return <li key={i}>{i}</li>;
            })}
          </p>
          <p>position: {player.position}</p>
        </div>
        <div>
          <label>available items:</label>
          {player.position < 1 ? 'There is not any item' :
            tiles[index-1].items.map(i => {
              return <button 
                style={{ display: display ? 'inline' : 'none' }}
                onClick={pickItem} key={i} value={i}>{i}
              </button>;
            })
          }
        </div>
        
      </div>
    );
  }
}

export default Player;