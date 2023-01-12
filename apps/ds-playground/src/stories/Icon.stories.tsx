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
import { Story, Meta } from '@storybook/react';

import { category } from '../../.storybook/helpers';
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
  design: [
    {
      name: 'Oversikt',
      type: 'figma',
      url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=1124%3A6643',
    },
    {
      name: 'Størrelser og avstander',
      type: 'figma',
      url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=1124%3A6642',
    },
  ],
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
