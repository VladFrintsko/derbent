import { render, screen } from '@testing-library/react';
import App from './App';

test('renders modular hero text', () => {
  render(<App />);
  const linkElement = screen.getByText(/modular react starter/i);
  expect(linkElement).toBeInTheDocument();
});
