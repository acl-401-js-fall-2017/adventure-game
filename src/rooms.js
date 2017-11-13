
const shop = {
  room: 'shop',
  description: 'Wonka Candy Shop',
  items: 'golden-ticket',
  nextRoom: 'gate'
};

const gate = {
  room: 'gate',
  description: 'Wonka factory gate',
  items: '',
  nextRoom: 'chocolate'
};

const chocolate = {
  room: 'chocolate',
  description: 'chocolate river',
  items: '',
  nextRoom: 'testing'
};

const testing = {
  room: 'testing',
  description: 'testing room',
  items: 'everlasting gobstopper',
  nextRoom: 'staff'
};

const staff = {
  room: 'staff',
  description: 'Wonka Office',
  items: 'keys to Wonka factory',
  nextRoom: 'shop'
};

const deathLetter = {
  room: 'death',
  description: 'You have died',
  nextRoom: 'shop'
};

const rooms = [shop, gate, chocolate, testing, staff, deathLetter];



export default rooms;