import { Meta, StoryObj } from '@storybook/react';

import { Card } from '@skatteetaten/ds-content';

import { category } from '../../../.storybook/helpers';

Card.Actions.displayName = 'Card.Actions';

const defaultText =
  'Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.';

const defaultArgs = {
  children: defaultText,
};

const meta = {
  component: Card.Actions,
  title: 'Komponenter/Card/Actions',
  argTypes: {
    // Props
    children: {
      control: 'text',
      table: { category: category.props },
    },
    spacing: {
      table: { category: category.props },
    },
  },
  args: {
    ...defaultArgs,
  },
} satisfies Meta<typeof Card.Actions>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  render: (args) => (
    <Card>
      <Card.Actions {...args} />
    </Card>
  ),
} satisfies Story;
