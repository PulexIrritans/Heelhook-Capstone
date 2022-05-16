import Signup from '../components/Firebase/Signup';
import styled from 'styled-components';

const SignupPage = () => {
  return (
    <LandingWrapper>
      <h1>Heelhook</h1>
      <Signup />
    </LandingWrapper>
  );
};

export default SignupPage;

const LandingWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
