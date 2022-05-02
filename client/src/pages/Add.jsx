import BoulderCard from '../components/BoulderCard';
import AddClimbedBoulderForm from '../components/AddClimbedBoulderForm';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

const Add = ({bouldersList}) => {
  
    const { id } = useParams()
    const currentBoulder = bouldersList.find(boulder => boulder.id === id);
    const [newClimbedBoulder, setNewClimbedBoulder] = useState();

  const saveClimbedBoulder = (projected, attempts, result, liked, levelFeedback) => {
    setNewClimbedBoulder({
      id: '999999',
      climber_id: '9999999999',
      boulder_id: id,
      date: new Date(),
      projected: projected,
      attempts: attempts,
      result: result,
      liked: liked,
      level_feedback: levelFeedback,
    });
  };
  
    return (
    <>
      <BoulderList role="list">
      {currentBoulder ? (
        <BoulderCard
         boulder={currentBoulder}
          detailedMode={true}
        />
        ) : (''
        )}
        </BoulderList>
        <AddClimbedBoulderForm
        saveClimbedBoulder={saveClimbedBoulder}/>
        {newClimbedBoulder && (
          <>
          <h3>You have successfully saved a new entry for this boulder!</h3>
          <p>Boulder ID: {newClimbedBoulder.boulder_id}</p>
          <p>Climb Date: {newClimbedBoulder.date.toISOString()}</p>
          <p>Projected: {newClimbedBoulder.projected ? "true" : "false"}</p>
          <p>Attempts: {newClimbedBoulder.attempts}</p>
          <p>Result: {newClimbedBoulder.result}</p>
          <p>Liked: {newClimbedBoulder.liked ? "true" : "false"}</p>
          <p>Level Feedback: {newClimbedBoulder.level_feedback}</p>
          </>
        )}
        <Link to={`/`}>Back to Boulder List</Link>
    </>
  );
};

const BoulderList = styled.ul`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`

export default Add;
