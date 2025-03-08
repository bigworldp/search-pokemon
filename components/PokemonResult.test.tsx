// /components/PokemonResult.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import { useQuery } from '@apollo/client';
import PokemonResult from './PokemonResult'; // Adjust the path based on your component location
import { bulbasaur, charmander, squirtle } from '../__mocks__/pokemonData'; // Adjust the path to your mock data


// Mocking Apollo Client's `useQuery` hook
jest.mock('@apollo/client', () => ({
  useQuery: jest.fn(),
}));

describe('PokemonResult Component - Pokémon Types', () => {
  it('should display correct type for Bulbasaur (Grass, Poison)', async () => {
    // Mock the query response for Bulbasaur
    useQuery.mockReturnValue({
      loading: false,
      error: null,
      data: bulbasaur,
    });

    render(<PokemonResult />);

    await waitFor(() => screen.getByText('Bulbasaur'));

    // Assert that the types for Bulbasaur are displayed correctly
    expect(screen.getByText('Types: Grass, Poison')).toBeInTheDocument();
  });

  it('should display correct type for Charmander (Fire)', async () => {
    // Mock the query response for Charmander
    useQuery.mockReturnValue({
      loading: false,
      error: null,
      data: charmander,
    });

    render(<PokemonResult />);

    await waitFor(() => screen.getByText('Charmander'));

    // Assert that the type for Charmander is displayed correctly
    expect(screen.getByText('Types: Fire')).toBeInTheDocument();
  });

  it('should display correct type for Squirtle (Water)', async () => {
    // Mock the query response for Squirtle
    useQuery.mockReturnValue({
      loading: false,
      error: null,
      data: squirtle,
    });

    render(<PokemonResult />);

    await waitFor(() => screen.getByText('Squirtle'));

    // Assert that the type for Squirtle is displayed correctly
    expect(screen.getByText('Types: Water')).toBeInTheDocument();
  });
});
