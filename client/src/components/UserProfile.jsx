import TextInput from './TextInput';
import styled from 'styled-components';
import { useState } from 'react';
import profilePic from '../images/ProfilePic.jpg';
import Button from './Button';
import DateInput from './DateInput';

const UserProfile = () => {
  const [userName, setUserName] = useState('');

  return (
    <>
      <ProfileFormWrapper>
        <Picture src={profilePic} alt="ProfilePic" />
        <ProfileForm onSubmit={event => event.preventDefault()}>
          <TextInput
            title={'User name*'}
            required
            minLength={8}
            maxLength={20}
            placeholder={'BoulderQueen'}
            disabled={false}
          />
          <TextInput
            title={'First name*'}
            required
            minLength={2}
            maxLength={40}
            placeholder={'Jane'}
            disabled={false}
          />
          <TextInput
            title={'Last name*'}
            required
            minLength={2}
            maxLength={40}
            placeholder={'Doe'}
            disabled={false}
          />
          <DateWrapper>
            <DateInput
              title={'Birthday'}
              text_content={'Birthday'}
              required={false}
              disabled={false}
            />
            {/* <NumberInput /> */}
            <DateInput
              title={'Climb_Career_Start'}
              text_content={'Started with climbing'}
              required={false}
              disabled={false}
            />
          </DateWrapper>
          <p>*required fields</p>
          <Button type="submit" title="Save" myFunction={() => {}} />
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
