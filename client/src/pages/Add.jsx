import BoulderCard from '../components/BoulderCard';
import AddClimbedBoulderForm from '../components/AddClimbedBoulderForm';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

const Add = ({bouldersList}) => {
    const { id } = useParams()
    const currentBoulder = bouldersList.find(boulder => boulder.number === Number(id));

    const [newClimbedBoulder, setNewClimbedBoulder] = useState();

  const saveClimbedBoulder = (date, projected, attempts, result, liked, levelFeedback) => {
    setNewClimbedBoulder({
      id: '999999',
      climber_id: '9999999999',
      boulder_id: id,
      date: date,
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
          id={currentBoulder.number}
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
          <p>You have successfully saved a new entry for this boulder!</p>
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
