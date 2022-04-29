import { useState } from 'react';
import styled from 'styled-components';

const AddClimbedBoulderForm = ({saveClimbedBoulder}) => {
  const [date, setDate] = useState(new Date());
  const [projected, setProjected] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [result, setResult] = useState();
  const [liked, setLiked] = useState(false);
  const [levelFeedback, setLevelFeedback] = useState();
  

  return (
    <BoulderForm
      onSubmit={(event) => {event.preventDefault();
        saveClimbedBoulder(date, projected, attempts, result, liked, levelFeedback);
      }}
    >
      <label htmlFor="date">Climb date:</label>
      <input
        type="date"
        id="date"
        name="date"
        // defaultValue={date}
        placeholder={date}
        value={date}
        onChange={event => {
          setDate(event.target.value);
        }}
      ></input>
      <div>
        <label htmlFor="projected">Projected: </label>
        <input
          type="checkbox"
          id="projected"
          name="projected"
          placeholder=""
          value={projected}
          onChange={event => {
            setProjected(event.target.value);
          }}
        ></input>
      </div>
      <div>
        <label htmlFor="attempts">Attempts: </label>
        <input
          type="number"
          id="attempts"
          name="attempts"
          placeholder="0"
          value={attempts}
          onChange={event => {
            setAttempts(event.target.value);
          }}
        ></input>
      </div>
      <fieldset>
        <legend>Your result:</legend>
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
        <div>
          <button
            onClick={event => {
              event.preventDefault();
              setResult('');
            }}
          >
            x
          </button>
        </div>
      </fieldset>

      <div>
        <label htmlFor="liked">Like: </label>
        <input
          type="checkbox"
          id="liked"
          name="liked"
          placeholder=""
          value={liked}
          onChange={event => {
            setLiked(event.target.value);
          }}
        ></input>
      </div>

      <fieldset>
        <legend>Level Feedback</legend>
        <div>
          <input
            type="radio"
            id="tooeasy"
            name="levelFeedback"
            value="tooeasy"
            checked={levelFeedback === 'tooeasy'}
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
            value="justright"
            checked={levelFeedback === 'justright'}
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
            value="toohard"
            checked={levelFeedback === 'toohard'}
            onChange={event => {
              setLevelFeedback(event.target.value);
            }}
          />
          <label htmlFor="toohard">Too hard</label>
        </div>
        <button
          onClick={event => {
            event.preventDefault();
            setLevelFeedback('');
          }}
        >
          x
        </button>
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
`;
