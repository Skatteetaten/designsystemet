import { Meta, StoryObj } from '@storybook/react';

import {
  Card,
  getCardAlertVariantDefault,
  getCardAlertTitleAsDefault,
  getCardAlertSvgPathDefault,
} from '@skatteetaten/ds-content';

import { category } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';

Card.Alert.displayName = 'Card.Alert';

const defaultText =
  'Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.';

const defaultArgs = {
  children: defaultText,
  title: 'Merknad',
};

const meta = {
  component: Card.Alert,
  title: 'Komponenter/Card/Alert',
  argTypes: {
    // Props
    children: {
      control: 'text',
      table: { category: category.props },
    },
    variant: {
      table: {
        category: category.props,
        defaultValue: { summary: getCardAlertVariantDefault() },
      },
    },
    showAlert: {
      table: {
        category: category.props,
      },
    },
    title: {
      table: {
        category: category.props,
      },
    },
    titleAs: {
      table: {
        category: category.props,
        defaultValue: { summary: getCardAlertTitleAsDefault() },
      },
    },
    svgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: {
        category: category.props,
        defaultValue: {
          summary: getCardAlertSvgPathDefault(
            getCardAlertVariantDefault()
          ).toString(),
        },
      },
    },
    // Events
    onClose: { control: false, table: { category: category.event } },
  },
  args: {
    ...defaultArgs,
    title: 'Merknad',
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
