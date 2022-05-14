import TextInput from './TextInput';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import profilePic from '../images/ProfilePic.jpg';
import Button from './Button';
import DateInput from './DateInput';
import dayjs from 'dayjs';
const URL = process.env.REACT_APP_URL;
const USER_ID = 9999;

const UserProfile = () => {
  const [climber, setClimber] = useState({
    climber_id: USER_ID,
    user_name: '',
    first_name: '',
    last_name: '',
    birthday: '',
    boulder_start_date: '',
  });

  const [errorSave, setErrorSave] = useState(false);
  const [errorGet, setErrorGet] = useState(false);
  const [success, setSuccess] = useState(false);

  const fetchClimber = () => {
    fetch(`${URL}/climber/${USER_ID}`)
      .then(res => res.json())
      .then(data => {
        data.birthday = dayjs(data.birthday).format('YYYY-MM-DD');
        data.boulder_start_date = dayjs(data.boulder_start_date).format(
          'YYYY-MM-DD'
        );
        setClimber(data);
      })
      .catch(error => {
        setErrorGet(true);
      });
  };

  useEffect(() => {
    fetchClimber();
    setSuccess(false);
    setErrorGet(false);
    setErrorSave(false);
  }, []);

  const saveClimberToDatabase = () => {
    fetch(`${URL}/climber/${USER_ID}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(climber),
    })
      .then(response => response.json())
      .then(data => {
        setClimber(data);
        setSuccess(true);
      })
      .catch(error => {
        setErrorSave(true);
      });
  };

  return (
    <>
      <ProfileFormWrapper>
        <Picture src={profilePic} alt="ProfilePic" />
        <ProfileForm
          onSubmit={event => {
            event.preventDefault();
            saveClimberToDatabase();
          }}
        >
          <TextInput
            title={'User name*'}
            required
            minLength={8}
            maxLength={20}
            placeholder={'BoulderQueen'}
            disabled={false}
            value={climber.user_name}
            myFunction={event => {
              const newClimber = { ...climber };
              newClimber.user_name = event.target.value;
              setClimber(newClimber);
            }}
          />
          <TextInput
            title={'First name*'}
            required
            minLength={2}
            maxLength={40}
            placeholder={'Jane'}
            disabled={false}
            value={climber.first_name}
            myFunction={event => {
              const newClimber = { ...climber };
              newClimber.first_name = event.target.value;
              setClimber(newClimber);
            }}
          />
          <TextInput
            title={'Last name*'}
            required
            minLength={2}
            maxLength={40}
            placeholder={'Doe'}
            disabled={false}
            value={climber.last_name}
            myFunction={event => {
              const newClimber = { ...climber };
              newClimber.last_name = event.target.value;
              setClimber(newClimber);
            }}
          />
          <DateWrapper>
            <DateInput
              title={'Birthday'}
              text_content={'Birthday'}
              required={false}
              disabled={false}
              value={climber.birthday}
              myFunction={event => {
                const newClimber = { ...climber };
                newClimber.birthday = event.target.value;
                setClimber(newClimber);
              }}
            />
            <DateInput
              title={'Climb_Career_Start'}
              text_content={'Started with climbing'}
              required={false}
              disabled={false}
              value={climber.boulder_start_date}
              myFunction={event => {
                const newClimber = { ...climber };
                newClimber.boulder_start_date = event.target.value;
                setClimber(newClimber);
              }}
            />
          </DateWrapper>
          <p>*required fields</p>
          <Button type="submit" title="Save" myFunction={() => {}} />
          {success && <p>Your profile was saved successfully.</p>}
          {errorGet && <p>Sorry, could not load user profile.</p>}
          {errorSave && <p>Sorry, could not save user profile.</p>}
        </ProfileForm>
      </ProfileFormWrapper>
    </>
  );
};

export default UserProfile;

const ProfileFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 1rem 0.5rem;
  margin-top: 1rem;
  background-color: var(--color-light-gray);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  &:hover {
    background-color: var(--color-medium-gray);
  }
`;

const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Picture = styled.img`
  width: 100px;
  border-radius: 50%;
  align-self: flex-end;
`;

const DateWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  margin-bottom: 1rem;
`;
