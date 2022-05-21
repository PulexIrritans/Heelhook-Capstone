import TextInput from './TextInput';

export default {
  title: 'components/TextInput',
  component: TextInput,
};

const Template = args => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'User name*',
  placeholder: 'BoulderQueen',
  required: true,
  value: 'BoulderQueen',
  minLength: 8,
  maxLength: 20,
  disabled: false,
};
