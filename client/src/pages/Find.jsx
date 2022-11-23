import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Filter from '../components/Filter';
import BoulderCard from '../components/BoulderCard';
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
            (filter.hold_color
              ? boulder.hold_color === filter.hold_color
              : true) &&
            (filter.level ? boulder.level === filter.level : true) &&
            (filter.sector ? boulder.sector === filter.sector : true) &&
            (filter.climb_result
              ? boulder.climbed === filter.climb_result
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
