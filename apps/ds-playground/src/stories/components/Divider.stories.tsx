import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Divider } from '@skatteetaten/ds-content';

import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: Divider,
  title: 'Komponenter/Divider',
  argTypes: {
    // Props
  },
  args: {},
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    return <Divider />;
  },
} satisfies Story;
Examples.parameters = exampleParameters;
