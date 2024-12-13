import { Meta, StoryObj } from '@storybook/react';

import { Breadcrumbs } from '@skatteetaten/ds-navigation';

import { category } from '../../../.storybook/helpers';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Breadcrumbs.Item = { ...Breadcrumbs.Item };
Breadcrumbs.Item.displayName = 'Breadcrumbs.Item';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Breadcrumbs.Link = { ...Breadcrumbs.Link };
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
