import { useEffect, useState } from 'react';
import styled from 'styled-components';
const URL = process.env.REACT_APP_URL;

const Filter = ({ filter, setFilter }) => {
  const [dropdownFilter, setDropdownFilter] = useState({
    hold_colors: [],
    levels: [],
    sectors: [],
  });
  const [holdColorFilter, setHoldColorFilter] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  const [sectorFilter, setSectorFilter] = useState('');

  const fetchDropdownFilter = () => {
    fetch(`${URL}/boulders_filter`)
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
          <label className="sr-only" for="hold_color">
            Choose a hold color:
          </label>
          <FilterSelect
            id="hold_color"
            name="hold_color"
            value={holdColorFilter}
            onChange={event => {
              setHoldColorFilter(event.target.value);
              setLevelFilter('');
              setSectorFilter('');
              setFilter({
                hold_color: event.target.value,
                level: '',
                sector: '',
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
          <label className="sr-only" for="level">
            Choose a level:
          </label>
          <FilterSelect
            id="level"
            name="level"
            value={levelFilter}
            onChange={event => {
              setLevelFilter(event.target.value);
              setHoldColorFilter('');
              setSectorFilter('');
              setFilter({
                level: event.target.value,
                hold_color: '',
                sector: '',
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
          <label className="sr-only" for="sector">
            Choose a sector:
          </label>
          <FilterSelect
            id="sector"
            name="sector"
            value={sectorFilter}
            onChange={event => {
              setSectorFilter(event.target.value);
              setHoldColorFilter('');
              setLevelFilter('');
              setFilter({
                sector: event.target.value,
                hold_color: '',
                level: '',
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
    </FilterWrapper>
  );
};

export default Filter;

const FilterWrapper = styled.div`
  padding: 0.5rem;
  position: relative;
  height: 30%;
  margin-bottom: 1rem;
  display: flex;
  gap: 5px;
  flex-direction: column;
  background-color: var(--color-light-gray);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  &:hover {
    background-color: var(--color-medium-gray);
  }
`;

const FilterSelect = styled.select`
  height: 30%;
  border: none;
  background-color: white;
  padding: 0.5rem;
  &:focus {
    border: 1px solid var(--color-cyan);
  }
`;
