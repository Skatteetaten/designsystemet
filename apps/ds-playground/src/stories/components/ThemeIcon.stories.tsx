import { sizeArr } from '@skatteetaten/ds-core-utils';
import {
  Icon,
  getIconVariantDefault,
  getIconSizeDefault,
  iconVariantArr,
  AndreForholdSVGpath,
} from '@skatteetaten/ds-icons';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { ThemeSVGPaths } from '../utils/icon.themes';
import { getVersion } from '../utils/version.utils';

export default {
  component: Icon,
  title: 'Komponenter/Icon/ThemeIcon',
  argTypes: {
    // Props
    size: {
      control: 'select',
      options: [sizeArr[2], sizeArr[3]],
      table: {
        type: { summary: [sizeArr[2], sizeArr[3]] },
        category: category.props,
        defaultValue: { summary: getIconSizeDefault() },
      },
    },
    svgPath: {
      options: Object.keys(ThemeSVGPaths),
      mapping: ThemeSVGPaths,
      table: { category: category.props },
    },
    title: {
      table: {
        category: category.props,
      },
    },
    variant: {
      control: { type: null },
      table: {
        type: { summary: iconVariantArr },
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
    svgPath: AndreForholdSVGpath,
  },
};
