import { render, screen } from '@testing-library/react';
import Header from './Header';

const title = 'Heelhook';

describe('Header', () => {
  it('renders a title', () => {
    render(<Header title={title} />);

    const headerTitle = screen.getByRole('heading', { name: /Heelhook/i });
    expect(headerTitle).toBeInTheDocument();
  });
});
