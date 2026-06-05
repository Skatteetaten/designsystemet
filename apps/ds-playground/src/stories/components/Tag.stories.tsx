import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { CheckSVGpath, WarningSVGpath } from '@skatteetaten/ds-icons';
import { Tag } from '@skatteetaten/ds-status';

import { category, svgPathDescription } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: Tag,
  title: 'Komponenter/Tag',
  argTypes: {
    // Props
    canBeManuallyFocused: { table: { category: category.props } },
    children: { control: 'text', table: { category: category.props } },
    color: { table: { category: category.props } },
    size: { table: { category: category.props } },
    svgPath: { ...svgPathDescription },
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
