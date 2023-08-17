import { headingAsArr } from '@skatteetaten/ds-core-utils';
import { Heading, headingLevelArr } from '@skatteetaten/ds-typography';
import { StoryFn, Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: Heading,
  title: 'Komponenter/Heading',
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
  tags: ['autodocs'],
  parameters: { version: getVersion('ds-typography') },
} as Meta<typeof Heading>;
export default meta;
type Story = StoryObj<typeof meta>;

const TemplateExample: StoryFn<typeof Heading> = () => (
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

export const HeadingDefault = {
  name: 'Default',

  args: {
    as: 'h2',
    level: 2,
    children: 'Dette er en heading',
  },
} satisfies Story;

export const HeadingExample = {
  render: TemplateExample,
  name: 'Example',

  parameters: {
    controls: { disabled: true },
  },
} satisfies Story;
