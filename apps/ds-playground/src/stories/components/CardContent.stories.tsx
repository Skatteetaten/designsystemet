import { Meta, StoryObj } from '@storybook/react';

import { Card } from '@skatteetaten/ds-content';

import { category } from '../../../.storybook/helpers';

Card.Content.displayName = 'Card.Content';

const defaultText =
  'Gruppering av opplysninger i skjema, for eksempel inntekter, personer eller oppsummeringer.';

const defaultArgs = {
  children: defaultText,
};

const meta = {
  component: Card.Content,
  title: 'Komponenter/Card/Content',
  argTypes: {
    // Props
    children: {
      control: 'text',
      table: { category: category.props },
    },
    rightContent: {
      control: 'text',
      table: { category: category.props },
    },
    classNames: {
      control: false,
      table: { category: category.props },
    },
  },
  args: {
    ...defaultArgs,
  },
} satisfies Meta<typeof Card.Content>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  render: (args) => (
    <Card>
      <Card.Content {...args} />
    </Card>
  ),
} satisfies Story;
