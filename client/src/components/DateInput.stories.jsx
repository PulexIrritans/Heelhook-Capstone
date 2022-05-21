import DateInput from './DateInput';

export default {
  title: 'components/DateInput',
  component: DateInput,
};

const Template = args => <DateInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Birthday',
  text_content: 'Birthday',
  required: false,
  disabled: false,
  value: '2020-05-02',
};
