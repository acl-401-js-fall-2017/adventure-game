const terrain = {
  forest: {
    type: 'forest',
    color: 'green',
    fightProbability: 0.2
  },
  field: {
    type: 'field',
    color: 'lightgreen',
    fightProbability: 0.02
  }
};

const l = { t: terrain.forest, g: terrain.field };

const cartes = {
  terrain: terrain,

  test: [
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
    [ l.g, l.g, l.g, l.g, l.g, l.g, l.g, l.g, l.g, l.g],
    // --------------------------------------------------
    [ l.g, l.g, l.g, l.g, l.g, l.g, l.g, l.g, l.g, l.g],
    // --------------------------------------------------
    [ l.g, l.g, l.g, l.g, l.g, l.g, l.g, l.g, l.g, l.g],
    // --------------------------------------------------
    [ l.g, l.g, l.g, l.g, l.g, l.g, l.g, l.g, l.g, l.g],
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