import { render, screen } from '@testing-library/react';
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
          const cardPicture = screen.getByRole('img');
          const button = screen.getByRole('button');

          const name = screen.getByText(/Black widow and the people/i);
          const id = screen.getByText(/#1/);
          const sector = screen.getByText(/Monkey Island/i);
          const level = screen.getByText(/Level: 5/);
          const handle_color = screen.getByText(/black/);

          expect(cardPicture).toBeInTheDocument();
          expect(cardHeader).toHaveTextContent('Black Widow and the people');
          expect(button).toBeInTheDocument();
          expect(name).toBeInTheDocument();
          expect(id).toBeInTheDocument();
          expect(sector).toBeInTheDocument();
          expect(level).toBeInTheDocument();
          expect(handle_color).toBeInTheDocument();
      })
  })