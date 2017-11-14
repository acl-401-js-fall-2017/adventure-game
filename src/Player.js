import React, { Component } from 'react';
import tiles from'./models/tiles';

class Player extends Component {
  
  render() {
    const { player, pickItem } = this.props;
    
    console.log('player', player.position);
    return(
      <div>
        <div className="player">
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
            tiles[player.position-1].items.map(i => {
              return <button onClick={pickItem} key={i} value={i}>{i}</button>;
            })
          }
        </div>
        
      </div>
    );
  }
}

export default Player;