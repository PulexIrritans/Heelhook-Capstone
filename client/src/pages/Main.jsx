import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { useEffect, useState } from 'react';
const USER_ID = 9999;

const Main = () => {
  const [climberOverallStats, setClimberOverallStats] = useState();

  const fetchClimberOverallStats = () => {
    fetch(`${URL}/api/climbed_boulders/${USER_ID}/`)
      .then(res => res.json())
      .then(data => setClimberOverallStats(data));
  };
  useEffect(() => {
    fetchClimberOverallStats();
  }, []);

  return (
    <>
      <Header title="Heelhook" />
      <main>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </main>
      <Navigation />
    </>
  );
};

export default Main;
