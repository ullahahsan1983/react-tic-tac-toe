import { render, screen } from '@testing-library/react';
import Match from './Match';

test('renders game board', () => {
  render(<Match />);
  const targetElement = screen.getByRole(/match/i);
  expect(targetElement).toBeInTheDocument();
});
