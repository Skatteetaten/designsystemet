import { Breadcrumbs, BreadcrumbsProps } from '@skatteetaten/ds-navigation';
import { Meta, StoryObj } from '@storybook/react';

import { exampleParameters } from '../utils/stories.utils';
import { category } from 'apps/ds-playground/.storybook/helpers';

const meta = {
  component: Breadcrumbs,
  title: 'Komponenter/Breadcrumbs',
  argTypes: {
    isCollapsed: { table: { category: category.props } },
  },
  args: {},
} satisfies Meta<BreadcrumbsProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args) => <Breadcrumbs />,
} satisfies Story;
Examples.parameters = exampleParameters;
