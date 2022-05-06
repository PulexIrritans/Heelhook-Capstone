import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
const URL = process.env.REACT_APP_URL;
const USER_ID = 9999;

ChartJS.register(ArcElement, Tooltip, Legend);

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

  const data = {
    labels: climberOverallStats?.map(stat => stat.label),
    datasets: [
      {
        label: '# of Votes',
        data: climberOverallStats?.map(stat => stat.amount),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Header title="Heelhook" />
      <main>
        <ul>
          <li>
            <Doughnut data={data} />
          </li>
          <li></li>
        </ul>
      </main>
      <Navigation />
    </>
  );
};

export default Main;
