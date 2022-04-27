import './App.css';
import BoulderCard from './components/BoulderCard';

function App() {
 
  const bouldersList = [
    {
      number: 1,
      name: 'Black Widow and the people',
      sector: 'Monkey Island',
      level: '5',
      handle_color: 'black',
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
      number: 2,
      name: 'Orang Utan',
      sector: 'Monkey Island',
      level: '3',
      handle_color: 'blue',
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
      number: 3,
      name: 'Tarzan',
      sector: 'Monkey Island',
      level: '3',
      handle_color: 'white',
      setter: 'Stefan Korder',
      tags: ['Travers'],
      img_start: 'Boulder-girl.jpg',
      img_all: 'imageAll.jpg',
      weighting: 100,
      number_of_likes: 2,
      start_date: '2022-04-26',
      expiry_date: '',
      climbers: [],
    }
  ];


  return (
    <div className="App">
     <ul>
      {bouldersList.map(boulder => (
        <BoulderCard 
        key={boulder.number}
        id={boulder.number}
        name={boulder.name}
        sector={boulder.sector}
        level={boulder.level}
        handle_color={boulder.handle_color}
        img_start={boulder.img_start}
        likes={boulder.number_of_likes}
        />
      ))}
     </ul>
    </div>
  );
}

export default App;
