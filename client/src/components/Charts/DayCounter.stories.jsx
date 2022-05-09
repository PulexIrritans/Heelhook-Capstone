import DayCounter from './DayCounter';

export default {
  title: 'components/DayCounter',
  component: DayCounter,
};

const Template = args => <DayCounter {...args} />;

export const Default = Template.bind({});
Default.args = {};
