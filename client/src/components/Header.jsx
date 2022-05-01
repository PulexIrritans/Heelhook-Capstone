import styled from 'styled-components';

const Header = () => {
  return (
      <StyledHeader>
      <HeaderH1>Heelhook</HeaderH1>
      </StyledHeader>
  )
};

export default Header;

const StyledHeader = styled.div`
  background-color: var(--color-cyan);
  text-align: center;
`;

const HeaderH1 = styled.h1`
  color: inherit;
  padding: 0.5rem 0;
`;
