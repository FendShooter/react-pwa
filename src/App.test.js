import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});



test('render 3 list', () => {
  render(<App />);
  const linkElement = screen.getAllByRole('listitem');
  expect(linkElement).toHaveLength(3);
});

test('read h1 text', () => {
  render(<App />);
  const linkElement = screen.getByTestId('mytitle');
  expect(linkElement.innerHTML).toBe('hello world');
});