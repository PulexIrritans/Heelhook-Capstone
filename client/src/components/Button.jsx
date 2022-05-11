import styled from 'styled-components';

const Button = ({ title, myFunction }) => {
  return <DefaultButton onClick={myFunction}>{title}</DefaultButton>;
};

export default Button;

const DefaultButton = styled.button`
  background-color: inherit;
  border: none;
  background-color: var(--color-cyan);
`;
