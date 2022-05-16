import { Routes, Route } from 'react-router-dom';
import Find from './pages/Find';
import Add from './pages/Add';
import Main from './pages/Main';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { AuthProvider } from './components/contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Main />} />
          <Route path="/find" element={<Find />} />
          <Route path="/add/:id" element={<Add />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
