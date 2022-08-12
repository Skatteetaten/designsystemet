import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './';

export default {
  component: Button,
  title: 'Button'
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
