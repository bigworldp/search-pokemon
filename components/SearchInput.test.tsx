// import { render, screen, fireEvent } from '@testing-library/react';
// import { useRouter } from 'next/router';
// import SearchInput from './SearchInput';

// jest.mock('next/router', () => ({
//   useRouter: jest.fn(),
// }));

// describe('SearchInput Component', () => {
//   it('should render the input field', () => {
//     render(<SearchInput />);
//     const input = screen.getByTestId('search-input');
//     expect(input).toBeInTheDocument();
//   });

//   it('should type into the input field', () => {
//     render(<SearchInput />);
//     const input = screen.getByTestId('search-input');
//     fireEvent.change(input, { target: { value: 'Pikachu' } });
//     expect(input).toHaveValue('Pikachu');
//   });

//   it('should call router.push with correct query parameter when form is submitted', () => {
//     const push = jest.fn();
//     useRouter.mockReturnValue({ push });

//     render(<SearchInput />);
//     const input = screen.getByTestId('search-input');
//     const button = screen.getByTestId('search-button');

//     fireEvent.change(input, { target: { value: 'Pikachu' } });
//     fireEvent.click(button);

//     expect(push).toHaveBeenCalledWith({
//       pathname: '/',
//       query: { name: 'Pikachu' },
//     });
//   });
// });

// /components/SearchInput.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import SearchInput from './SearchInput';
import { bulbasaur, charmander, squirtle } from '../__mocks__/pokemonData';
import { GET_POKEMON } from '../graphql/queries';

// Mocking Apollo Client's `useQuery` hook
jest.mock('@apollo/client', () => ({
  useQuery: jest.fn(),
}));

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('SearchInput Component with mocked Pokémon data', () => {
  it('should display Bulbasaur details when searched', async () => {
    const push = jest.fn();
    useRouter.mockReturnValue({ push });

    // Mocking the query response for Bulbasaur
    useQuery.mockReturnValue({
      loading: false,
      error: null,
      data: bulbasaur,
    });

    render(<SearchInput />);

    const input = screen.getByTestId('search-input');
    fireEvent.change(input, { target: { value: 'Bulbasaur' } });
    const button = screen.getByTestId('search-button');
    fireEvent.click(button);

    // Waiting for the Pokémon details to render
    await waitFor(() => screen.getByText('Bulbasaur'));

    expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
    expect(screen.getByText('Types: Grass, Poison')).toBeInTheDocument();
    expect(screen.getByText('Fast Attacks: Tackle, Vine Whip')).toBeInTheDocument();
    expect(screen.getByText('Special Attacks: SolarBeam, Razor Leaf')).toBeInTheDocument();
    expect(screen.getByText('Evolves to: Ivysaur')).toBeInTheDocument();
  });

  it('should display Charmander details when searched', async () => {
    const push = jest.fn();
    useRouter.mockReturnValue({ push });

    // Mocking the query response for Charmander
    useQuery.mockReturnValue({
      loading: false,
      error: null,
      data: charmander,
    });

    render(<SearchInput />);

    const input = screen.getByTestId('search-input');
    fireEvent.change(input, { target: { value: 'Charmander' } });
    const button = screen.getByTestId('search-button');
    fireEvent.click(button);

    // Waiting for the Pokémon details to render
    await waitFor(() => screen.getByText('Charmander'));

    expect(screen.getByText('Charmander')).toBeInTheDocument();
    expect(screen.getByText('Types: Fire')).toBeInTheDocument();
    expect(screen.getByText('Fast Attacks: Scratch, Ember')).toBeInTheDocument();
    expect(screen.getByText('Special Attacks: Flamethrower, Fire Spin')).toBeInTheDocument();
    expect(screen.getByText('Evolves to: Charmeleon')).toBeInTheDocument();
  });

  it('should display Squirtle details when searched', async () => {
    const push = jest.fn();
    useRouter.mockReturnValue({ push });

    // Mocking the query response for Squirtle
    useQuery.mockReturnValue({
      loading: false,
      error: null,
      data: squirtle,
    });

    render(<SearchInput />);

    const input = screen.getByTestId('search-input');
    fireEvent.change(input, { target: { value: 'Squirtle' } });
    const button = screen.getByTestId('search-button');
    fireEvent.click(button);

    // Waiting for the Pokémon details to render
    await waitFor(() => screen.getByText('Squirtle'));

    expect(screen.getByText('Squirtle')).toBeInTheDocument();
    expect(screen.getByText('Types: Water')).toBeInTheDocument();
    expect(screen.getByText('Fast Attacks: Tackle, Water Gun')).toBeInTheDocument();
    expect(screen.getByText('Special Attacks: Hydro Pump, Bubble Beam')).toBeInTheDocument();
    expect(screen.getByText('Evolves to: Wartortle')).toBeInTheDocument();
  });
});
