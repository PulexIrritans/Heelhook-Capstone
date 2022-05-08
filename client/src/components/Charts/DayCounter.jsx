import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import dayjsTwitter from 'dayjs-twitter';

dayjs.extend(dayjsTwitter);

const URL = process.env.REACT_APP_URL;
const USER_ID = 9999;

const DayCounter = () => {
  const [lastSessionDate, setLastSessionDate] = useState();
  const [dateDifference, setDateDifference] = useState();

  const calculateDateDifference = () => {
    console.log('Test');
    // const currentDate = dayjs();
    // const dateDifference = currentDate.diff(lastSessionDate.dayjs());
    // setDateDifference(dateDifference);
    // console.log(dateDifference, 12345);
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
  }, lastSessionDate);

  return <div>{dateDifference}</div>;
};

export default DayCounter;
