const terrain = {
  forest: {
    type: 'forest',
    color: 'green',
    fightProbability: 0.2,
    passable: true
  },
  mountain: {
    type: 'mountain',
    color: 'gray',
    fightProbability: 1,
    passable: false
  },
  field: {
    type: 'field',
    color: 'lightgreen',
    fightProbability: 0.02,
    passable: true
  },
  river: {
    type: 'river',
    color: 'blue',
    fightProbability: 0,
    passable: false
  },
  bridge: {
    type: 'bridge',
    color: 'brown',
    fightProbability: 1,
    passable: true
  },
  chalice: {
    type: 'chalice',
    color: 'gold',
    fightProbability: 1,
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

  test: [
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