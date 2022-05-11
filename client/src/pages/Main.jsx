import styled from 'styled-components';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import SessionStats from '../components/Charts/SessionStats';
import OverallStats from '../components/Charts/OverallStats';
import TimeCounter from '../components/Charts/TimeCounter';
const Main = () => {
  return (
    <>
      <Header title="Heelhook" />
      <main>
        <ChartsList>
          <Wrapper>
            <h2>Latest session climbs</h2>
            <TimeCounter />
            <SessionStats />
          </Wrapper>
          <Wrapper>
            <h2>Overall climbs</h2>
            <OverallStats />
          </Wrapper>
        </ChartsList>
      </main>
      <Navigation />
    </>
  );
};

export default Main;

const Wrapper = styled.li`
  padding: 0.5rem;
  position: relative;
  height: 70%;
  background-color: var(--color-light-gray);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  &:hover {
    background-color: var(--color-medium-gray);
  }
`;

const ChartsList = styled.ul`
  height: 90%;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  gap: 1rem;
`;
