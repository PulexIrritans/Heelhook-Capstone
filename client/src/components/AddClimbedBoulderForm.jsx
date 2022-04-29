import { useState } from 'react';
import styled from 'styled-components'

const AddClimbedBoulderForm = () => {
 
  const [date, setDate] = useState(new Date());
  const [projected, setProjected] = useState(false);
  const [attempts, setAttempts] = useState();
  const [result, setResult] = useState();
  const [liked, setLiked] = useState(false);
  const [levelFeedback, setLevelFeedback] = useState();

  return (
    <BoulderForm onSubmit={event => {}}>
      <label htmlFor="date">Title:</label>
      <input
        type="date"
        id="date"
        name="date"
        placeholder=""
        value={date}
        onChange={event => {
          setDate(event.target.value);
        }}
      ></input>
      <label htmlFor="projected">Projected:</label>
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
      <label htmlFor="attempts">Attempts:</label>
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
        <label for="zone">Zone</label>
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
        <label for="top">Top</label>
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
        <label for="flash">Flash</label>
      </div>

      <label htmlFor="liked">Like:</label>
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
        <label for="tooeasy">Too easy</label>
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
        <label for="justright">Just right</label>
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
        <label for="toohard">Too hard</label>
      </div>
      <button>Save</button>
    </BoulderForm>
  );
};

export default AddClimbedBoulderForm;


const BoulderForm = styled.form`
  max-width: 90%;
  display: flex;
  flex-direction: column;
`;


