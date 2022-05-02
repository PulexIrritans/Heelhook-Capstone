import Header from '../components/Header';
import Navigation from '../components/Navigation';
import BoulderCard from '../components/BoulderCard';
import AddClimbedBoulderForm from '../components/AddClimbedBoulderForm';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

const Add = ({ bouldersList, title }) => {
  const { id } = useParams();
  const currentBoulder = bouldersList.find(boulder => boulder.id === id);
  const [newClimbedBoulder, setNewClimbedBoulder] = useState();

  const saveClimbedBoulder = (
    projected,
    attempts,
    result,
    liked,
    levelFeedback,
    title
  ) => {
    setNewClimbedBoulder({
      id: '999999',
      climber_id: '9999999999',
      boulder_id: id,
      date: new Date(),
      projected: projected,
      attempts: attempts,
      result: result,
      liked: liked,
      level_feedback: Number(levelFeedback),
    });
  };

  return (
    <>
      <Header title="Add climb" />
      <main>
        <BoulderList role="list">
          {currentBoulder ? (
            <BoulderCard boulder={currentBoulder} detailedMode={true} />
          ) : (
            ''
          )}
        </BoulderList>
        <AddClimbedBoulderForm saveClimbedBoulder={saveClimbedBoulder} />
        {newClimbedBoulder && (
          <>
            <h3>You have successfully saved a new entry for this boulder!</h3>
            <p>Climb Date: {newClimbedBoulder.date.toISOString()}</p>
            <p>Projected: {newClimbedBoulder.projected ? 'true' : 'false'}</p>
            <p>Attempts: {newClimbedBoulder.attempts}</p>
            <p>Result: {newClimbedBoulder.result}</p>
            <p>Liked: {newClimbedBoulder.liked ? 'true' : 'false'}</p>
            <p>Level Feedback: {newClimbedBoulder.level_feedback}</p>
          </>
        )}
      </main>
      <Navigation />
    </>
  );
};

const BoulderList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export default Add;
