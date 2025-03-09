import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';
import PokemonResult from '../components/PokemonResult';
import { bulbasaur, charmander, squirtle } from '../__mocks__/pokemonData';
import '@testing-library/jest-dom';

// Mock the useRouter hook from Next.js
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const mockedRouter = useRouter as jest.Mock;

describe('PokemonResult Component', () => {
  it('should display Bulbasaur data correctly', () => {
    render(<PokemonResult pokemon={bulbasaur} />);

    expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
    expect(screen.getByText('Types: Grass, Poison')).toBeInTheDocument();
    expect(screen.getByText('Tackle - 10 damage')).toBeInTheDocument();
    expect(screen.getByText('Vine Whip - 20 damage')).toBeInTheDocument();
    expect(screen.getByText('SolarBeam - 40 damage')).toBeInTheDocument();
    expect(screen.getByText('Ivysaur')).toBeInTheDocument();
  });

  it('should display Charmander data correctly', () => {
    render(<PokemonResult pokemon={charmander} />);

    expect(screen.getByText('Charmander')).toBeInTheDocument();
    expect(screen.getByText('Types: Fire')).toBeInTheDocument();
    expect(screen.getByText('Ember - 15 damage')).toBeInTheDocument();
    expect(screen.getByText('Scratch - 10 damage')).toBeInTheDocument();
    expect(screen.getByText('Flamethrower - 50 damage')).toBeInTheDocument();
    expect(screen.getByText('Charmeleon')).toBeInTheDocument();
  });

  it('should display Squirtle data correctly', () => {
    render(<PokemonResult pokemon={squirtle} />);

    expect(screen.getByText('Squirtle')).toBeInTheDocument();
    expect(screen.getByText('Types: Water')).toBeInTheDocument();
    expect(screen.getByText('Water Gun - 15 damage')).toBeInTheDocument();
    expect(screen.getByText('Tackle - 10 damage')).toBeInTheDocument();
    expect(screen.getByText('Bubble - 20 damage')).toBeInTheDocument();
    expect(screen.getByText('Wartortle')).toBeInTheDocument();
  });

  it('should handle evolution click and redirect to the correct route', () => {
    mockedRouter.mockImplementation(() => ({
      push: jest.fn(),
    }));

    render(<PokemonResult pokemon={bulbasaur} />);

    const evolutionButton = screen.getByText('Ivysaur');
    fireEvent.click(evolutionButton);

    expect(mockedRouter().push).toHaveBeenCalledWith({
      pathname: '/',
      query: { name: 'Ivysaur' },
    });
  });

  it('should show no Pokémon found message when no pokemon is passed', () => {
    render(<PokemonResult pokemon={null} />);

    expect(screen.getByText('No Pokémon found. Please try again!')).toBeInTheDocument();
  });
});
