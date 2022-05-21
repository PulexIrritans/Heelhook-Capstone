import { Routes, Route } from 'react-router-dom';
import Find from './pages/Find';
import Add from './pages/Add';
import Main from './pages/Main';
import Profile from './pages/Profile';
import NotFound from './pages/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/find" element={<Find />} />
        <Route path="/add/:id" element={<Add />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
