import { useState } from 'react';
import styled from 'styled-components';

const AddClimbedBoulderForm = ({ saveClimbedBoulderToDatabase }) => {
  const [projected, setProjected] = useState(false);
  const [attempts, setAttempts] = useState('');
  const [result, setResult] = useState();
  const [liked, setLiked] = useState(false);
  const [levelFeedback, setLevelFeedback] = useState(0);

  return (
    <BoulderForm
      onSubmit={event => {
        event.preventDefault();
        saveClimbedBoulderToDatabase(
          projected,
          attempts,
          result,
          liked,
          levelFeedback
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
          value={projected}
          onChange={event => {
            setProjected(event.target.checked);
          }}
        ></input>
      </div>
      <div>
        <label htmlFor="attempts">Attempts: </label>
        <input
          type="number"
          id="attempts"
          name="attempts"
          value={attempts}
          min="0"
          onChange={event => {
            setAttempts(event.target.value);
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
              checked={result === 'zone'}
              onChange={event => {
                setResult(event.target.value);
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
              checked={result === 'top'}
              onChange={event => {
                setResult(event.target.value);
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
              checked={result === 'flash'}
              onChange={event => {
                setResult(event.target.value);
              }}
            />
            <label htmlFor="flash">Flash</label>
          </div>
          <button
            type="button"
            onClick={() => {
              setResult('');
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
          value={liked}
          onChange={event => {
            setLiked(event.target.checked);
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
              checked={levelFeedback === '-1'}
              onChange={event => {
                setLevelFeedback(event.target.value);
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
              checked={levelFeedback === '0'}
              onChange={event => {
                setLevelFeedback(event.target.value);
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
              checked={levelFeedback === '1'}
              onChange={event => {
                setLevelFeedback(event.target.value);
              }}
            />
            <label htmlFor="toohard">Too hard</label>
          </div>
          <button
            type="button"
            onClick={() => {
              setLevelFeedback(0);
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
