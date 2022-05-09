import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import styled from 'styled-components';

dayjs.extend(relativeTime);

const URL = process.env.REACT_APP_URL;
const USER_ID = 9999;

const DayCounter = () => {
  const [lastSessionDate, setLastSessionDate] = useState();
  const [dateDifference, setDateDifference] = useState();

  const calculateDateDifference = () => {
    const difference = dayjs(lastSessionDate).fromNow(true);
    setDateDifference(difference);
  };

  const fetchDayOfLastBoulderSession = () => {
    fetch(`${URL}/api/climbed_boulders_days/${USER_ID}/`)
      .then(res => res.json())
      .then(data => setLastSessionDate(data));
  };
  useEffect(() => {
    fetchDayOfLastBoulderSession();
  }, []);

  useEffect(() => {
    calculateDateDifference();
  }, [lastSessionDate]);

  return (
    <Counter>
      <p>Last session was </p>
      <p>{dateDifference}</p>
      <p>ago.</p>
    </Counter>
  );
};

const Counter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: 2px solid var(--border-color);
  border-radius: 50%;
  background-color: var(--color-light-gray);
  &hover {
    background-color: var(--color-medium-gray);
  }
`;

export default DayCounter;
