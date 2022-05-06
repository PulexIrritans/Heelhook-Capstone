import { Routes, Route } from 'react-router-dom';
import Find from './pages/Find';
import Add from './pages/Add';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/find" element={<Find />} />
        <Route path="/add/:id" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
