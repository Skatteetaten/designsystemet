import { ActionButton } from '@skatteetaten/ds-buttons';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  component: ActionButton,
  title: 'ActionButton',
} as ComponentMeta<typeof ActionButton>;

const Template: ComponentStory<typeof ActionButton> = (args) => (
  <ActionButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/nMR5vipCwTyVnq9KRAbhFL/Designsystemet---delte-komponenter?node-id=8%3A25',
  },
};
