const wiFreezer = {
  key: 'wiFreezer',
  name: 'Walk-in Freezer',
  description: '',
  items: [],
  door: 'acCafe',
  encounter: {}
};

const acCafe = {
  key: 'acCafe',
  name: 'Air-conditioned cafe',
  description: '',
  items: [],
  door: 'picnicPark'
};

const picnicPark = {
  key: 'picnicPark',
  name: 'Picnic in the Park',
  description: '',
  items: [],
  door: 'ghana'
};

const ghana = {
  key: 'ghana',
  name: 'Ghana',
  description: '',
  items: [],
  door: 'hell'
};

const hell = {
  key: 'hell',
  name: 'Hell',
  description: '',
  items: [],
  encounter: {}
};

export const stages = [wiFreezer, acCafe, picnicPark, ghana, hell];

export default stages;