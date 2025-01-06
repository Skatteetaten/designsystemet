import { Meta, StoryObj } from '@storybook/react';

import { Card } from '@skatteetaten/ds-content';

import { category } from '../../../.storybook/helpers';

Card.Header.displayName = 'Card.Header';

const defaultText =
  'Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.';

const defaultArgs = {
  children: defaultText,
  rightContent: 'høyrejustert innhold',
};

const meta = {
  component: Card.Header,
  title: 'Komponenter/Card/Header',
  argTypes: {
    // Props
    children: {
      control: 'text',
      table: { category: category.props },
    },
    spacing: {
      table: { category: category.props },
    },
    rightContent: {
      control: 'text',
      table: { category: category.props },
    },
  },
  args: {
    ...defaultArgs,
  },
} satisfies Meta<typeof Card.Header>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  render: (args) => (
    <Card>
      <Card.Header {...args} />
    </Card>
  ),
} satisfies Story;
