import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';
import FilterDropdown from './FilterDropdown';
const URL = process.env.REACT_APP_URL;
const USER_ID = 9999;

const Filter = ({ filter, setFilterAndSaveToSessionStorage }) => {
  const [dropdownFilter, setDropdownFilter] = useState({
    hold_colors: [],
    levels: [],
    sectors: [],
    climb_results: [],
  });

  const dropdownTitles = {
    hold_colors: ['Hold color', 'Choose a hold color'],
    levels: ['Level', 'Choose a level'],
    sectors: ['Sector', 'Choose a sector'],
    climb_results: ['Climb result', 'Choose climb result'],
  };

  const fetchDropdownFilter = () => {
    fetch(`${URL}/boulders_filter/${USER_ID}`)
      .then(res => res.json())
      .then(data => setDropdownFilter(data));
  };
  useEffect(() => {
    fetchDropdownFilter();
  }, []);

  return (
    <FilterWrapper>
      {Object.keys(dropdownFilter).map((keyName, index) => (
        <FilterDropdown
          key={index}
          defaultValueText={dropdownTitles[keyName][0]}
          dropdown={dropdownFilter[keyName]}
          title={dropdownTitles[keyName][1]}
          dropdownType={keyName}
          value={filter[keyName]}
          myFunction={event => {
            setFilterAndSaveToSessionStorage({
              ...filter,
              [keyName]: event.target.value,
            });
          }}
        />
      ))}
      <Checkbox
        title="Show projected only"
        width=""
        checked={filter.projectedOnly}
        myFunction={event => {
          setFilterAndSaveToSessionStorage({
            ...filter,
            projectedOnly: event.target.checked,
          });
        }}
      >
        Show Projected only:
      </Checkbox>
    </FilterWrapper>
  );
};

export default Filter;

const FilterWrapper = styled.form`
  padding: 0.5rem;
  position: relative;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 5px;
  background-color: var(--color-light-gray);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  &:hover {
    background-color: var(--color-medium-gray);
  }
`;
