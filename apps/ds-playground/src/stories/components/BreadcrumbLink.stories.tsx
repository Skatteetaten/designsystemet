import { BreadcrumbLinkProps, Breadcrumbs } from '@skatteetaten/ds-navigation';
import { Meta, StoryObj } from '@storybook/react';

import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: Breadcrumbs.Link,
  title: 'Komponenter/Breadcrumbs/Link',
  args: {
    children: 'Bedrift og organisasjon',
    href: '#',
  },
} satisfies Meta<BreadcrumbLinkProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args) => (
    <Breadcrumbs.Link href={'#'}>{'Bedrift og organisasjon'}</Breadcrumbs.Link>
  ),
} satisfies Story;
Examples.parameters = exampleParameters;
