import { sizeArr } from '@skatteetaten/ds-core-utils';
import {
  Icon,
  IconProps,
  getClassNameDefault,
  getRoleDefault,
  getVariantDefault,
  getViewBoxDefault,
  getSizeDefault,
  SystemSVGPathsAndIcons,
  ThemeSVGPathsAndIcons,
} from '@skatteetaten/ds-icons';
import { Story, Meta } from '@storybook/react';

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
  id: {
    control: 'text',
  },
  'data-testid': {
    control: 'text',
  },
  className: {
    control: 'select',
    options: ['myIconClassname'],
    table: {
      defaultValue: { summary: getClassNameDefault() },
    },
  },
  title: {
    control: 'text',
  },
  'aria-label': { control: 'text' },
  role: {
    control: 'text',
    table: {
      defaultValue: { summary: getRoleDefault() },
    },
  },
};

const defaultSystemIconVariant = getVariantDefault();

SystemIcon.argTypes = {
  ...commonArgTypes,
  variant: {
    control: { type: 'text' },
    table: {
      disable: true,
      defaultValue: { summary: defaultSystemIconVariant },
    },
  },
  viewBox: {
    control: 'text',
    table: {
      defaultValue: { summary: getViewBoxDefault(defaultSystemIconVariant) },
    },
  },
  size: {
    control: 'select',
    options: [...sizeArr].slice(1),
    table: {
      defaultValue: { summary: getSizeDefault() },
    },
  },
  svgPath: {
    control: {
      type: 'select',
      labels: SystemIconLabels,
    },
    options: Object.keys(SystemSVGPaths),
    mapping: SystemSVGPaths,
  },
};

SystemIcon.args = {
  className: getClassNameDefault(),
  role: getRoleDefault(),
  variant: defaultSystemIconVariant,
  viewBox: getViewBoxDefault(defaultSystemIconVariant),
  size: getSizeDefault(),
  svgPath: SystemSVGPathsAndIcons.AccountChildSVGpath,
};

ThemeIcon.argTypes = {
  ...commonArgTypes,
  variant: {
    control: { type: 'text' },
    table: {
      disable: true,
      defaultValue: { summary: 'themeIcon' },
    },
  },
  viewBox: {
    control: 'text',
    table: {
      defaultValue: { summary: getViewBoxDefault('themeIcon') },
    },
  },
  size: {
    control: 'select',
    options: [sizeArr[2], sizeArr[3]],
    table: {
      defaultValue: { summary: getSizeDefault() },
    },
  },
  svgPath: {
    options: Object.keys(ThemeSVGPaths),
    mapping: ThemeSVGPaths,
    control: {
      labels: ThemeIconLabels,
    },
  },
};

ThemeIcon.args = {
  className: getClassNameDefault(),
  role: getRoleDefault(),
  variant: 'themeIcon',
  viewBox: getViewBoxDefault('themeIcon'),
  size: getSizeDefault(),
  svgPath: ThemeSVGPathsAndIcons.AndreForholdSVGpath,
};
