import React, { Component } from 'react';

import gnomeImg from '../images/gnome.svg';
import ogreImg from '../images/ogre.png';
import './styles/Battle.css';

class Battle extends Component {
  constructor(props) {
    super();
    this.state = {
      gnomeStats: props.gnomeStats,
      ogreStats: null,
      terrain: props.terrain,
      ogreAttacking: false,
      gnomeAttacking: false
    };

    this.ogreWindUp = this.ogreWindUp.bind(this);
    this.ogreStrike = this.ogreStrike.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.attackRecoil = this.attackRecoil.bind(this);
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
    this.setState({ gnomeStats: damagedGnome, ogreAttacking: true });
    this.attackRecoil('ogre');
    this.checkHealth();
  }
  
  handleClick({ key }) {
    if(key === ' ') {
      const damagedOgre = Object.assign({}, this.state.ogreStats);
      damagedOgre.health -= this.damageInflicted(this.state.gnomeStats);
      
      this.setState({ ogreStats: damagedOgre, gnomeAttacking: true });
      this.attackRecoil('gnome');
      this.checkHealth();
    }
    else if(key.includes('Arrow')) this.tryToRun();
  }
  
  damageInflicted(combatant) {
    const { terrain } = this.state;
    const hitPower = Math.floor(combatant.strength * (1 + (Math.random() - Math.random()) * 0.5));
    return Math.random() < terrain.accuracy ? hitPower : 0;
  }

  attackRecoil(attacker) {
    setTimeout(() => {
      if(attacker === 'gnome') this.setState({ gnomeAttacking: false });
      else if(attacker === 'ogre') this.setState({ ogreAttacking: false });
    }, 100);
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
    if(terrain.type === 'chalice') {
      newOgre.strength += 10;
      newOgre.health += 10;
    }
    this.setState({ ogreStats: newOgre });
  }

  render() {
    const { terrain, ogreStats, gnomeStats, gnomeAttacking, ogreAttacking } = this.state;
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
        <div
          className='stats'
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '10%'

          }}
        >
          <article className='gnomeStats'>
            <div
              style={{
                float: 'left',
                height: '100%',
                width: gnomeStats.health + '%',
                backgroundColor: `hsl(${gnomeStats.health * 2.1}, 100%, 50%)`
              }}
            ></div>
          </article>
          <article className='ogreStats'>
            <div
              style={{
                float: 'right',
                height: '100%',
                width: (ogreStats.health * 3.33) + '%',
                backgroundColor: `hsl(${ogreStats.health * 3.33 * 2.1}, 100%, 50%)`
              }}
            ></div>
          </article>
        </div>
        <div 
          className='battleground'
        >
          <img 
            src={gnomeImg} 
            alt='player'
            style= {{
              width: `${ 20 + (gnomeAttacking ? 3 : 0) }%`,
              marginLeft: gnomeAttacking ? '1em' : '0' 
            }}
          />
          <img 
            src={ogreImg} 
            alt='enemy'
            style= {{
              width: `${ogreStats.strength - 4 + 20 + (ogreAttacking ? 3 : 0) }%`,
              maxWidth: '60%',
              marginRight: ogreAttacking ? '1em' : '0' 
            }}
          />
        </div>
        <div className='messageBox'>
          <h1>FIGHT!</h1>
          <h7>Attack (space) : Flee(arrow key)</h7>
        </div>
      </div>
    );
  }
}

export default Battle;