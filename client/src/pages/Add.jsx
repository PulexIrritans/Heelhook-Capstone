import Header from '../components/Header';
import Navigation from '../components/Navigation';
import BoulderCard from '../components/BoulderCard';
import AddClimbedBoulderForm from '../components/AddClimbedBoulderForm';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
const URL = process.env.REACT_APP_URL;
const USER_ID = 9999;

const Add = () => {
  const { id } = useParams();
  const [currentBoulder, setCurrentBoulder] = useState();
  const [climbedBoulder, setClimbedBoulder] = useState();
  const [formPrefilledClimbedBoulder, setFormPrefilledClimbedBoulder] =
    useState({});
  const [error, setError] = useState(false);

  const fetchCurrentBoulder = () => {
    fetch(`${URL}/boulders/${USER_ID}/${id}/`)
      .then(res => res.json())
      .then(data => setCurrentBoulder(data));
  };
  useEffect(() => {
    fetchCurrentBoulder();
    fetchCurrentClimbedBoulder();
  }, []);

  const fetchCurrentClimbedBoulder = () => {
    fetch(`${URL}/climbed_boulders/${USER_ID}/${id}/`)
      .then(res => res.json())
      .then(data => setFormPrefilledClimbedBoulder(data))
      .catch(error);
  };

  const saveClimbedBoulderToDatabase = (
    projected,
    attempts,
    result,
    liked,
    levelFeedback
  ) => {
    const newClimbedBoulder = {
      climber_id: USER_ID.toString(),
      boulder_id: id,
      date: new Date(),
      projected,
      attempts,
      result,
      liked,
      level_feedback: Number(levelFeedback),
    };

    fetch(`${URL}/climbed_boulders/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newClimbedBoulder),
    })
      .then(response => response.json())
      .then(data => {
        setClimbedBoulder(data);
      })
      .catch(error => {
        setError(true);
      });
  };

  return (
    <>
      <Header title="Add climb" />
      <main>
        {currentBoulder ? (
          <>
            <BoulderList role="list">
              <BoulderCard boulder={currentBoulder} detailedMode={true} />
            </BoulderList>
            <AddClimbedBoulderForm
              saveClimbedBoulderToDatabase={saveClimbedBoulderToDatabase}
              formPrefilledClimbedBoulder={formPrefilledClimbedBoulder}
            />
          </>
        ) : (
          <p>Sorry, could not load boulder.</p>
        )}
        {error && <p>Sorry, could not save new boulder entry.</p>}
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
