import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import styled from 'styled-components';

dayjs.extend(relativeTime);

const URL = process.env.REACT_APP_URL;
const USER_ID = 9999;

const TimeCounter = () => {
  const [lastSessionDate, setLastSessionDate] = useState();
  const [timePeriod, setTimePeriod] = useState();

  const calculateDateDifference = () => {
    const difference = dayjs(lastSessionDate).fromNow(true);
    setTimePeriod(difference);
  };

  const fetchDayOfLastBoulderSession = () => {
    fetch(`${URL}/climbed_boulders_days/${USER_ID}/`)
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
      <p>
        <Timer>{timePeriod}</Timer>
        ago
      </p>
    </Counter>
  );
};

const Counter = styled.div`
  position: absolute;
  top: -30px;
  right: -10px;
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  border: 2px solid var(--border-color);
  border-radius: 50%;
  background-color: var(--color-light-gray);
  &hover {
    background-color: var(--color-medium-gray);
  }
`;

const Timer = styled.strong`
  display: block;
`;

export default TimeCounter;
