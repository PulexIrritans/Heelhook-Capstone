import Header from '../components/Header';
import Navigation from '../components/Navigation';
import OverallStats from '../components/Charts/OverallStats';
const Main = () => {
  return (
    <>
      <Header title="Heelhook" />
      <main>
        <h2>My overall climb stats</h2>
        <ul>
          <li>
            <OverallStats />
          </li>
        </ul>
      </main>
      <Navigation />
    </>
  );
};

export default Main;
