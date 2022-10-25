import { sizeArr } from '@skatteetaten/ds-core-utils';
import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import {
  Icon,
  IconProps,
  getIconVariantDefault,
  getIconSizeDefault,
  SystemSVGPathsAndIcons,
  ThemeSVGPathsAndIcons,
} from '@skatteetaten/ds-icons';
import { Story, Meta } from '@storybook/react';

import { category, storyDefault } from '../../.storybook/helpers';
import { SystemIconLabels, SystemSVGPaths } from './utils/icon.systems';
import { ThemeIconLabels, ThemeSVGPaths } from './utils/icon.themes';

import './classnames.stories.css';

export default {
  component: Icon,
  title: 'Design System/Icon',
} as Meta<IconProps>;

const Template: Story<IconProps> = (args) => (
  <div style={{ width: '150px' }}>
    <Icon {...args} />
  </div>
);

export const SystemIcon: Story<IconProps> = Template.bind({});
export const ThemeIcon: Story<IconProps> = Template.bind({});

const commonArgTypes = {
  ariaLabel: { table: { category: category.aria } },
  className: { ...storyDefault.className },
  id: { ...storyDefault.id },
  'data-testid': {
    control: 'text',
  },
  tabIndex: { table: { category: category.htmlAttribute } },
  title: {
    control: 'text',
    table: {
      category: category.props,
    },
  },
};

const defaultSystemIconVariant = getIconVariantDefault();

SystemIcon.argTypes = {
  ...commonArgTypes,
  variant: {
    name: 'variant ("systemIcon")',
    control: { type: null },
    table: {
      category: category.props,
      defaultValue: { summary: defaultSystemIconVariant },
    },
  },
  size: {
    control: 'select',
    options: [...sizeArr].slice(1),
    table: {
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
};

SystemIcon.args = {
  className: getCommonClassNameDefault(),
  variant: defaultSystemIconVariant,
  size: getIconSizeDefault(),
  svgPath: SystemSVGPathsAndIcons.AccountChildSVGpath,
};

ThemeIcon.argTypes = {
  ...commonArgTypes,
  variant: {
    name: 'variant ("themeIcon")',
    control: { type: null },
    table: {
      category: category.props,
      defaultValue: { summary: 'themeIcon' },
    },
  },
  size: {
    control: 'select',
    options: [sizeArr[2], sizeArr[3]],
    table: {
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
};

ThemeIcon.args = {
  className: getCommonClassNameDefault(),
  variant: 'themeIcon',
  size: getIconSizeDefault(),
  svgPath: ThemeSVGPathsAndIcons.AndreForholdSVGpath,
};
