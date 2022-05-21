import AddClimbedBoulderForm from './AddClimbedBoulderForm';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

const climbedBoulder = {
  projected: false,
  attempts: 7,
  result: 'top',
  liked: true,
  level_feedback: 0,
};

describe('AddClimbedBoulderForm', () => {
  it('renders 2 checkboxes, 6 radio buttons, 1 number input field, 2 reset buttons and a submit button', () => {
    render(
      <MemoryRouter>
        <AddClimbedBoulderForm formPrefilledClimbedBoulder={climbedBoulder} />
      </MemoryRouter>
    );

    const checkboxesAll = screen.getAllByRole('checkbox');
    const radioButtonsAll = screen.getAllByRole('radio');
    const nameOfNumberInput = screen.getByLabelText(/Attempts/i);
    const allButtons = screen.getAllByRole('button');
    const submitButton = screen.getByRole('button', { name: /Save/i });

    expect(checkboxesAll).toHaveLength(2);
    expect(radioButtonsAll).toHaveLength(6);
    expect(nameOfNumberInput).toBeInTheDocument();
    expect(allButtons).toHaveLength(5);
    expect(submitButton).toBeInTheDocument();
  });

  it('submits form data with the prefilled values', () => {
    const handleAdd = jest.fn();
    render(
      <MemoryRouter>
        <AddClimbedBoulderForm
          formPrefilledClimbedBoulder={climbedBoulder}
          saveClimbedBoulderToDatabase={handleAdd}
        />
      </MemoryRouter>
    );
    const submitButton = screen.getByRole('button', { name: /Save/i });

    userEvent.click(submitButton);

    expect(handleAdd).toHaveBeenCalledTimes(1);
    expect(handleAdd).toHaveBeenCalledWith(false, 7, 'top', true, 0);
  });
});

const emptyClimbedBoulder = {};

describe('AddClimbedBoulderForm', () => {
  it('submits form data with an empty form', () => {
    const handleAdd = jest.fn();
    render(
      <MemoryRouter>
        <AddClimbedBoulderForm
          formPrefilledClimbedBoulder={emptyClimbedBoulder}
          saveClimbedBoulderToDatabase={handleAdd}
        />
      </MemoryRouter>
    );
    const submitButton = screen.getByRole('button', { name: /Save/i });

    userEvent.click(submitButton);

    expect(handleAdd).toHaveBeenCalledTimes(1);
  });
});
