import { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from '@skatteetaten/ds-content';

import { category } from '../../../.storybook/helpers';

Card.Header.displayName = 'Card.Header';

const meta = {
  component: Card.Header,
  title: 'Komponenter/Card/Header',
  argTypes: {
    // Props
    children: { control: 'text', table: { category: category.props } },
    classNames: { control: false, table: { category: category.props } },
    rightContent: { control: 'text', table: { category: category.props } },
  },
  args: {
    children:
      'Gruppering av opplysninger i skjema, for eksempel inntekter, personer eller oppsummeringer.',
    rightContent: 'høyrejustert innhold',
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
