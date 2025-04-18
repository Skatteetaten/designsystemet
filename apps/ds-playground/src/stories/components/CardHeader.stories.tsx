import { Meta, StoryObj } from '@storybook/react';

import { Card } from '@skatteetaten/ds-content';

import { category } from '../../../.storybook/helpers';

Card.Header.displayName = 'Card.Header';

const defaultText =
  'Gruppering av opplysninger i skjema, for eksempel inntekter, personer eller oppsummeringer.';

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
    spacingVertical: {
      table: { category: category.props },
    },
    classNames: {
      control: false,
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
