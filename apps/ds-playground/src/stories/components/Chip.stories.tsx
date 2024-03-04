import { colorNamesArr, sizeArr } from '@skatteetaten/ds-core-utils';
import { CheckSVGpath, WarningSVGpath } from '@skatteetaten/ds-icons';
import {
  Chip,
  getChipColorDefault,
  getChipSizeDefault,
} from '@skatteetaten/ds-status';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { exampleParameters } from '../utils/stories.utils';
import { getVersion } from '../utils/version.utils';

const chipColors = [
  colorNamesArr[0],
  colorNamesArr[1],
  colorNamesArr[2],
  colorNamesArr[5],
];

const chipSizes = [sizeArr[1], sizeArr[2]];

const meta = {
  component: Chip,
  title: 'Komponenter/Chip',
  argTypes: {
    // Props
    children: { control: 'text', table: { category: category.props } },
    color: {
      table: {
        type: { summary: chipColors },
        category: category.props,
        defaultValue: { summary: getChipColorDefault() },
      },
      control: 'radio',
      options: chipColors,
    },
    size: {
      options: chipSizes,
      control: 'radio',
      table: {
        type: { summary: chipSizes },
        category: category.props,
        defaultValue: { summary: getChipSizeDefault() },
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
  parameters: {
    version: getVersion('ds-status'),
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    return (
      <div className={'flex gapXs'}>
        <Chip>{'Endret'}</Chip>
        <Chip color={'forest'} svgPath={CheckSVGpath}>
          {'Godkjent'}
        </Chip>
        <Chip color={'burgundy'} svgPath={WarningSVGpath}>
          {'Særavgift'}
        </Chip>
        <Chip color={'graphite'}>{'Info'}</Chip>
      </div>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
