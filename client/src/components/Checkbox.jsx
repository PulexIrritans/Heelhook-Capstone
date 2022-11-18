import styled from 'styled-components';

const Checkbox = ({ title, checked, myFunction, width }) => {
  return (
    <CheckboxWrapper>
      <CheckboxLabel width={width} htmlFor={title}>
        {title}:{' '}
      </CheckboxLabel>
      <DefaultCheckbox
        type="checkbox"
        id={title}
        name={title}
        checked={checked}
        onChange={myFunction}
      ></DefaultCheckbox>
    </CheckboxWrapper>
  );
};

export default Checkbox;

const DefaultCheckbox = styled.input`
  position: relative;
  width: 2rem;
  height: 1rem;
  -webkit-appearance: none;
  background: #c6c6c6;
  outline: none;
  border-radius: 20px;
  box-shadow: inset 0 0 5px rgba(255, 0, 0, 0.2);
  transition: 0.7s;
  &:checked {
    background: var(--color-cyan);
  }
  &:before {
    content: '';
    position: absolute;
    width: 1rem;
    height: 1rem;
    border-radius: 20px;
    top: 0;
    left: 0;
    background: #ffffff;
    transform: scale(1.1);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }
  &:checked&:before {
    left: 1rem;
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CheckboxLabel = styled.label`
  width: ${props => props.width};
`;
