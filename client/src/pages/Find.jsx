import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import BoulderCard from '../components/BoulderCard';
import styled from 'styled-components';

const Find = () => {
  const [bouldersList, setBouldersList] = useState([]);

  const fetchBouldersList = () => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setBouldersList(data));
  };
  useEffect(() => {
    fetchBouldersList();
  }, []);

  return (
    <>
      <Header title="Heelhook" />
      <main>
        <BoulderList role="list">
          {bouldersList.map(boulder => (
            <BoulderCard
              key={boulder._id}
              boulder={boulder}
              detailedMode={false}
            />
          ))}
        </BoulderList>
      </main>
      <Navigation />
    </>
  );
};

export default Find;

const BoulderList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
