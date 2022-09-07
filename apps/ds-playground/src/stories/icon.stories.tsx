import { MyIcon as DefaultIcon } from '@skatteetaten/ds-icons';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import './icon.css';

export default {
  component: DefaultIcon,
  title: 'Design System/Icon',
} as ComponentMeta<typeof DefaultIcon>;

const Template: ComponentStory<typeof DefaultIcon> = (args) => (
  <div style={{ width: '150px' }}>
    <DefaultIcon {...args} />
  </div>
);
export const MyIcon = Template.bind({});

MyIcon.argTypes = {
  className: { control: 'select', options: ['myIconClassname'] },
  title: { control: 'text' },
  'aria-label': { control: 'text' },
  role: { control: 'text' },
  viewBox: { control: 'text' },
  size: { control: 'select', options: ['small', 'medium', 'large'] },
};

MyIcon.args = {
  title: 'Default title',
  viewBox: '0 0 24 24',
};
