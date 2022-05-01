import BoulderCard from '../components/BoulderCard';
import AddClimbedBoulderForm from '../components/AddClimbedBoulderForm';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

const Add = ({bouldersList}) => {
    const { id } = useParams()
    const currentBoulder = bouldersList.find(boulder => boulder.id === Number(id));

    const [newClimbedBoulder, setNewClimbedBoulder] = useState();
    console.log(newClimbedBoulder)

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
    <main>
      <BoulderList role="list">
      {currentBoulder ? (
        <BoulderCard
          id={currentBoulder.id}
          name={currentBoulder.name}
          sector={currentBoulder.sector}
          level={currentBoulder.level}
          hold_color={currentBoulder.hold_color}
          img_start={currentBoulder.img_start}
          likes={currentBoulder.number_of_likes}
          setter={currentBoulder.setter}
          tags={currentBoulder.tags}
          weighting={currentBoulder.weighting}
          detailedMode={true}
        />
        ) : (''
        )}
        </BoulderList>
        <AddClimbedBoulderForm
        saveClimbedBoulder={saveClimbedBoulder}/>
        {newClimbedBoulder && (
          <>
          <p>You have successfully saved a new entry for this boulder!</p>
          <p>Climb Date: {newClimbedBoulder.date.toISOString()}</p>
          <p>Projected: {newClimbedBoulder.projected}</p>
          <p>Attempts: {newClimbedBoulder.attempts}</p>
          <p>Result: {newClimbedBoulder.result}</p>
          <p>Liked: {newClimbedBoulder.liked}</p>
          <p>Level Feedback: {newClimbedBoulder.level_feedback}</p>
          </>
        )}
    </main>
  );
};

const BoulderList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`

export default Add;
