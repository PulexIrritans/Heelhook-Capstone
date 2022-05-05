import AddClimbedBoulderForm from './AddClimbedBoulderForm';

export default {
  title: 'components/Forms/AddClimbedBoulderForm',
  component: AddClimbedBoulderForm,
};

const Template = args => <AddClimbedBoulderForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  formPrefilledClimbedBoulder: {
    projected: false,
    attempts: 8,
    result: 'top',
    liked: true,
    level_feedback: 0,
  },
};
