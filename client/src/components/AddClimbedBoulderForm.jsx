import { useEffect, useState } from 'react';
import { FaUndoAlt } from 'react-icons/fa';
import styled from 'styled-components';
import Button from './Button';

const AddClimbedBoulderForm = ({
  saveClimbedBoulderToDatabase,
  formPrefilledClimbedBoulder,
}) => {
  useEffect(() => {
    const { projected, attempts, result, liked, level_feedback } =
      formPrefilledClimbedBoulder;
    setNewProjected(projected);
    setNewAttempts(attempts);
    setNewResult(result);
    setNewLiked(liked);
    setNewLevelFeedback(level_feedback);
  }, [formPrefilledClimbedBoulder]);

  const [newProjected, setNewProjected] = useState('');
  const [newAttempts, setNewAttempts] = useState(0);
  const [newResult, setNewResult] = useState('');
  const [newLiked, setNewLiked] = useState('');
  const [newLevelFeedback, setNewLevelFeedback] = useState('');

  return (
    <FormWrapper>
      <h2 id="form-heading">Your climb</h2>
      <p id="form-description">Use this form to save your climb data.</p>
      <BoulderForm
        aria-labelledby="form-heading"
        aria-describedby="form-description"
        onSubmit={event => {
          event.preventDefault();
          saveClimbedBoulderToDatabase(
            newProjected,
            newAttempts,
            newResult,
            newLiked,
            newLevelFeedback
          );
        }}
      >
        <div>
          <label htmlFor="projected">Projected: </label>
          <input
            type="checkbox"
            id="projected"
            name="projected"
            value={newProjected}
            onChange={event => {
              setNewProjected(event.target.checked);
            }}
          ></input>
        </div>
        <AttemptsWrapper>
          <label htmlFor="attempts">Attempts: </label>
          <NumberInput
            type="number"
            id="attempts"
            name="attempts"
            value={newAttempts}
            min="0"
            max="99"
            onChange={event => {
              setNewAttempts(event.target.value);
            }}
          ></NumberInput>
          <Button
            title="+"
            myFunction={() => {
              setNewAttempts(newAttempts + 1);
            }}
            type="button"
          />
          <Button
            title="-"
            myFunction={() => {
              setNewAttempts(newAttempts - 1);
            }}
            type="button"
          />
        </AttemptsWrapper>
        <fieldset>
          <legend className="sr-only">Your result:</legend>
          <RadioButtonWrapper>
            <RadioInput
              className="sr-only"
              type="radio"
              id="zone"
              name="result"
              value="zone"
              checked={newResult === 'zone' && 'checked'}
              onChange={event => {
                setNewResult(event.target.value);
              }}
            />
            <RadioLabel htmlFor="zone">Zone</RadioLabel>
            <RadioInput
              className="sr-only"
              type="radio"
              id="top"
              name="result"
              value="top"
              checked={newResult === 'top' && 'checked'}
              onChange={event => {
                setNewResult(event.target.value);
              }}
            />
            <RadioLabel htmlFor="top">Top</RadioLabel>
            <RadioInput
              className="sr-only"
              type="radio"
              id="flash"
              name="result"
              value="flash"
              checked={newResult === 'flash' && 'checked'}
              onChange={event => {
                setNewResult(event.target.value);
              }}
            />
            <RadioLabel htmlFor="flash">Flash</RadioLabel>
            <ResetButton
              type="button"
              onClick={() => {
                setNewResult('');
              }}
            >
              <FaUndoAlt />
            </ResetButton>
          </RadioButtonWrapper>
        </fieldset>
        <div>
          <label htmlFor="liked">Like: </label>
          <input
            type="checkbox"
            id="liked"
            name="liked"
            value={newLiked}
            onChange={event => {
              setNewLiked(event.target.checked);
            }}
          ></input>
        </div>
        <fieldset>
          <legend className="sr-only">Level Feedback</legend>
          <RadioButtonWrapper>
            <RadioInput
              type="radio"
              id="tooeasy"
              name="levelFeedback"
              value="-1"
              checked={newLevelFeedback === '-1' && 'checked'}
              onChange={event => {
                setNewLevelFeedback(event.target.value);
              }}
            />
            <RadioLabel htmlFor="tooeasy">Too easy</RadioLabel>
            <RadioInput
              type="radio"
              id="justright"
              name="levelFeedback"
              value="0"
              checked={newLevelFeedback === '0' && 'checked'}
              onChange={event => {
                setNewLevelFeedback(event.target.value);
              }}
            />
            <RadioLabel htmlFor="justright">Just right</RadioLabel>
            <RadioInput
              type="radio"
              id="toohard"
              name="levelFeedback"
              value="1"
              checked={newLevelFeedback === '1' && 'checked'}
              onChange={event => {
                setNewLevelFeedback(event.target.value);
              }}
            />
            <RadioLabel htmlFor="toohard">Too hard</RadioLabel>
            <ResetButton
              type="button"
              onClick={() => {
                setNewLevelFeedback(0);
              }}
            >
              <FaUndoAlt />
            </ResetButton>
          </RadioButtonWrapper>
        </fieldset>
        <button>Save</button>
      </BoulderForm>
    </FormWrapper>
  );
};

export default AddClimbedBoulderForm;

const FormWrapper = styled.div`
  padding: 0.5rem;
  margin-top: 2rem;
  background-color: var(--color-light-gray);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  &:hover {
    background-color: var(--color-medium-gray);
  }
`;

const BoulderForm = styled.form`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const RadioButtonWrapper = styled.div`
  display: flex;
  gap: 2px;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
`;

const RadioLabel = styled.label`
  text-align: center;
  padding: 0.4rem 0.7rem;
  width: 25%;
  border: 2px solid var(--color-cyan);
  cursor: pointer;
  transition: background-color 0.1s;
`;

const RadioInput = styled.input`
  display: none;
  &:checked + label {
    background-color: var(--color-cyan);
    color: white;
  }
`;

const ResetButton = styled.button`
  text-align: center;
  padding: 0.1rem;
  width: 6%;
  border: none;
  background-color: inherit;
  cursor: pointer;
`;

const NumberInput = styled.input`
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield !important;
`;

const AttemptsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
