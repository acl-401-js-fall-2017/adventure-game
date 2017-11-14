import React, { Component } from 'react';

export default class Stage extends Component {
  constructor () {
    super();
    this.state = {
      textOutput: '',
    };
  }
  
  componentWillReceiveProps(nextProps) {
    if(nextProps.stage === this.props.stage) return;
    const { stage } = nextProps;
    if(stage.riddle) {
      const result = stage.riddle(this.props.player);
      if(result) {
        this.props.onPickup(result.item);
        this.setState({ message: result.message });
        stage.riddle = false;
      }
    }
  }

  render() {
    const { stage, player, onExit, onOutput, onPickup } = this.props;
    const { textOutput } = this.state;
    return (
      <div>
        <h2>{stage.name}</h2>
        <button className="door"
          disabled={() => handleDoor()}
          onClick={() => onExit(stage)}
        >
          {stage.door.name}
        </button>
        <div className="Stage-view">
          <div>
            <p>{textOutput}</p>
            <p>
              Items: { stage.items.map((item, i) => 
                <button key={i} disabled={!item.available}
                  onClick={() => onPickup(item)}>
                  {item.name}
                </button>
              )}
            </p> 
          </div>
        </div>
      </div>
    );
  }
}