import { Routes, Route } from 'react-router-dom';
import Find from './pages/Find';
import Add from './pages/Add';

function App() {
  const bouldersList = [
    {
      id: '1',
      name: 'Black Widow and the people',
      sector: 'Monkey Island',
      level: '5',
      hold_color: 'black',
      setter: 'Martin Pagels',
      tags: ['Dyno', 'Sloper'],
      img_start: 'Boulder-girl.jpg',
      img_all: 'imageAll.jpg',
      weighting: 100,
      number_of_likes: 5,
      start_date: '2022-04-26',
      expiry_date: '',
      climbers: [],
    },
    {
      id: '2',
      name: 'Orang Utan',
      sector: 'Monkey Island',
      level: '3',
      hold_color: 'blue',
      setter: 'Stefan Korder',
      tags: ['Sloper'],
      img_start: 'Boulder-girl.jpg',
      img_all: 'imageAll.jpg',
      weighting: 100,
      number_of_likes: 2,
      start_date: '2022-04-26',
      expiry_date: '',
      climbers: [],
    },
    {
      id: '3',
      name: 'Tarzan',
      sector: 'Monkey Island',
      level: '3',
      hold_color: 'white',
      setter: 'Stefan Korder',
      tags: ['Travers'],
      img_start: 'Boulder-girl.jpg',
      img_all: 'imageAll.jpg',
      weighting: 100,
      number_of_likes: 2,
      start_date: '2022-04-26',
      expiry_date: '',
      climbers: [],
    },
  ];

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Find bouldersList={bouldersList} />} />
        <Route path="/add/:id" element={<Add bouldersList={bouldersList} />} />
      </Routes>
    </div>
  );
}

export default App;
