import { BreadcrumbItemProps, Breadcrumbs } from '@skatteetaten/ds-navigation';
import { Meta, StoryObj } from '@storybook/react';

import { exampleParameters } from '../utils/stories.utils';

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

export const Examples: Story = {
  render: (_args) => (
    <Breadcrumbs.Item>
      <Breadcrumbs.Link href={'#'}>
        {'Bedrift og organisasjon'}
      </Breadcrumbs.Link>
    </Breadcrumbs.Item>
  ),
} satisfies Story;
Examples.parameters = exampleParameters;
