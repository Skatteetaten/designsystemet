import { Button } from '@skatteetaten/ds-buttons';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ItemStory from './item.stories';

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    icon: {
      options: ['warning', 'notinuse', 'arrow'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Tertiary = Template.bind({});
export const Danger = Template.bind({});

const baseArgs = {
  icon: 'arrow',
};

Primary.args = {
  ...baseArgs,
  buttonStyle: 'primary',
  children: <ItemStory {...ItemStory.args} />,
};
Primary.storyName = 'Dette er Primary';
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
  backgrounds: {
    values: [
      { name: 'white', value: '#000' },
      { name: 'black', value: '#fff' },
    ],
  },
};

Secondary.args = {
  ...baseArgs,
  buttonStyle: 'secondary',
};
/* Secondary.parameters = {
  {
    ...Primary.parameters,
    design: {}
  }
}; */

Tertiary.args = {
  ...baseArgs,
  knappetekst: 'Knapp Tertiary',
  buttonStyle: 'tertiary',
};

Danger.args = {
  ...baseArgs,
  knappetekst: 'Knapp',
  buttonStyle: 'danger',
};

/* export const Main = Template.bind({});
Main.args = {
  buttonStyle: [
    { ...actionButtonStories.primary.args },
    { ...actionButtonStories.Secondary.args },
  ],
  orientation: 'horizontal',
}; */
