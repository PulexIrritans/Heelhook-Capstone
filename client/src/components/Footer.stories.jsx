import Footer from './Footer';
import { MemoryRouter as Router } from 'react-router-dom';


export default {
  title: 'components/Footer',
  component: Footer,
//   argTypes: { onClick: 'onClick' },
};

const Template = (args) => (
<Router>
<Footer {...args} />
</Router>
);

export const Default = Template.bind({});