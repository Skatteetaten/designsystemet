import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import {
  Blockquote,
  getBlockquoteBorderColorDefault,
} from '@skatteetaten/ds-typography';

import { category } from '../../../.storybook/helpers';
import { loremIpsum } from '../__tests__/testUtils/storybook.testing.utils';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: Blockquote,
  title: 'Komponenter/Blockquote',
  argTypes: {
    // Props
    canBeManuallyFocused: { table: { category: category.props } },
    children: {
      control: 'text',
      table: { category: category.props },
    },
    hasSpacing: { table: { category: category.props } },
    borderColor: {
      table: {
        category: category.props,
        defaultValue: { summary: getBlockquoteBorderColorDefault() },
      },
    },
  },
  args: {
    children: loremIpsum,
  },
} satisfies Meta<typeof Blockquote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    return (
      <Blockquote>
        {
          'Skatteetaten jobber målrettet sammen med andre samarbeidspartnere for at det skal være enkelt å gjøre rett og vanskelig å gjøre feil.'
        }
      </Blockquote>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;

export const ExampleWithInlineStyling: Story = {
  render: (_args): JSX.Element => {
    return (
      <Blockquote>
        {'«God design handler om '}
        <strong>{'klarhet'}</strong>
        {', men også om '}
        <em>{'forståelse'}</em>
        {' og intensjon.»'}
      </Blockquote>
    );
  },
} satisfies Story;
ExampleWithInlineStyling.storyName = 'Blockquote med utheving';
ExampleWithInlineStyling.parameters = exampleParameters;
