import { Breadcrumbs, BreadcrumbsProps } from '@skatteetaten/ds-navigation';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: Breadcrumbs,
  title: 'Komponenter/Breadcrumbs/Breadcrumbs',
  argTypes: {
    shouldCollapse: { table: { category: category.props } },
  },
  args: {
    children: (
      <Breadcrumbs shouldCollapse>
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

        <Breadcrumbs.Item>
          <Breadcrumbs.Link href={'#'}>{'Vektårsavgift'}</Breadcrumbs.Link>
        </Breadcrumbs.Item>
      </Breadcrumbs>
    ),
  },
} satisfies Meta<BreadcrumbsProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args) => (
    <Breadcrumbs shouldCollapse>
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

      <Breadcrumbs.Item>
        <Breadcrumbs.Link href={'#'}>{'Vektårsavgift'}</Breadcrumbs.Link>
      </Breadcrumbs.Item>
    </Breadcrumbs>
  ),
} satisfies Story;
Examples.parameters = exampleParameters;
