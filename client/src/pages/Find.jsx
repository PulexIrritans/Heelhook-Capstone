import BoulderCard from '../components/BoulderCard';
import styled from 'styled-components'


const Find = ({bouldersList}) => {
  return (
    <BoulderList role="list">
      {bouldersList.map(boulder => (
        <BoulderCard
          key={boulder.id}
          boulder={boulder}
          detailedMode={false}
        />
      ))}
    </BoulderList>
  );
};

export default Find;

const BoulderList = styled.ul`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`
