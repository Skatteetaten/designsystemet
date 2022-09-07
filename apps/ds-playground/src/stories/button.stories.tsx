import { Button } from '@skatteetaten/ds-buttons';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  component: Button,
  title: 'Design System/Button',
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => <Button />;

export const Primary = Template.bind({});
Primary.args = {};
