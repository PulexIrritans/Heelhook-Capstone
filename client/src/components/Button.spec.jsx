import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button', () => {
  it('renders a button with a button label', () => {
    const myFunction = jest.fn();
    render(<Button title="Save" type="Submit" myFunction={myFunction} />);

    const title = screen.getByText(/Save/i);
    const button = screen.getByRole('button');

    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    userEvent.click(button);

    expect(myFunction).toHaveBeenCalledTimes(1);
  });
});
