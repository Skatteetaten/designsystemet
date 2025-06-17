import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Heading } from '@skatteetaten/ds-typography';

import { category } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: Heading,
  title: 'Komponenter/Heading',
  argTypes: {
    // Props
    as: {
      control: 'inline-radio',
      table: {
        category: category.props,
      },
    },
    canBeManuallyFocused: { table: { category: category.props } },
    children: {
      control: 'text',
      table: { category: category.props },
    },
    hasSpacing: { table: { category: category.props } },
    level: {
      control: 'inline-radio',
      table: {
        category: category.props,
      },
    },
  },
  args: {
    as: 'h2',
    level: 2,
    children: 'Overskrift',
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    return (
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
  },
} satisfies Story;
Examples.parameters = exampleParameters;
