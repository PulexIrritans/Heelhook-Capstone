import BoulderCard from './BoulderCard';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/Cards/BoulderCard',
  component: BoulderCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
 
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <BoulderCard {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  id: 2,
  name: 'Boulder Name',
  likes: 0,
  sector: 'Sector Name',
  level: 5,
  handle_color: 'yellow',
};
