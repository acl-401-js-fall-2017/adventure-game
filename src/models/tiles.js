
const tiles = [
    
  {
    energy: 4,
    monster: null,
    message: 'You are on tile one. You can pick any items you find. Do not be greedy, can not have more than two items in your bag',
    items: ['screw driver','soda pop'],
    bonus: 0
  },
      
  {
    monster: null,
    message: 'You are on tile two. Are you willing to take Risk?',
    items: ['scarf','candy'],
    bonus: -1
  },
      
  {
      
    energy: 4,
    monster: null,
    message: 'You are on tile three. Are you willing to take Risk?',
    items: ['mirror','lighter'],
    bonus:3
  },
      
  {
    energy: 4,
    monster: null,
    message: 'You are on tile four. Keep moving.',
    items: ['pan','spoon'],
    bonus:0
  },
      
  {
    energy: 4,
    monster: null,
    message: 'You are on tile five. Are you willing to take Risk?',
    items: ['swiss army knife','rake'],
    bonus:2
  },
      
  {
    energy: 4,
    monster: null,
    message: 'Almost there. Keep moving.',
    items: ['beer','baton'],
    bonus: 0
  },
      
  {
    energy: 4,
    monster: null,
    message: 'You Won',
    items: ['pillow','hat'],
    bonus: -4
  }
];


export default tiles;