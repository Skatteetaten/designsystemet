import { Meta, StoryObj } from '@storybook/react';

import { Card } from '@skatteetaten/ds-content';

import { category } from '../../../.storybook/helpers';

Card.Actions.displayName = 'Card.Actions';

const defaultText =
  'Gruppering av opplysninger i skjema, for eksempel inntekter, personer eller oppsummeringer.';

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
    spacingVertical: {
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
