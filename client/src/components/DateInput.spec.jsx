import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DateInput from './DateInput';

describe('DateInput', () => {
  it('renders an input', () => {
    const myFunction = jest.fn();
    render(
      <DateInput
        title="Birthday"
        text_content="Birthday"
        required={false}
        min=""
        max=""
        disabled={false}
        value="2000-05-06"
        myFunction={myFunction}
      />
    );

    const title = screen.getByLabelText(/Birthday/i);

    expect(title).toBeInTheDocument();
  });
});
