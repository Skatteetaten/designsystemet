import {
  Heading,
  headingAsArr,
  headingLevelArr,
} from '@skatteetaten/ds-typography';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { category } from '../../.storybook/helpers';
import { getParameters } from './utils/parameters.utils';

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

const TemplateExample: ComponentStory<typeof Heading> = () => (
  <>
    <Heading as={'h1'} level={1} hasSpacing>
      {'Overskriftsnivå 1'}
    </Heading>
    <Heading as={'h2'} level={2} hasSpacing>
      {'Overskriftsnivå 2'}
    </Heading>
    <Heading as={'h3'} level={3} hasSpacing>
      {'Overskriftsnivå 3'}
    </Heading>
    <Heading as={'h4'} level={4} hasSpacing>
      {'Overskriftsnivå 4'}
    </Heading>
    <Heading as={'h5'} level={5} hasSpacing>
      {'Overskriftsnivå 5'}
    </Heading>
    <Heading as={'h6'} level={5} hasSpacing>
      {'Overskriftsnivå 6'}
    </Heading>
  </>
);

const designParameters = [
  {
    name: 'Font og størrelser',
    type: 'figma',
    url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=7490%3A12075',
  },
  {
    name: 'Luft og avstander',
    type: 'figma',
    url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=7490%3A12036',
  },
];

export const HeadingDefault = TemplateDefault.bind({});
export const HeadingExample = TemplateExample.bind({});
HeadingDefault.storyName = 'Default';
HeadingExample.storyName = 'Example';
HeadingDefault.parameters = getParameters(designParameters);
HeadingExample.parameters = getParameters(designParameters);

HeadingDefault.args = {
  as: 'h2',
  level: 2,
  children: 'Dette er en heading',
};
