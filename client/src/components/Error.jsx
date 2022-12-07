import styled from 'styled-components';

const Error = ({ content }) => {
  return <ErrorMessage>{content}</ErrorMessage>;
};

export default Error;

const ErrorMessage = styled.p`
  background-color: rgb(255, 0, 0, 0.2);
  text-align: center;
  padding: 0.5rem;
  border-radius: var(--border-radius);
`;
