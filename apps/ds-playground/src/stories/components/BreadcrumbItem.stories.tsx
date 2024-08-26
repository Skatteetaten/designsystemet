import { BreadcrumbItemProps, Breadcrumbs } from '@skatteetaten/ds-navigation';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Breadcrumbs.Item,
  title: 'Komponenter/Breadcrumbs/Item',
  args: {
    children: (
      <Breadcrumbs.Link href={'#'}>
        {'Bedrift og organisasjon'}
      </Breadcrumbs.Link>
    ),
  },
} satisfies Meta<BreadcrumbItemProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;
