import { ActionButton } from '@skatteetaten/designsystem-buttons';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  component: ActionButton,
  title: 'ActionButton',
} as ComponentMeta<typeof ActionButton>;

const Template: ComponentStory<typeof ActionButton> = args => (
  <ActionButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
