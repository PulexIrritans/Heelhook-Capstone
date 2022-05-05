import AddClimbedBoulderForm from './AddClimbedBoulderForm';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

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
      <AddClimbedBoulderForm formPrefilledClimbedBoulder={climbedBoulder} />
    );

    const checkboxesAll = screen.getAllByRole('checkbox');
    const radioButtonsAll = screen.getAllByRole('radio');
    const nameOfNumberInput = screen.getByLabelText(/Attempts/i);
    const resetButtons = screen.getAllByRole('button', { name: /x/i });
    const submitButton = screen.getByRole('button', { name: /Save/i });

    expect(checkboxesAll).toHaveLength(2);
    expect(radioButtonsAll).toHaveLength(6);
    expect(nameOfNumberInput).toBeInTheDocument();
    expect(resetButtons).toHaveLength(2);
    expect(submitButton).toBeInTheDocument();
  });

  it('submits form data if none of the input fields is filled out', () => {
    const handleAdd = jest.fn();
    render(
      <AddClimbedBoulderForm
        formPrefilledClimbedBoulder={climbedBoulder}
        saveClimbedBoulderToDatabase={handleAdd}
      />
    );
    const submitButton = screen.getByRole('button', { name: /Save/i });

    userEvent.click(submitButton);

    expect(handleAdd).toHaveBeenCalledTimes(1);
  });
});
