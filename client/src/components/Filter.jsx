import { useEffect, useState } from 'react';
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
    fetch(`${URL}/api/boulders_filter`)
      .then(res => res.json())
      .then(data => setDropdownFilter(data));
  };
  useEffect(() => {
    fetchDropdownFilter();
  }, []);

  return (
    <>
      {dropdownFilter.hold_colors.length > 0 && (
        <>
          <label for="hold_color">Choose a hold color:</label>
          <select
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
          </select>
        </>
      )}
      {dropdownFilter.levels.length > 0 && (
        <>
          <label for="level">Choose a level:</label>
          <select
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
          </select>
        </>
      )}
      {dropdownFilter.sectors.length > 0 && (
        <>
          <label for="sector">Choose a sector:</label>
          <select
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
          </select>
        </>
      )}
    </>
  );
};

export default Filter;
