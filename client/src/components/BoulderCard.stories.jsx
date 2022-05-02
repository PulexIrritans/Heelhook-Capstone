import BoulderCard from './BoulderCard';
import { MemoryRouter as Router } from 'react-router-dom';

export default {
  title: 'components/Cards/BoulderCard',
  component: BoulderCard,
  argTypes: { onClick: 'onClick' },
};

const Template = args => (
  <Router>
    <ul>
      <BoulderCard {...args} />
    </ul>
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  id: 2,
  name: 'Boulder Name',
  likes: 0,
  sector: 'Sector Name',
  level: 5,
  handle_color: 'yellow',
  tags: ['Sloper', 'Dyno'],
  setter: 'Martin Pagels',
  weighting: 100,
};
