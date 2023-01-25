import { List } from '@skatteetaten/ds-typography';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { category } from '../../.storybook/helpers';

export default {
  component: List.Element,
  title: 'Design System/List/List.Element',
  argTypes: {
    // Props
    children: { table: { category: category.props }, control: 'text' },
  },
} as ComponentMeta<typeof List.Element>;

const TemplateDefault: ComponentStory<typeof List.Element> = (args) => (
  <List.Element {...args} />
);

export const ListElementDefault = TemplateDefault.bind({});
ListElementDefault.storyName = 'Default';

ListElementDefault.args = {
  children: 'Kjenner du behovet til brukeren?',
};

ListElementDefault.parameters = {
  design: [
    {
      name: 'varianter og font',
      type: 'figma',
      url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=7490%3A12391&t=2mJsV7woWcwQI3i6-0',
    },
    {
      name: 'luft og avstander',
      type: 'figma',
      url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=7490%3A12419&t=D45Mkl3WbJqk8vM4-0',
    },
  ],
};
