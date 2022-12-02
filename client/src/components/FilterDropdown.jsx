import styled from 'styled-components';
import ScreenReaderOnly from './ScreenReaderOnly';

const FilterDropdown = ({
  title,
  dropdownType,
  myFunction,
  value,
  defaultValueText,
  dropdown,
}) => {
  return (
    <>
      {dropdown.length > 0 && (
        <>
          <ScreenReaderOnly as="label" for={dropdownType}>
            {title}
          </ScreenReaderOnly>
          <FilterSelect
            id={dropdownType}
            name={dropdownType}
            value={value}
            onChange={myFunction}
          >
            <option value="">{defaultValueText}</option>
            {dropdown.map(option => (
              <option key={option} value={option}>
                {option.toUpperCase()}
              </option>
            ))}
          </FilterSelect>
        </>
      )}
    </>
  );
};

export default FilterDropdown;

const FilterSelect = styled.select`
  border: 1px solid var(--color-cyan);
  background-color: white;
  padding: 0.5rem;
  &:focus {
    border: 2px solid var(--color-cyan);
  }
`;
