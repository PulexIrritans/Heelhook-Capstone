import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ScreenReaderOnly from './ScreenReaderOnly';
import Checkbox from './Checkbox';
const URL = process.env.REACT_APP_URL;
const USER_ID = 9999;

const Filter = ({ filter, setFilterAndSaveToSessionStorage }) => {
  const [dropdownFilter, setDropdownFilter] = useState({
    hold_colors: [],
    levels: [],
    sectors: [],
    climb_results: [],
  });

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
      {dropdownFilter.hold_colors.length > 0 && (
        <>
          <ScreenReaderOnly as="label" for="hold_color">
            Choose a hold color:
          </ScreenReaderOnly>
          <FilterSelect
            id="hold_color"
            name="hold_color"
            value={filter.hold_color}
            onChange={event => {
              setFilterAndSaveToSessionStorage({
                ...filter,
                hold_color: event.target.value,
              });
            }}
          >
            <option value="">Hold color</option>
            {dropdownFilter.hold_colors.map(color => (
              <option key={color} value={color}>
                {color.toUpperCase()}
              </option>
            ))}
          </FilterSelect>
        </>
      )}
      {dropdownFilter.levels.length > 0 && (
        <>
          <ScreenReaderOnly as="label" for="level">
            Choose a level:
          </ScreenReaderOnly>
          <FilterSelect
            id="level"
            name="level"
            value={filter.level}
            onChange={event => {
              setFilterAndSaveToSessionStorage({
                ...filter,
                level: event.target.value,
              });
            }}
          >
            <option value="">Level</option>
            {dropdownFilter.levels.map(level => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </FilterSelect>
        </>
      )}
      {dropdownFilter.sectors.length > 0 && (
        <>
          <ScreenReaderOnly as="label" for="sector">
            Choose a sector:
          </ScreenReaderOnly>
          <FilterSelect
            id="sector"
            name="sector"
            value={filter.sector}
            onChange={event => {
              setFilterAndSaveToSessionStorage({
                ...filter,
                sector: event.target.value,
              });
            }}
          >
            <option value="">Sector</option>
            {dropdownFilter.sectors.map(sector => (
              <option key={sector} value={sector}>
                {sector.toUpperCase()}
              </option>
            ))}
          </FilterSelect>
        </>
      )}
      {dropdownFilter.hold_colors.length > 0 && (
        <>
          <ScreenReaderOnly as="label" for="result">
            Choose climb result:
          </ScreenReaderOnly>
          <FilterSelect
            id="result"
            name="result"
            value={filter.climb_result}
            onChange={event => {
              setFilterAndSaveToSessionStorage({
                ...filter,
                climb_result: event.target.value,
              });
            }}
          >
            <option value="">Climb result</option>
            {dropdownFilter.climb_results?.map(result => (
              <option key={result} value={result}>
                {result.toUpperCase()}
              </option>
            ))}
          </FilterSelect>
        </>
      )}
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

const FilterSelect = styled.select`
  border: 1px solid var(--color-cyan);
  background-color: white;
  padding: 0.5rem;
  &:focus {
    border: 2px solid var(--color-cyan);
  }
`;
