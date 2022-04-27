import { useState } from 'react';
import './App.css';

function App() {
 
  const bouldersList = [
    {
      id: 1,
      name: 'Black Widow and the people',
      sector: 'Monkey Island',
      level: '5',
      handle_color: 'black',
      setter: 'Martin Pagels',
      tags: ['Dyno', 'Sloper'],
      img_start: 'image.jpg',
      img_all: 'imageAll.jpg',
      weighting: 100,
      number_of_likes: 5,
      start_date: '2022-04-26',
      expiry_date: '',
      climbers: [],
    },
    {
      id: 2,
      name: 'Orang Utan',
      sector: 'Monkey Island',
      level: '3',
      handle_color: 'blue',
      setter: 'Stefan Korder',
      tags: ['Sloper'],
      img_start: 'image.jpg',
      img_all: 'imageAll.jpg',
      weighting: 100,
      number_of_likes: 2,
      start_date: '2022-04-26',
      expiry_date: '',
      climbers: [],
    },
    {
      id: 3,
      name: 'Tarzan',
      sector: 'Monkey Island',
      level: '3',
      handle_color: 'white',
      setter: 'Stefan Korder',
      tags: ['Travers'],
      img_start: 'image.jpg',
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
    <ul>
      {bouldersList.map(boulder => { return(
        <li key={boulder.id}>
          <p>{boulder.id}</p>
          <p>{boulder.name}</p>
        </li>
      )})}
    </ul>
    </div>
  );
}

export default App;
