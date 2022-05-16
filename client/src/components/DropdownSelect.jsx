import styled from 'styled-components';

const DropdownSelect = ({ title, myFunction, value }) => {
  return (
    <FilterSelect
      id={title}
      name={title}
      value={value}
      onChange={event => {
        myFunction;
      }}
    ></FilterSelect>
  );
};

export default DropdownSelect;

const FilterSelect = styled.select`
  border: none;
  background-color: white;
  padding: 0.5rem;
  &:focus {
    border: 1px solid var(--color-cyan);
  }
`;
