import styled from 'styled-components';

const Button = ({ title, type, myFunction }) => {
  return (
    <DefaultButton type={type} onClick={myFunction}>
      {title}
    </DefaultButton>
  );
};

export default Button;

const DefaultButton = styled.button`
  border: none;
  background-color: var(--color-cyan);
  border-radius: var(--border-radius);
  height: 3rem;
  width: 100%;
  cursor: pointer;
`;
