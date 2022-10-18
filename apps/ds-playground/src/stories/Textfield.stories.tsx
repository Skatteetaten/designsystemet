import { Textfield } from '@skatteetaten/ds-forms';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  component: Textfield,
  title: 'Design System/Textfield',
} as ComponentMeta<typeof Textfield>;

const Template: ComponentStory<typeof Textfield> = (args) => (
  <Textfield {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
