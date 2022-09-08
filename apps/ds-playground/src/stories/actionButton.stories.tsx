import { ActionButton } from '@skatteetaten/ds-buttons';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  component: ActionButton,
  title: 'Design System/ActionButton',
} as ComponentMeta<typeof ActionButton>;

const Template: ComponentStory<typeof ActionButton> = (args) => (
  <ActionButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

Primary.parameters = {
  design: [
    {
      name: 'varianter',
      type: 'figma',
      url: 'https://www.figma.com/file/nMR5vipCwTyVnq9KRAbhFL/Designsystemet---delte-komponenter?node-id=8%3A25',
    },
    {
      name: 'spacing',
      type: 'figma',
      url: 'https://www.figma.com/file/nMR5vipCwTyVnq9KRAbhFL/Designsystemet---delte-komponenter?node-id=29%3A136',
    },
    {
      name: 'tilstander',
      type: 'figma',
      url: 'https://www.figma.com/file/nMR5vipCwTyVnq9KRAbhFL/Designsystemet---delte-komponenter?node-id=29%3A437',
    },
  ],
};
