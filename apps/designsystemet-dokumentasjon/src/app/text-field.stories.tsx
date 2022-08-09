import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField } from "@skatteetaten/designsystemet-textfield"

export default {
  component: TextField,
  title: 'textField fra /designsystemet-dokumentasjon',
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
