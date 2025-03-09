export const bulbasaur = {
  id: '1',
  name: 'Bulbasaur',
  image: 'bulbasaur-image-url',
  types: ['Grass', 'Poison'],
  attacks: {
    fast: [
      { name: 'Tackle', damage: 10 },
      { name: 'Vine Whip', damage: 20 },
    ],
    special: [
      { name: 'SolarBeam', damage: 40 },
    ],
  },
  evolutions: [
    { id: '2', name: 'Ivysaur', image: 'ivysaur-image-url' },
  ],
};

export const charmander = {
  id: '4',
  name: 'Charmander',
  image: 'charmander-image-url',
  types: ['Fire'],
  attacks: {
    fast: [
      { name: 'Ember', damage: 15 },
      { name: 'Scratch', damage: 10 },
    ],
    special: [
      { name: 'Flamethrower', damage: 50 },
    ],
  },
  evolutions: [
    { id: '5', name: 'Charmeleon', image: 'charmeleon-image-url' },
  ],
};

export const squirtle = {
  id: '7',
  name: 'Squirtle',
  image: 'squirtle-image-url',
  types: ['Water'],
  attacks: {
    fast: [
      { name: 'Water Gun', damage: 15 },
      { name: 'Tackle', damage: 10 },
    ],
    special: [
      { name: 'Bubble', damage: 20 },
    ],
  },
  evolutions: [
    { id: '8', name: 'Wartortle', image: 'wartortle-image-url' },
  ],
};
