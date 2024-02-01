import { sizeArr } from '@skatteetaten/ds-core-utils';
import {
  Icon,
  getIconVariantDefault,
  getIconSizeDefault,
  iconVariantArr,
  GaveArvSVGpath,
  GaveArvIcon,
} from '@skatteetaten/ds-icons';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { ThemeSVGPaths } from '../utils/icon.themes';
import { exampleParameters } from '../utils/stories.utils';
import { getVersion } from '../utils/version.utils';

const meta = {
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
    title: { table: { category: category.props } },
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
  args: {
    svgPath: GaveArvSVGpath,
    variant: 'themeIcon',
  },
  parameters: {
    version: getVersion('ds-icons'),
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {};

export const Examples: Story = {
  render: (_args) => {
    return (
      <>
        <Icon svgPath={GaveArvSVGpath} size={'medium'} variant={'themeIcon'} />
        <Icon svgPath={GaveArvSVGpath} size={'large'} variant={'themeIcon'} />
        <div>
          <GaveArvIcon size={'medium'} />
          <GaveArvIcon size={'large'} />
        </div>
      </>
    );
  },
};
Examples.parameters = exampleParameters;
