import Login from '../components/Firebase/Login';
import styled from 'styled-components';

const LoginPage = () => {
  return (
    <LandingWrapper>
      <h1>Heelhook</h1>
      <Login />
    </LandingWrapper>
  );
};

export default LoginPage;

const LandingWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
