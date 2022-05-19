import { Routes, Route } from 'react-router-dom';
import Find from './pages/Find';
import Add from './pages/Add';
import Main from './pages/Main';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/find" element={<Find />} />
        <Route path="/add/:id" element={<Add />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
