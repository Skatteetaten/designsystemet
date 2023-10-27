import { sizeArr } from '@skatteetaten/ds-core-utils';
import {
  Icon,
  getIconVariantDefault,
  getIconSizeDefault,
  iconVariantArr,
  AccountChildSVGpath,
} from '@skatteetaten/ds-icons';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { SystemIconLabels, SystemSVGPaths } from '../utils/icon.systems';
import { getVersion } from '../utils/version.utils';

export default {
  component: Icon,
  title: 'Komponenter/Icon/SystemIcon',
  argTypes: {
    // Props
    size: {
      control: 'select',
      options: [...sizeArr].slice(1),
      table: {
        type: { summary: sizeArr.toString() },
        category: category.props,
        defaultValue: { summary: getIconSizeDefault() },
      },
    },
    svgPath: {
      control: {
        type: 'select',
        labels: SystemIconLabels,
      },
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: { category: category.props },
    },
    title: {
      table: {
        category: category.props,
      },
    },
    variant: {
      name: 'variant',
      control: { type: null },
      table: {
        type: { summary: iconVariantArr.toString() },
        category: category.props,
        defaultValue: { summary: getIconVariantDefault() },
      },
    },
    // Aria
    ariaLabel: { table: { category: category.aria } },
  },
  parameters: {
    version: getVersion('ds-icons'),
  },
} satisfies Meta<typeof Icon>;

export const Preview: StoryObj<typeof Icon> = {
  args: {
    svgPath: AccountChildSVGpath,
  },
};
