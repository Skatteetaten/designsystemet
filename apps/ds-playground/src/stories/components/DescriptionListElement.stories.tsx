import { DescriptionList } from '@skatteetaten/ds-content';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';

const meta = {
  component: DescriptionList.Element,
  title: 'Komponenter/DescriptionList/Element',
  argTypes: {
    // Props
    children: {
      control: { disable: true },
      table: { category: category.props },
    },
  },
  args: {
    term: 'Navn',
    children:
      'Et navn er en betegnelse eller tittel som brukes for å identifisere en person, et sted, en ting eller et konsept.',
  },
} satisfies Meta<typeof DescriptionList.Element>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;
