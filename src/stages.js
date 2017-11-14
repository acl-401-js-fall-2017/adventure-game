const freezer = {
  name: 'Walk-in Freezer',
  door: {
    name: 'Air-conditioned cafe',
    available: false
  },
  intro: {
    text: 'Suddenly conscious and taking in your surroundings, a frosty haze permeates your view of a large, dim walk-in freezer. You notice a bright light at the far side of the freezer, but first a sign catches your eye.',
    read: false
  },
  items: [
    {
      name: 'key',
      available: false
    },
    {
      name: 'joints',
      available: false
    }
  ],
  riddle: {
    name: 'sign',
    question: 'You’re running a race and pass the person in 2nd place. What place are you in now?',
    answer: [
      '2',
      '2nd',
      'second'
    ],
    solved: false
  },
  encounter: {
    name: 'Jenkins',
    dialog: {
      playerDialog: [
        'Welcome to the Walk-in Freezer. My name is Jenkins, and I’m the caretaker here. Who are you?',
        'We are in a freezer, but I suppose it’s a good thing you have your parka, for now…',
        'To escape this nightmare you must descend through all four stages of heat, solving a puzzle on each floor, until you reach the blazing depths of hell and defeat the devil.  I would wish you luck,but as you said, ‘man’s not hot’.',
      ],
      encounterDialog: [
        'Skrrat, skidi-kat-kat. The name’s Big Shaq and man’s not hot.',
        'Hold up let me light this tree right quick. puff puff puff. How do I get out of here anyway?',
        'Whatever donut, your nose  long like a garden hose anyway.'
      ]
    }
  }
};

const cafe = {
  name: 'Air-conditioned cafe',
  door: 'Picnic in the Park',
  key: 'cafe',
  intro: '',
  items: [],
};

const picnic = {
  name: 'Picnic in the Park',
  door: 'Ghana',
  key: 'picnic',
  intro: '',
  items: [],
};

const ghana = {
  name: 'Ghana',
  door: 'Hell',
  key: 'ghana',
  intro: '',
  items: [],
};

const hell = {
  name: 'Hell',
  key: 'hell',
  items: [],
  intro: '',
  encounter: {}
};

export const stages = [freezer, cafe, picnic, ghana, hell];

export default stages;