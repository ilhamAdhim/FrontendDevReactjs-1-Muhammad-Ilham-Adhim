import { render, screen } from '@testing-library/react';
import MainPage from './pages/MainPage';
import { MemoryRouter } from 'react-router-dom';

test('Render Main Page', () => {
  window.matchMedia = window.matchMedia || function () {
    return {
      matches: false,
      addListener: function () { },
      removeListener: function () { }
    };
  };
  render(<MainPage />, { wrapper: MemoryRouter });
  const linkElement = screen.getByText(/Restaurants/i);
  expect(linkElement).toBeInTheDocument();
});
