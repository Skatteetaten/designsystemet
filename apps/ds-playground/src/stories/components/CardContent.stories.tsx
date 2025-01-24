import { Meta, StoryObj } from '@storybook/react';

import { Card } from '@skatteetaten/ds-content';

import { category } from '../../../.storybook/helpers';

Card.Content.displayName = 'Card.Content';

const defaultText =
  'Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.';

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
    spacingVertical: {
      table: { category: category.props },
    },
    classNames: {
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
