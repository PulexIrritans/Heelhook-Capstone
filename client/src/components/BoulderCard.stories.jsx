import BoulderCard from './BoulderCard';


export default {
  title: 'components/Cards/BoulderCard',
  component: BoulderCard,
};

const Template = (args) => (
<ul>
<BoulderCard {...args} />
</ul>);

export const Default = Template.bind({});
Default.args = {
  id: 2,
  name: 'Boulder Name',
  likes: 0,
  sector: 'Sector Name',
  level: 5,
  handle_color: 'yellow',
};
