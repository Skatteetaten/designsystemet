import {
  Heading,
  headingAsArr,
  headingLevelArr,
} from '@skatteetaten/ds-typography';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { category } from '../../.storybook/helpers';

export default {
  component: Heading,
  title: 'Design System/Heading',
  argTypes: {
    // Props
    as: {
      options: [...headingAsArr],
      control: 'inline-radio',
      table: {
        category: category.props,
      },
    },
    children: {
      control: 'text',
      table: { category: category.props },
    },
    hasSpacing: {
      control: 'boolean',
      table: {
        category: category.props,
      },
    },
    level: {
      options: [...headingLevelArr],
      control: 'inline-radio',
      table: {
        category: category.props,
      },
    },
  },
} as ComponentMeta<typeof Heading>;

const TemplateDefault: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const HeadingDefault = TemplateDefault.bind({});
HeadingDefault.storyName = 'Default';

HeadingDefault.args = {
  as: 'h2',
  level: 2,
  children: 'Dette er en heading',
};

HeadingDefault.parameters = {
  design: [
    {
      name: 'font og størrelser',
      type: 'figma',
      url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=7490%3A12075',
    },
    {
      name: 'luft og avstander',
      type: 'figma',
      url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=7490%3A12036',
    },
  ],
};
