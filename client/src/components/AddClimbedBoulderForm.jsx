import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUndoAlt } from 'react-icons/fa';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import ScreenReaderOnly from './ScreenReaderOnly';
import { ReactComponent as Heart } from '../icons/heart.svg';

import styled from 'styled-components';
import Button from './Button';

const AddClimbedBoulderForm = ({
  saveClimbedBoulderToDatabase,
  formPrefilledClimbedBoulder,
}) => {
  const navigate = useNavigate();
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
  const [newResult, setNewResult] = useState('Touched');
  const [newLiked, setNewLiked] = useState('');
  const [newLevelFeedback, setNewLevelFeedback] = useState('');

  return (
    <FormWrapper>
      <FormHeader id="form-heading">Your climb</FormHeader>
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
          navigate('/find');
        }}
      >
        <CheckboxWrapper>
          <CheckboxLabel htmlFor="projected">Projected: </CheckboxLabel>
          <CheckboxInput
            type="checkbox"
            id="projected"
            name="projected"
            checked={newProjected}
            onChange={event => {
              setNewProjected(event.target.checked);
            }}
          ></CheckboxInput>
        </CheckboxWrapper>
        <AttemptsLabel htmlFor="attempts">Attempts: </AttemptsLabel>
        <AttemptsWrapper>
          <ButtonWrapperLeft>
            <CounterButton
              onClick={() => {
                setNewAttempts(newAttempts > 0 ? newAttempts - 1 : newAttempts);
              }}
              type="button"
            >
              <MinusIcon />
            </CounterButton>
          </ButtonWrapperLeft>
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
          <ButtonWrapper>
            <CounterButton
              onClick={() => {
                setNewAttempts(newAttempts + 1);
              }}
              type="button"
            >
              <PlusIcon />
            </CounterButton>
          </ButtonWrapper>
        </AttemptsWrapper>
        <fieldset>
          <ScreenReaderOnly as="legend">Your result:</ScreenReaderOnly>
          <RadioButtonWrapper>
            <RadioInput
              type="radio"
              id="Zone"
              name="result"
              value="Zone"
              checked={newResult === 'Zone' && 'checked'}
              onChange={event => {
                setNewResult(event.target.value);
              }}
            />
            <RadioLabel htmlFor="Zone">Zone</RadioLabel>
            <RadioInput
              type="radio"
              id="Top"
              name="result"
              value="Top"
              checked={newResult === 'Top' && 'checked'}
              onChange={event => {
                setNewResult(event.target.value);
              }}
            />
            <RadioLabel htmlFor="Top">Top</RadioLabel>
            <RadioInput
              type="radio"
              id="Flash"
              name="result"
              value="Flash"
              checked={newResult === 'Flash' && 'checked'}
              onChange={event => {
                setNewResult(event.target.value);
                setNewAttempts(0);
              }}
            />
            <RadioLabel htmlFor="Flash">Flash</RadioLabel>
            <ResetButton
              type="button"
              onClick={() => {
                setNewResult('Touched');
              }}
            >
              <FaUndoAlt />
            </ResetButton>
          </RadioButtonWrapper>
        </fieldset>
        <CheckboxWrapper>
          <CheckboxLabel htmlFor="liked">
            <Heart style={{ width: '20px' }} /> Like:{' '}
          </CheckboxLabel>
          <CheckboxInput
            type="checkbox"
            id="liked"
            name="liked"
            checked={newLiked}
            onChange={event => {
              setNewLiked(event.target.checked);
            }}
          ></CheckboxInput>
        </CheckboxWrapper>
        <fieldset>
          <ScreenReaderOnly as="legend">Level Feedback</ScreenReaderOnly>
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
        <Button type="submit" title="Save" myFunction={() => {}} />
      </BoulderForm>
    </FormWrapper>
  );
};

export default AddClimbedBoulderForm;

const FormWrapper = styled.div`
  padding: 0.5rem;
  margin-top: 1rem;
  background-color: var(--color-light-gray);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  &:hover {
    background-color: var(--color-medium-gray);
  }
`;

const BoulderForm = styled.form`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FormHeader = styled.h2`
  margin: 0;
`;

// Radio-Button Group

const RadioButtonWrapper = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: flex-start;
  align-items: center;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.7rem;
  width: 25%;
  height: 3rem;
  border: 2px solid var(--color-cyan);
  cursor: pointer;
  transition: background-color 0.1s;
`;

const RadioInput = styled.input`
  opacity: 0;
  &:checked + label {
    background-color: var(--color-cyan);
    color: white;
  }
`;

const ResetButton = styled.button`
  margin-left: 1rem;
  text-align: center;
  padding: 0.1rem;
  width: 6%;
  border: none;
  background-color: inherit;
  cursor: pointer;
`;

// Attempts Input
const AttemptsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const AttemptsLabel = styled.label``;

const NumberInput = styled.input`
  color: inherit;
  border: 2px solid var(--color-cyan);
  height: 3rem;
  width: 25%;
  text-align: center;
  font-size: 2rem;
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

const ButtonWrapperLeft = styled.div`
  margin-left: 14px;
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CounterButton = styled.button`
  width: 50%;
  height: 100%;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;

const MinusIcon = styled(AiOutlineMinus)`
  opacity: 0.5;
  width: 100%;
  height: 100%;
`;

const PlusIcon = styled(AiOutlinePlus)`
  opacity: 0.5;
  width: 100%;
  height: 100%;
`;

const CheckboxInput = styled.input`
  position: relative;
  width: 2rem;
  height: 1rem;
  -webkit-appearance: none;
  background: #c6c6c6;
  outline: none;
  border-radius: 20px;
  box-shadow: inset 0 0 5px rgba(255, 0, 0, 0.2);
  transition: 0.7s;
  &:checked {
    background: var(--color-cyan);
  }
  &:before {
    content: '';
    position: absolute;
    width: 1rem;
    height: 1rem;
    border-radius: 20px;
    top: 0;
    left: 0;
    background: #ffffff;
    transform: scale(1.1);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }
  &:checked&:before {
    left: 1rem;
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CheckboxLabel = styled.label`
  width: 65px;
`;
