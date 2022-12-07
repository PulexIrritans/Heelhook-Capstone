import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TextInput from './TextInput';
import Error from './Error';
import Button from './Button';
import styled from 'styled-components';
const URL = process.env.REACT_APP_URL;

const AddBoulder = () => {
  const [error, setError] = useState(false);
  const [newBoulder, setNewBoulder] = useState({});
  const [addedBoulder, setAddedBoulder] = useState({});

  const navigate = useNavigate();

  const saveNewBoulderToDatabase = () => {
    const newDBBoulder = {
      ...newBoulder,
      hold_color: newBoulder.hold_color.toLowerCase(),
      tags: newBoulder.tags
        ? newBoulder.tags.split(/[\s,;]+/).map(tag => tag.trim())
        : [],
      start_date: new Date(),
    };

    fetch(`${URL}/add_boulder/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newDBBoulder),
    })
      .then(response => response.json())
      .then(data => {
        setAddedBoulder(data);
      })
      .catch(error => {
        setError('Sorry, could not save boulder.');
      });
  };

  useEffect(() => {
    addedBoulder._id && navigate(`/add/${addedBoulder._id}`);
  }, [addedBoulder]);

  return (
    <AddBoulderFormWrapper>
      <FormHeader id="form-heading">
        Couldn't find the boulder you want to climb?
      </FormHeader>
      <p id="form-description">Add a new boulder yourself!</p>
      {error && <Error content={error} />}
      <NewBoulderForm
        aria-labelledby="form-heading"
        aria-describedby="form-description"
        onSubmit={event => {
          event.preventDefault();
          saveNewBoulderToDatabase();
        }}
      >
        <TextInput
          title={'Boulder name*'}
          required
          min={2}
          max={30}
          disabled={false}
          value={newBoulder.name}
          myFunction={event => {
            const newInputBoulder = { ...newBoulder };
            newInputBoulder.name = event.target.value;
            setNewBoulder(newInputBoulder);
          }}
        />
        <TextInput
          title={'Level*'}
          required
          minLength={1}
          maxLength={3}
          disabled={false}
          value={newBoulder.level}
          myFunction={event => {
            const newInputBoulder = { ...newBoulder };
            newInputBoulder.level = event.target.value;
            setNewBoulder(newInputBoulder);
          }}
        />
        <TextInput
          title={'Hold color*'}
          required
          minLength={3}
          maxLength={20}
          disabled={false}
          value={newBoulder.hold_color}
          myFunction={event => {
            const newInputBoulder = { ...newBoulder };
            newInputBoulder.hold_color = event.target.value;
            setNewBoulder(newInputBoulder);
          }}
        />
        <TextInput
          title={'Sector*'}
          required
          minLength={3}
          maxLength={30}
          disabled={false}
          value={newBoulder.sector}
          myFunction={event => {
            const newInputBoulder = { ...newBoulder };
            newInputBoulder.sector = event.target.value;
            setNewBoulder(newInputBoulder);
          }}
        />
        <TextInput
          title={'Setter'}
          minLength={3}
          maxLength={30}
          disabled={false}
          value={newBoulder.setter}
          myFunction={event => {
            const newInputBoulder = { ...newBoulder };
            newInputBoulder.setter = event.target.value;
            setNewBoulder(newInputBoulder);
          }}
        />
        <TextInput
          title={'Tags'}
          minLength={3}
          maxLength={30}
          placeholder={'Please separate by comma'}
          disabled={false}
          value={newBoulder.tags}
          myFunction={event => {
            const newInputBoulder = { ...newBoulder };
            newInputBoulder.tags = event.target.value;
            setNewBoulder(newInputBoulder);
          }}
        />
        <Button title={'Save Boulder'} myFunction={() => {}} />
      </NewBoulderForm>
    </AddBoulderFormWrapper>
  );
};

export default AddBoulder;

const NewBoulderForm = styled.form`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const AddBoulderFormWrapper = styled.div`
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

const FormHeader = styled.h2`
  margin: 0;
`;
