// /__mocks__/pokemonData.ts
export const bulbasaur = {
  data: {
    pokemon: {
      name: 'Bulbasaur',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      types: ['Grass', 'Poison'],
      attacks: {
        fast: [
          { name: 'Tackle', damage: 12 },
          { name: 'Vine Whip', damage: 15 },
        ],
        special: [
          { name: 'SolarBeam', damage: 50 },
          { name: 'Razor Leaf', damage: 35 },
        ],
      },
      evolutions: [
        { name: 'Ivysaur', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
      ],
    },
  },
};

export const charmander = {
  data: {
    pokemon: {
      name: 'Charmander',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
      types: ['Fire'],
      attacks: {
        fast: [
          { name: 'Scratch', damage: 10 },
          { name: 'Ember', damage: 14 },
        ],
        special: [
          { name: 'Flamethrower', damage: 50 },
          { name: 'Fire Spin', damage: 40 },
        ],
      },
      evolutions: [
        { name: 'Charmeleon', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' },
      ],
    },
  },
};

export const squirtle = {
  data: {
    pokemon: {
      name: 'Squirtle',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
      types: ['Water'],
      attacks: {
        fast: [
          { name: 'Tackle', damage: 10 },
          { name: 'Water Gun', damage: 15 },
        ],
        special: [
          { name: 'Hydro Pump', damage: 50 },
          { name: 'Bubble Beam', damage: 35 },
        ],
      },
      evolutions: [
        { name: 'Wartortle', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png' },
      ],
    },
  },
};
