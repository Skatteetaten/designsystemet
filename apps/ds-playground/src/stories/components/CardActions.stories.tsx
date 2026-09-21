import { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from '@skatteetaten/ds-content';

import { category } from '../../../.storybook/helpers';

Card.Actions.displayName = 'Card.Actions';

const meta = {
  component: Card.Actions,
  title: 'Komponenter/Card/Actions',
  argTypes: {
    // Props
    children: { control: 'text', table: { category: category.props } },
  },
  args: {
    children:
      'Gruppering av opplysninger i skjema, for eksempel inntekter, personer eller oppsummeringer.',
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
