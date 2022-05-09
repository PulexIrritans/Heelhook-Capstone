import { render, screen } from '@testing-library/react';
import DayCounter from './DayCounter';

describe('DayCounter', () => {
  it('renders text', () => {
    render(<DayCounter />);

    const counterIntro = screen.getByText(/Last session was/i);
    const counterCount = screen.getByText(/a few seconds/i);

    expect(counterIntro).toBeInTheDocument();
    expect(counterCount).toBeInTheDocument();
  });
});
