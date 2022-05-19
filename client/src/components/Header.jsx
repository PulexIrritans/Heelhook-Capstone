import styled from 'styled-components';

const Header = ({ title }) => {
  return (
    <StyledHeader>
      <HeaderH1>{title}</HeaderH1>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  background-color: var(--color-cyan);
  text-align: center;
`;

const HeaderH1 = styled.h1`
  color: inherit;
  padding: 0.4rem 0;
`;
