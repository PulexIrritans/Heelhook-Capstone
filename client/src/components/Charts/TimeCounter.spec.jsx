import { render, screen } from '@testing-library/react';
import TimeCounter from './TimeCounter';

describe('TimeCounter', () => {
  it('renders text', () => {
    render(<TimeCounter />);

    const counterIntro = screen.getByText(/Last session was/i);
    const counterCount = screen.getByText(/a few seconds/i);

    expect(counterIntro).toBeInTheDocument();
    expect(counterCount).toBeInTheDocument();
  });
});
