import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { CheckSVGpath, WarningSVGpath } from '@skatteetaten/ds-icons';
import {
  Tag,
  getTagColorDefault,
  getTagSizeDefault,
} from '@skatteetaten/ds-status';

import { category } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: Tag,
  title: 'Komponenter/Tag',
  argTypes: {
    // Props
    canBeManuallyFocused: { table: { category: category.props } },
    children: { control: 'text', table: { category: category.props } },
    color: {
      table: {
        category: category.props,
        defaultValue: { summary: getTagColorDefault() },
      },
    },
    size: {
      table: {
        category: category.props,
        defaultValue: { summary: getTagSizeDefault() },
      },
    },
    svgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: { category: category.props },
    },
  },
  args: {
    children: 'Endret',
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    return (
      <div className={'flex gapXs'}>
        <Tag>{'Endret'}</Tag>
        <Tag color={'forest'} svgPath={CheckSVGpath}>
          {'Godkjent'}
        </Tag>
        <Tag color={'burgundy'} svgPath={WarningSVGpath}>
          {'Særavgift'}
        </Tag>
        <Tag color={'graphite'}>{'Info'}</Tag>
      </div>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
