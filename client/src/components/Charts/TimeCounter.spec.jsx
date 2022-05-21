import { render, screen } from '@testing-library/react';
import TimeCounter from './TimeCounter';

describe('TimeCounter', () => {
  it('renders text', () => {
    render(<TimeCounter />);

    const counterCount = screen.getByText(/a few seconds/i);

    expect(counterCount).toBeInTheDocument();
  });
});
