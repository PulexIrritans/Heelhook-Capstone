import BoulderCard from './BoulderCard';

const Boulder = {
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
  }

  describe('BoulderCard', () => {
      it('renders the a list item with a title, an img, 5 details and a button', () => {
          render(
              <BoulderCard id={Boulder.number} name={Boulder.name} 
              sector={Boulder.sector} level={Boulder.level} handle_color={Boulder.handle_color}
              likes = {Boulder.number_of_likes}/>
          );
          const cardHeader = screen.getByRole('heading');
          expect(cardHeader).toHaveTextContent('Black Widow and the people');

          const cardPicture = screen.getByRole('img');
          expect(cardPicture).toBeInTheDocument();

      })
  })