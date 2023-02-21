import { sizeArr } from '@skatteetaten/ds-core-utils';
import {
  Icon,
  IconProps,
  getIconVariantDefault,
  getIconSizeDefault,
  SystemSVGPathsAndIcons,
  ThemeSVGPathsAndIcons,
  iconVariantArr,
} from '@skatteetaten/ds-icons';
import { ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';
import { Story, Meta } from '@storybook/react';

import { SystemIconLabels, SystemSVGPaths } from './utils/icon.systems';
import { ThemeIconLabels, ThemeSVGPaths } from './utils/icon.themes';
import { category } from '../../.storybook/helpers';

export default {
  component: Icon,
  title: 'Komponenter/Icon',
} as Meta<IconProps>;

const Template: Story<IconProps> = (args) => (
  <div style={{ width: '150px' }}>
    <Icon {...args} />
  </div>
);

export const SystemIcon: Story<IconProps> = Template.bind({});
export const ThemeIcon: Story<IconProps> = Template.bind({});

const commonArgTypes = {
  // Props
  title: {
    table: {
      category: category.props,
    },
  },
  // Aria
  ariaLabel: { table: { category: category.aria } },
};

const iconDefaultParameters = {
  docs: {
    page: (): JSX.Element => <ArgsTable story={PRIMARY_STORY} />,
  },
};
const defaultSystemIconVariant = getIconVariantDefault();

SystemIcon.argTypes = {
  ...commonArgTypes,
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
  variant: {
    name: 'variant',
    control: { type: null },
    table: {
      type: { summary: iconVariantArr.toString() },
      category: category.props,
      defaultValue: { summary: defaultSystemIconVariant },
    },
  },
};

SystemIcon.args = {
  size: getIconSizeDefault(),
  svgPath: SystemSVGPathsAndIcons.AccountChildSVGpath,
  variant: defaultSystemIconVariant,
};
SystemIcon.parameters = iconDefaultParameters;

ThemeIcon.argTypes = {
  ...commonArgTypes,
  size: {
    control: 'select',
    options: [sizeArr[2], sizeArr[3]],
    table: {
      type: { summary: sizeArr.toString() },
      category: category.props,
      defaultValue: { summary: getIconSizeDefault() },
    },
  },
  svgPath: {
    options: Object.keys(ThemeSVGPaths),
    mapping: ThemeSVGPaths,
    control: {
      labels: ThemeIconLabels,
    },
    table: { category: category.props },
  },
  variant: {
    name: 'variant',
    control: { type: null },
    table: {
      type: { summary: iconVariantArr.toString() },
      category: category.props,
      defaultValue: { summary: 'themeIcon' },
    },
  },
};

ThemeIcon.args = {
  size: getIconSizeDefault(),
  svgPath: ThemeSVGPathsAndIcons.AndreForholdSVGpath,
  variant: 'themeIcon',
};
ThemeIcon.parameters = iconDefaultParameters;
