import BoulderCard from './BoulderCard';

export default {
  title: 'components/Cards/BoulderCard',
  component: BoulderCard,
  argTypes: { onClick: 'onClick' },
};

const Template = args => (
  <ul>
    <BoulderCard {...args} />
  </ul>
);

const boulder = {};

export const Default = Template.bind({});
Default.args = {
  boulder: {
    id: '2',
    name: 'Boulder Name',
    number_of_likes: 0,
    sector: 'Sector Name',
    level: 5,
    hold_color: 'yellow',
    tags: ['Sloper', 'Dyno'],
    setter: 'Martin Pagels',
    weighting: 100,
  },
};
