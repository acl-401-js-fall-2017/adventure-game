const wiFreezer = {
  key: 'wiFreezer',
  name: 'Walk-in Freezer',
  description: '',
  items: [],
  door: 'acCafe',
  encounter: {
    name: 'Jenkins',
    dialogue: [
      'Welcome to the Walk-in Freezer. My name is Jenkins, and I’m the caretaker here. Who are you?',
      'We are in a freezer, but I suppose its a good thing you have your parka, for now…',
      'To escape this nightmare you must descend through all four stages of heat, solving a puzzle on each floor, until you reach hell and defeat the devil.  It can get rather hot down there, and some have died. I would wish you luck, but as you said, ‘man’s not hot’.',
    ]
  }
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