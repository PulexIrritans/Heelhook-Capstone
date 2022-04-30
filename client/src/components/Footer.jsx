import { NavLink } from 'react-router-dom';
import { ReactComponent as Search } from '../icons/search.svg';
import { ReactComponent as Add } from '../icons/add.svg';
import styled from 'styled-components';

const Footer = ({}) => {
  const activeStyle = {
    backgroundColor: 'blue',
  };
  return (
    <StyledFooter>
     
          <StyledNavLink
            // style={({ isActive }) => isActive ? undefined : activeStyle}
            to="/"
          >
            <Search style={{width: '50px'}}/>
          </StyledNavLink>
       
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.nav`
width: 100%;
  max-width: 768px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid var(--border-color);
  background-color: var(--color-light-gray);
  position: fixed;
  bottom: 0;
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



