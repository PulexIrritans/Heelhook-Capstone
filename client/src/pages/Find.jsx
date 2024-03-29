import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Filter from '../components/Filter';
import BoulderCard from '../components/BoulderCard';
import AddBoulder from '../components/AddBoulder';
import styled from 'styled-components';
const URL = process.env.REACT_APP_URL;
const USER_ID = 9999;

export default function Find() {
  const [bouldersList, setBouldersList] = useState([]);
  const [filteredBouldersList, setFilteredBouldersList] =
    useState(bouldersList);

  const [filter, setFilter] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchBouldersList = () => {
    setIsLoading(true);
    fetch(`${URL}/boulders_all/${USER_ID}`)
      .then(res => res.json())
      .then(data => {
        setBouldersList(data);
        setFilteredBouldersList(data);
        getFilterFromSessionStorage();
        setIsLoading(false);
      });
  };

  const filterBouldersList = () => {
    if (filter.length === 0) {
      setFilteredBouldersList([...bouldersList]);
    } else {
      setFilteredBouldersList(
        bouldersList.filter(
          boulder =>
            (filter.hold_colors
              ? boulder.hold_color === filter.hold_colors
              : true) &&
            (filter.levels ? boulder.level === filter.levels : true) &&
            (filter.sectors ? boulder.sector === filter.sectors : true) &&
            (filter.climb_results
              ? boulder.climbed === filter.climb_results
              : true) &&
            (filter.projectedOnly
              ? boulder.projected === filter.projectedOnly
              : true)
        )
      );
    }
  };

  const setFilterAndSaveToSessionStorage = newfilter => {
    setFilter(newfilter);
    sessionStorage.setItem('filter', JSON.stringify(newfilter));
  };

  const getFilterFromSessionStorage = () => {
    const sessionStorageReturn = JSON.parse(sessionStorage.getItem('filter'));
    sessionStorageReturn === null
      ? setFilter({})
      : setFilter(sessionStorageReturn);
  };

  useEffect(() => {
    fetchBouldersList();
  }, []);

  useEffect(() => {
    filterBouldersList();
  }, [filter]);

  if (isLoading) {
    return (
      <>
        <Header title="Find Boulder" />
        <main>
          <h2>Is Loading...</h2>
        </main>
        <Navigation />
      </>
    );
  } else {
    return (
      <>
        <Header title="Find Boulder" />
        <main>
          <Filter
            filter={filter}
            setFilterAndSaveToSessionStorage={setFilterAndSaveToSessionStorage}
          />
          <BoulderList role="list">
            <h2>Click on a card to enter your climb.</h2>
            {filteredBouldersList.length > 0 ? (
              filteredBouldersList.map(boulder => (
                <BoulderCard
                  key={boulder._id}
                  boulder={boulder}
                  detailedMode={false}
                />
              ))
            ) : (
              <p>Sorry, nothing found. Please try again.</p>
            )}
          </BoulderList>
          <AddBoulder />
        </main>
        <Navigation />
      </>
    );
  }
}

const BoulderList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
