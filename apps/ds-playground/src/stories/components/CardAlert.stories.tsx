import { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from '@skatteetaten/ds-content';

import {
  category,
  htmlEventDescription,
  svgPathDescription,
} from '../../../.storybook/helpers';

Card.Alert.displayName = 'Card.Alert';

const meta = {
  component: Card.Alert,
  title: 'Komponenter/Card/Alert',
  argTypes: {
    // Props
    children: { control: 'text', table: { category: category.props } },
    variant: { table: { category: category.props } },
    showAlert: { table: { category: category.props } },
    title: { table: { category: category.props } },
    titleAs: { table: { category: category.props } },
    svgPath: { ...svgPathDescription },
    // Events
    onClose: { ...htmlEventDescription },
  },
  args: {
    children:
      'Gruppering av opplysninger i skjema, for eksempel inntekter, personer eller oppsummeringer.',
    title: 'Merknad',
    showAlert: true,
  },
} satisfies Meta<typeof Card.Alert>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  render: (args) => (
    <Card>
      <Card.Alert {...args} />
    </Card>
  ),
} satisfies Story;
