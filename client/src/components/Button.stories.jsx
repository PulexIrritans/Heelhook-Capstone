import Button from './Button';

export default {
  title: 'components/Button',
  component: Button,
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Save',
  type: 'Submit',
};
