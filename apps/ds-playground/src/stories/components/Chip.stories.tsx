import { sizeArr } from '@skatteetaten/ds-core-utils';
import { Chip } from '@skatteetaten/ds-status';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { getVersion } from '../utils/version.utils';

const availableSizes = [sizeArr[1], sizeArr[2]];

export default {
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
  parameters: {
    version: getVersion('ds-status'),
  },
} satisfies Meta<typeof Chip>;

export const Preview: StoryObj<typeof Chip> = {
  args: {
    children: 'Særavgift',
  },
};

export const Example: StoryFn<typeof Chip> = (_args) => (
  <Chip>{'Særavgift'}</Chip>
);

Example.parameters = {
  controls: {
    exclude: /.*/,
  },
};
