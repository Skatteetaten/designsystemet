import { Button } from '@skatteetaten/ds-buttons';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    icon: {
      options: ['warning', 'information', 'arrow'],
      control: { type: 'radio' },
    },
  },
  knappetekst: 'Klikk meg',
  children: 'barn',
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Tertiary = Template.bind({});
export const Danger = Template.bind({});

Primary.args = {
  icon: 'arrow',
  buttonStyle: 'primary',
};

Secondary.args = {
  knappetekst: 'Knapp',
  icon: 'arrow',
  buttonStyle: 'secondary',
};

Tertiary.args = {
  knappetekst: 'Knapp',
  icon: 'arrow',
  buttonStyle: 'tertiary',
};

Danger.args = {
  knappetekst: 'Knapp',
  icon: 'warning',
  buttonStyle: 'danger',
};

Primary.parameters = {
  design: [
    {
      name: 'Varianter',
      type: 'figma',
      url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=4018%3A9627',
    },
    {
      name: 'Luft og font',
      type: 'figma',
      url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=4196%3A11211',
    },
  ],
};
