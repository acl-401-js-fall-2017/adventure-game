const terrain = {
  forest: {
    type: 'forest',
    color: 'green',
    fightProbability: 0.2,
    accuracy: 0.7,
    passable: true
  },
  mountain: {
    type: 'mountain',
    color: 'gray',
    fightProbability: 1,
    accuracy: 0.4,
    passable: false
  },
  field: {
    type: 'field',
    color: 'lightgreen',
    fightProbability: 0.02,
    accuracy: 0.98,
    passable: true
  },
  river: {
    type: 'river',
    color: 'blue',
    fightProbability: 0,
    accuracy: 0.02,
    passable: false
  },
  bridge: {
    type: 'bridge',
    color: 'brown',
    fightProbability: 1,
    accuracy: 0.90,
    passable: true
  },
  chalice: {
    type: 'chalice',
    color: 'lightgreen',
    fightProbability: 1,
    accuracy: 0.60,
    passable: true
  }
};

const l = { 
  t: terrain.forest, 
  g: terrain.field,
  m: terrain.mountain,
  r: terrain.river,
  b: terrain.bridge,
  c: terrain.chalice
};

const cartes = {
  terrain: terrain,

  firstQuest: [
    [ l.c, l.g, l.g, l.g, l.g, l.g, l.m, l.m, l.m, l.g],
    // --------------------------------------------------
    [ l.g, l.t, l.t, l.t, l.g, l.g, l.m, l.m, l.g, l.g],
    // --------------------------------------------------
    [ l.g, l.g, l.t, l.t, l.t, l.t, l.t, l.g, l.r, l.r],
    // --------------------------------------------------
    [ l.g, l.g, l.g, l.t, l.t, l.t, l.r, l.r, l.r, l.g],
    // --------------------------------------------------
    [ l.g, l.g, l.t, l.t, l.g, l.t, l.b, l.g, l.t, l.t],
    // --------------------------------------------------
    [ l.g, l.t, l.t, l.g, l.t, l.t, l.r, l.t, l.t, l.t],
    // --------------------------------------------------
    [ l.r, l.r, l.r, l.r, l.r, l.g, l.r, l.t, l.g, l.g],
    // --------------------------------------------------
    [ l.g, l.g, l.m, l.g, l.r, l.r, l.r, l.g, l.g, l.g],
    // --------------------------------------------------
    [ l.g, l.m, l.m, l.g, l.g, l.g, l.g, l.g, l.g, l.g],
    // --------------------------------------------------
    [ l.g, l.m, l.g, l.g, l.g, l.g, l.g, l.g, l.g, l.g],
  ],

  newthang: [
    [ l.g, l.g, l.g, l.g, l.g, l.g, l.g, l.g, l.g, l.g],
    // --------------------------------------------------
    [ l.g, l.t, l.t, l.t, l.g, l.g, l.g, l.g, l.g, l.g],
    // --------------------------------------------------
    [ l.g, l.g, l.t, l.t, l.t, l.t, l.t, l.g, l.g, l.g],
    // --------------------------------------------------
    [ l.g, l.g, l.g, l.t, l.t, l.t, l.g, l.g, l.g, l.g],
    // --------------------------------------------------
    [ l.g, l.g, l.t, l.t, l.g, l.t, l.g, l.g, l.g, l.g],
    // --------------------------------------------------
    [ l.g, l.t, l.t, l.g, l.t, l.t, l.g, l.g, l.g, l.g],
    // --------------------------------------------------
    [ l.g, l.g, l.g, l.g, l.g, l.g, l.g, l.g, l.t, l.g],
    // --------------------------------------------------
    [ l.g, l.g, l.g, l.g, l.g, l.g, l.g, l.t, l.g, l.g],
    // --------------------------------------------------
    [ l.g, l.g, l.g, l.g, l.g, l.g, l.t, l.t, l.g, l.g],
    // --------------------------------------------------
    [ l.g, l.g, l.g, l.g, l.g, l.g, l.t, l.g, l.g, l.g],
  ],
};

export default cartes;