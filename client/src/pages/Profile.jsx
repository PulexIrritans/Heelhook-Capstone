import Header from '../components/Header';
import Navigation from '../components/Navigation';
import UserProfile from '../components/UserProfile';

const Profile = () => {
  return (
    <>
      <Header title="Climber Profile" />
      <main>
        <UserProfile />
      </main>
      <Navigation />
    </>
  );
};

export default Profile;
