import { useState } from 'react';
import TextInput from './TextInput';
import Button from './Button';
import styled from 'styled-components';

const AddBoulder = () => {
  const [error, setError] = useState('');
  const [newBoulder, setNewBoulder] = useState({
    name: '',
    level: '',
    hold_color: '',
    sector: '',
    setter: '',
    tags: '',
  });

  const saveNewBoulderToDatabase = newBoulder => {
    const newDBBoulder = {
      ...newBoulder,
      tags: newBoulder.tags.split(',').map(tag => tag.trim()),
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
      .then(data => {})
      .catch(error => {
        setError(true);
      });
  };

  return (
    <NewBoulderForm>
      <TextInput
        title={'Boulder name*'}
        required
        min={2}
        max={30}
        placeholder={'Boulder name'}
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
        placeholder={'Level'}
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
        placeholder={'Hold color'}
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
        placeholder={'Sector'}
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
        placeholder={'Setter'}
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
        placeholder={'Tags (separate by comma)'}
        disabled={false}
        value={newBoulder.tags}
        myFunction={event => {
          const newInputBoulder = { ...newBoulder };
          newInputBoulder.tags = event.target.value;
          setNewBoulder(newInputBoulder);
        }}
      />
      <Button
        title={'Save Boulder'}
        myFunction={saveNewBoulderToDatabase(newBoulder)}
      />
    </NewBoulderForm>
  );
};

export default AddBoulder;

const NewBoulderForm = styled.form`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
