import styled from 'styled-components';

const TextInput = ({
  type,
  title,
  placeholder,
  required,
  value,
  myFunction,
  minLength,
  maxLength,
  disabled,
}) => {
  return (
    <Wrapper>
      <Label htmlFor={title}>{title}</Label>
      <TextFieldInput
        type={'text'}
        id={title}
        name={title}
        placeholder={placeholder}
        required={required ? true : false}
        onChange={myFunction}
        minLength={minLength}
        maxLength={maxLength}
        disabled={disabled}
        value={value}
      ></TextFieldInput>
    </Wrapper>
  );
};

export default TextInput;

const TextFieldInput = styled.input`
  height: 3rem;
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  font-size: inherit;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Label = styled.label`
  width: 20%;
`;
