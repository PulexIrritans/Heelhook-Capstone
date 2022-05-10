import { useEffect, useState } from 'react';
import styled from 'styled-components';

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

  const [newProjected, setNewProjected] = useState();
  const [newAttempts, setNewAttempts] = useState();
  const [newResult, setNewResult] = useState();
  const [newLiked, setNewLiked] = useState();
  const [newLevelFeedback, setNewLevelFeedback] = useState();

  return (
    <BoulderForm
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
      <h3>Save your achievement!</h3>
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
      <div>
        <label htmlFor="attempts">Attempts: </label>
        <input
          type="number"
          id="attempts"
          name="attempts"
          value={newAttempts}
          min="0"
          max="99"
          onChange={event => {
            setNewAttempts(event.target.value);
          }}
        ></input>
      </div>
      <fieldset>
        <legend>Your result:</legend>
        <RadioButtonWrapper>
          <div>
            <input
              type="radio"
              id="zone"
              name="result"
              value="zone"
              checked={newResult === 'zone' && 'checked'}
              onChange={event => {
                setNewResult(event.target.value);
              }}
            />
            <label htmlFor="zone">Zone</label>
          </div>
          <div>
            <input
              type="radio"
              id="top"
              name="result"
              value="top"
              checked={newResult === 'top' && 'checked'}
              onChange={event => {
                setNewResult(event.target.value);
              }}
            />
            <label htmlFor="top">Top</label>
          </div>
          <div>
            <input
              type="radio"
              id="flash"
              name="result"
              value="flash"
              checked={newResult === 'flash' && 'checked'}
              onChange={event => {
                setNewResult(event.target.value);
              }}
            />
            <label htmlFor="flash">Flash</label>
          </div>
          <button
            type="button"
            onClick={() => {
              setNewResult('');
            }}
          >
            x
          </button>
        </RadioButtonWrapper>
      </fieldset>
      <h3>Give us your feedback!</h3>
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
        <legend>Level Feedback</legend>
        <RadioButtonWrapper>
          <div>
            <input
              type="radio"
              id="tooeasy"
              name="levelFeedback"
              value="-1"
              checked={newLevelFeedback === '-1' && 'checked'}
              onChange={event => {
                setNewLevelFeedback(event.target.value);
              }}
            />
            <label htmlFor="tooeasy">Too easy</label>
          </div>
          <div>
            <input
              type="radio"
              id="justright"
              name="levelFeedback"
              value="0"
              checked={newLevelFeedback === '0' && 'checked'}
              onChange={event => {
                setNewLevelFeedback(event.target.value);
              }}
            />
            <label htmlFor="justright">Just right</label>
          </div>
          <div>
            <input
              type="radio"
              id="toohard"
              name="levelFeedback"
              value="1"
              checked={newLevelFeedback === '1' && 'checked'}
              onChange={event => {
                setNewLevelFeedback(event.target.value);
              }}
            />
            <label htmlFor="toohard">Too hard</label>
          </div>
          <button
            type="button"
            onClick={() => {
              setNewLevelFeedback(0);
            }}
          >
            x
          </button>
        </RadioButtonWrapper>
      </fieldset>
      <button>Save</button>
    </BoulderForm>
  );
};

export default AddClimbedBoulderForm;

const BoulderForm = styled.form`
  margin: 0.5rem auto;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const RadioButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
