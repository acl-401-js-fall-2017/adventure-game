import React, { Component } from 'react';
import './styles/Battle.css';
import PropTypes from 'prop-types';

class Battle extends Component {
  constructor(props) {
    super();
    this.state = {
      gnomeStats: props.gnomeStats,
      ogreStats: null,
      terrain: props.terrain
    };

    this.ogreWindUp = this.ogreWindUp.bind(this);
    this.ogreStrike = this.ogreStrike.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.exitBattle = props.exitBattle;
    this.t = null;
  }
  
  checkHealth() {
    const { 
      ogreStats: { health: ogreHealth },
      gnomeStats,
      terrain
    } = this.state;

    if(ogreHealth <= 0 && terrain.type === 'chalice') {
      this.t = null;
      this.exitBattle(gnomeStats, true);
    }
    else if(ogreHealth <= 0 || gnomeStats.health <= 0) {
      this.t = null;
      this.exitBattle(gnomeStats);
    }
  }
  
  ogreWindUp() {
    const timer = Math.floor(Math.random() * 3000);

    if(!this.t) this.t = setTimeout(this.ogreStrike, timer);
  }

  ogreStrike() {
    const damagedGnome = Object.assign({}, this.state.gnomeStats);
    damagedGnome.health -= this.damageInflicted(this.state.ogreStats);
    
    clearTimeout(this.t);
    this.t = null;
    this.setState({ gnomeStats: damagedGnome });
    this.checkHealth();
  }
  
  handleClick({ key }) {
    if(key === ' ') {
      const damagedOgre = Object.assign({}, this.state.ogreStats);
      damagedOgre.health -= this.damageInflicted(this.state.gnomeStats);
      
      this.setState({ ogreStats: damagedOgre });
      this.checkHealth();
    }
    else if(key.includes('Arrow')) this.tryToRun();
  }
  
  damageInflicted(combatant) {
    const { terrain } = this.state;
    const hitPower = Math.floor(combatant.strength * (1 + (Math.random() - Math.random()) * 0.5));
    return Math.random() < terrain.accuracy ? hitPower : 0;
  }

  tryToRun() {
    const { gnomeStats, ogreStats } = this.state;
    if(gnomeStats.speed > ogreStats.speed) this.exitBattle(gnomeStats);
    else {
      const angryOgre = Object.assign({}, ogreStats);
      angryOgre.strength += Math.floor(Math.random() * 3);
      this.setState({ ogreStats: angryOgre });
    }
  }

  componentWillMount() {
    const { terrain } = this.state;
    const newOgre = {
      health: 20 + Math.floor((Math.random() - Math.random()) * 10),
      strength: 4  + Math.floor((Math.random() - Math.random()) * 3),
      speed: 12 + (Math.random() - Math.random()) * 5
    };
    if(terrain.type === 'chalice') newOgre.strength += 3;
    this.setState({ ogreStats: newOgre });
  }

  render() {
    const { terrain, ogreStats, gnomeStats } = this.state;
    this.ogreWindUp();

    return (
      <div
        className="Battle"
        style={{
          backgroundColor: terrain.color
        }}
        onKeyDown={(click) => this.handleClick(click)}
        tabIndex="0"
        ref={(input) => {
          if (input != null) {
            input.focus();
          }
        }}
      >
      gnome health: {gnomeStats.health}
      ogre health: {ogreStats.health}
      </div>
    );
  }
}
Battle.propTypes = {
  gnomeStats: PropTypes.object,
  terrain: PropTypes.object
};

export default Battle;