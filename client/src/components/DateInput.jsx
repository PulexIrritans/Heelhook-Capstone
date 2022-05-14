import styled from 'styled-components';

const DateInput = ({ title, text_content, required, min, max, disabled }) => {
  return (
    <Wrapper>
      <label htmlFor={title}>{text_content}</label>
      <Input
        type="date"
        id={title}
        name={title}
        min={min}
        max={max}
        required={required}
        disabled={disabled}
      ></Input>
    </Wrapper>
  );
};
export default DateInput;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  height: 3rem;
  padding: 0.5rem;
  background-color: white !important;
  border: 1px solid var(--border-color);
`;