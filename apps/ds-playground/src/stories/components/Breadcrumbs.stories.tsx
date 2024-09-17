import { Breadcrumbs, BreadcrumbsProps } from '@skatteetaten/ds-navigation';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Breadcrumbs.List = { ...Breadcrumbs.List };
Breadcrumbs.List.displayName = 'Breadcrumbs.List';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Breadcrumbs.Item = { ...Breadcrumbs.Item };
Breadcrumbs.Item.displayName = 'Breadcrumbs.Item';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Breadcrumbs.Link = { ...Breadcrumbs.Link };
Breadcrumbs.Link.displayName = 'Breadcrumbs.Link';

const meta = {
  component: Breadcrumbs,
  title: 'Komponenter/Breadcrumbs/Breadcrumbs',
  argTypes: {
    children: { table: { category: category.props } },
  },
  args: {
    children: (
      <Breadcrumbs.List>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href={'#'}>
            {'Bedrift og organisasjon'}
          </Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href={'#'}>{'Avgifter'}</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href={'#'}>
            {'Avgifter på bil og kjøretøy'}
          </Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item isCurrentPage>
          <Breadcrumbs.Link href={'#'}>{'Vektårsavgift'}</Breadcrumbs.Link>
        </Breadcrumbs.Item>
      </Breadcrumbs.List>
    ),
  },
} satisfies Meta<BreadcrumbsProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args) => (
    <Breadcrumbs>
      <Breadcrumbs.List shouldCollapse>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href={'#'}>
            {'Bedrift og organisasjon'}
          </Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href={'#'}>{'Avgifter'}</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href={'#'}>
            {'Avgifter på bil og kjøretøy'}
          </Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item isCurrentPage>
          <Breadcrumbs.Link href={'#'}>{'Vektårsavgift'}</Breadcrumbs.Link>
        </Breadcrumbs.Item>
      </Breadcrumbs.List>
    </Breadcrumbs>
  ),
} satisfies Story;
Examples.parameters = exampleParameters;
