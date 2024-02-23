import { sizeArr } from '@skatteetaten/ds-core-utils';
import { CheckSVGpath, WarningSVGpath } from '@skatteetaten/ds-icons';
import { Chip } from '@skatteetaten/ds-status';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { exampleParameters } from '../utils/stories.utils';
import { getVersion } from '../utils/version.utils';

const availableSizes = [sizeArr[1], sizeArr[2]];

const meta = {
  component: Chip,
  title: 'Komponenter/Chip',
  argTypes: {
    // Props
    children: { control: 'text', table: { category: category.props } },
    svgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: { category: category.props },
    },
    size: {
      options: availableSizes,
      control: 'radio',
      table: {
        category: category.props,
        type: { summary: availableSizes },
      },
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
        <Chip variant={'green'} svgPath={CheckSVGpath}>
          {'Godkjent'}
        </Chip>
        <Chip variant={'red'} svgPath={WarningSVGpath}>
          {'Særavgift'}
        </Chip>
        <Chip variant={'grey'}>{'Info'}</Chip>
      </div>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
