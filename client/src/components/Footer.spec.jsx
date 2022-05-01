import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { MemoryRouter as Router} from 'react-router-dom'


describe('Footer', () => {
    it('renders a navigation with one link', () => {
        render(
            <Router>
            <Footer />
            </Router>
        );

    const links = screen.getAllByRole('link');    

    expect(links).toHaveLength(1);
    })
})
