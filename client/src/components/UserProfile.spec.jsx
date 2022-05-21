import UserProfile from './UserProfile';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('UserProfile', () => {
  it('renders three text input fields, two date input fields and a button', () => {
    render(<UserProfile />);

    const userNameInput = screen.getByLabelText(/User name/i);
    const firstNameInput = screen.getByLabelText(/First name/i);
    const lastNameInput = screen.getByLabelText(/Last name/i);
    const birthdayInput = screen.getByLabelText(/Birthday/i);
    const startedBouldering = screen.getByLabelText(/Started with climbing/i);
    const submitButton = screen.getByRole('button', { name: /Save/i });

    expect(userNameInput).toBeInTheDocument();
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(birthdayInput).toBeInTheDocument();
    expect(startedBouldering).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
