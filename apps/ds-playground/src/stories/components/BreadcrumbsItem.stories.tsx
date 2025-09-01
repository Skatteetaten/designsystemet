import { Meta, StoryObj } from '@storybook/react-vite';

import { Breadcrumbs } from '@skatteetaten/ds-navigation';

import { category } from '../../../.storybook/helpers';

Breadcrumbs.Item.displayName = 'Breadcrumbs.Item';
Breadcrumbs.Link.displayName = 'Breadcrumbs.Link';

const meta = {
  component: Breadcrumbs.Item,
  title: 'Komponenter/Breadcrumbs/Item',
  argTypes: {
    // Props
    children: { control: false, table: { category: category.props } },
    // Aria
    ariaCurrent: { table: { category: category.aria } },
  },
  args: {
    children: (
      <Breadcrumbs.Link href={'#'}>
        {'Bedrift og organisasjon'}
      </Breadcrumbs.Link>
    ),
  },
} satisfies Meta<typeof Breadcrumbs.Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;
