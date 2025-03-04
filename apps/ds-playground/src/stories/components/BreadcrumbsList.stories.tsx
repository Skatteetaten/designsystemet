import { Meta, StoryObj } from '@storybook/react';

import {
  Breadcrumbs,
  getBreadcrumbsListShouldCollapseDefault,
  getBreadcrumbsListShowLastItemAsCurrentPageDefault,
} from '@skatteetaten/ds-navigation';

import { category } from '../../../.storybook/helpers';

Breadcrumbs.List.displayName = 'Breadcrumbs.List';
Breadcrumbs.Item.displayName = 'Breadcrumbs.Item';
Breadcrumbs.Link.displayName = 'Breadcrumbs.Link';

const meta = {
  component: Breadcrumbs.List,
  title: 'Komponenter/Breadcrumbs/List',
  argTypes: {
    // Props
    children: { control: false, table: { category: category.props } },
    shouldCollapse: {
      table: {
        category: category.props,
        defaultValue: {
          summary: getBreadcrumbsListShouldCollapseDefault().toString(),
        },
      },
    },
    showLastItemAsCurrentPage: {
      table: {
        category: category.props,
        defaultValue: {
          summary:
            getBreadcrumbsListShowLastItemAsCurrentPageDefault().toString(),
        },
      },
    },
  },
  args: {
    children: [
      <Breadcrumbs.Item key={'i1'}>
        <Breadcrumbs.Link href={'#'}>
          {'Bedrift og organisasjon'}
        </Breadcrumbs.Link>
      </Breadcrumbs.Item>,
      <Breadcrumbs.Item key={'i2'}>
        <Breadcrumbs.Link href={'#'}>{'Avgifter'}</Breadcrumbs.Link>
      </Breadcrumbs.Item>,
      <Breadcrumbs.Item key={'i3'}>
        <Breadcrumbs.Link href={'#'}>
          {'Avgifter på bil og kjøretøy'}
        </Breadcrumbs.Link>
      </Breadcrumbs.Item>,
      <Breadcrumbs.Item key={'i4'}>
        <Breadcrumbs.Link href={'#'}>{'Vektårsavgift'}</Breadcrumbs.Link>
      </Breadcrumbs.Item>,
    ],
  },
} satisfies Meta<typeof Breadcrumbs.List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;
