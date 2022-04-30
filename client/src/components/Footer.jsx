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
      <FooterUl>
        <FooterLi>
          <NavLink
            // style={({ isActive }) => isActive ? undefined : activeStyle}
            activeStyle={{backgroundColor: 'blue'}}
            to="/"
          >
            <Search style={{width: '50px'}}/>
          </NavLink>
        </FooterLi>
      </FooterUl>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
`;

const FooterUl = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const FooterLi = styled.li`
  padding: 1rem 0;
`;

const StyledNavLink = styled(NavLink)`
overflow: auto;
`;


