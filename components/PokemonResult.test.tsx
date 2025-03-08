import { render, screen, waitFor } from '@testing-library/react';
import { useQuery } from '@apollo/client';
import PokemonResult from './PokemonResult'; 
import { bulbasaur, charmander, squirtle } from '../__mocks__/pokemonData';


jest.mock('@apollo/client', () => ({
  useQuery: jest.fn(),
}));

describe('PokemonResult Component - Pokémon Types', () => {
  it('should display correct type for Bulbasaur (Grass, Poison)', async () => {
    useQuery.mockReturnValue({
      loading: false,
      error: null,
      data: bulbasaur,
    });

    render(<PokemonResult />);

    await waitFor(() => screen.getByText('Bulbasaur'));

    expect(screen.getByText('Types: Grass, Poison')).toBeInTheDocument();
  });

  it('should display correct type for Charmander (Fire)', async () => {
    useQuery.mockReturnValue({
      loading: false,
      error: null,
      data: charmander,
    });

    render(<PokemonResult />);

    await waitFor(() => screen.getByText('Charmander'));

    expect(screen.getByText('Types: Fire')).toBeInTheDocument();
  });

  it('should display correct type for Squirtle (Water)', async () => {
    useQuery.mockReturnValue({
      loading: false,
      error: null,
      data: squirtle,
    });

    render(<PokemonResult />);

    await waitFor(() => screen.getByText('Squirtle'));
    expect(screen.getByText('Types: Water')).toBeInTheDocument();
  });
});
