import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ScreenReaderOnly from './ScreenReaderOnly';
const URL = process.env.REACT_APP_URL;
const USER_ID = 9999;

const Filter = ({ filter, setFilter }) => {
  const [dropdownFilter, setDropdownFilter] = useState({
    hold_colors: [],
    levels: [],
    sectors: [],
    climb_results: [],
  });
  const [holdColorFilter, setHoldColorFilter] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  const [sectorFilter, setSectorFilter] = useState('');
  const [climbResultFilter, setClimbResultFilter] = useState('');

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
            value={holdColorFilter}
            onChange={event => {
              setHoldColorFilter(event.target.value);
              setLevelFilter('');
              setSectorFilter('');
              setClimbResultFilter('');
              setFilter({
                hold_color: event.target.value,
                level: '',
                sector: '',
                climb_result: '',
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
            value={levelFilter}
            onChange={event => {
              setLevelFilter(event.target.value);
              setHoldColorFilter('');
              setSectorFilter('');
              setClimbResultFilter('');
              setFilter({
                level: event.target.value,
                hold_color: '',
                sector: '',
                climb_result: '',
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
            value={sectorFilter}
            onChange={event => {
              setSectorFilter(event.target.value);
              setHoldColorFilter('');
              setLevelFilter('');
              setClimbResultFilter('');
              setFilter({
                sector: event.target.value,
                hold_color: '',
                level: '',
                climb_result: '',
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
            value={climbResultFilter}
            onChange={event => {
              setHoldColorFilter('');
              setLevelFilter('');
              setSectorFilter('');
              setClimbResultFilter(event.target.value);
              setFilter({
                hold_color: '',
                level: '',
                sector: '',
                climb_result: event.target.value,
              });
            }}
          >
            <option value="">Climbed by result</option>
            {dropdownFilter.climb_results?.map(result => (
              <option key={result} value={result}>
                {result.toUpperCase()}
              </option>
            ))}
          </FilterSelect>
        </>
      )}
    </FilterWrapper>
  );
};

export default Filter;

const FilterWrapper = styled.form`
  padding: 0.5rem;
  position: relative;
  height: 20%;
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
  border: none;
  background-color: white;
  padding: 0.5rem;
  &:focus {
    border: 1px solid var(--color-cyan);
  }
`;
