import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';
import SearchInput from './SearchInput';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('SearchInput Component', () => {
  it('should render the input field', () => {
    render(<SearchInput />);
    const input = screen.getByTestId('search-input');
    expect(input).toBeInTheDocument();
  });

  it('should type into the input field', () => {
    render(<SearchInput />);
    const input = screen.getByTestId('search-input');
    fireEvent.change(input, { target: { value: 'Pikachu' } });
    expect(input).toHaveValue('Pikachu');
  });

  it('should call router.push with correct query parameter when form is submitted', () => {
    const push = jest.fn();
    useRouter.mockReturnValue({ push });

    render(<SearchInput />);
    const input = screen.getByTestId('search-input');
    const button = screen.getByTestId('search-button');

    fireEvent.change(input, { target: { value: 'Pikachu' } });
    fireEvent.click(button);

    expect(push).toHaveBeenCalledWith({
      pathname: '/',
      query: { name: 'Pikachu' },
    });
  });
});
