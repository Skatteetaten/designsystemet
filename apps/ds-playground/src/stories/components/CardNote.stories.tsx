import { Meta, StoryObj } from '@storybook/react';

import { Card, getCardNoteVariantDefault } from '@skatteetaten/ds-content';

import { category } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';

Card.Note.displayName = 'Card.Note';

const defaultText =
  'Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.';

const defaultArgs = {
  children: defaultText,
  title: 'Merknad',
};

const meta = {
  component: Card.Note,
  title: 'Komponenter/Card/Note',
  argTypes: {
    // Props
    children: {
      control: 'text',
      table: { category: category.props },
    },
    variant: {
      table: {
        category: category.props,
        defaultValue: { summary: getCardNoteVariantDefault() },
      },
    },
    showNote: {
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
      },
    },
    svgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: { category: category.props },
    },
    // Events
    onClose: { control: false, table: { category: category.event } },
  },
  args: {
    ...defaultArgs,
    title: 'Merknad',
  },
} satisfies Meta<typeof Card.Note>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  render: (args) => (
    <Card>
      <Card.Note {...args} />
    </Card>
  ),
} satisfies Story;
