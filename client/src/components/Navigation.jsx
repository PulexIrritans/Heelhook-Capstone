import { NavLink } from 'react-router-dom';
import { RiHome2Line } from 'react-icons/ri';
import { ReactComponent as Search } from '../icons/search.svg';
import styled from 'styled-components';

const Navigation = () => {
  return (
    <StyledNavigation>
      <StyledNavLink to="/">
        <HomeIcon />
      </StyledNavLink>
      <StyledNavLink to="/find">
        <Search style={{ width: '50px' }} />
      </StyledNavLink>
    </StyledNavigation>
  );
};

export default Navigation;

const HomeIcon = styled(RiHome2Line)`
  width: 50px;
  height: 50px;
`;

const StyledNavigation = styled.nav`
  width: 100%;
  max-width: 768px;
  display: flex;
  align-items: center;
  border-top: 1px solid var(--border-color);
  background-color: var(--color-light-gray);
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 0.2rem;
  color: inherit;
  text-decoration: none;
  &.active {
    background-color: var(--color-cyan);
  }
`;
