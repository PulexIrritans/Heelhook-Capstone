import Header from '../components/Header';
import Footer from '../components/Footer';
import BoulderCard from '../components/BoulderCard';
import styled from 'styled-components';

const Find = ({ bouldersList, title }) => {
  return (
    <>
      <Header title={title} />
      <main>
        <BoulderList role="list">
      {bouldersList.map(boulder => (
        <BoulderCard
          key={boulder.id}
          boulder={boulder}
          detailedMode={false}
        />
      ))}
    </BoulderList>
      </main>
      <Footer />
    </>
  );
};

export default Find;

const BoulderList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
