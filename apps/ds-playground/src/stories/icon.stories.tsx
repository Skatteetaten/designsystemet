import { sizeArr } from '@skatteetaten/ds-core-utils';
import { Icon as DefaultIcon } from '@skatteetaten/ds-icons';
import {
  SystemSVGPathsAndIcons,
  ThemeSVGPathsAndIcons,
} from '@skatteetaten/ds-icons';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SystemIconLabels, SystemSVGPaths } from './utils/icon.systems';
import { ThemeIconLabels, ThemeSVGPaths } from './utils/icon.themes';

import './icon.stories.css';

export default {
  component: DefaultIcon,
  title: 'Design System/Icon',
} as ComponentMeta<typeof DefaultIcon>;

const Template: ComponentStory<typeof DefaultIcon> = (args) => (
  <div style={{ width: '150px' }}>
    <DefaultIcon {...args} />
  </div>
);

export const SystemIcon = Template.bind({});
export const ThemeIcon = Template.bind({});

const commonArgTypes = {
  className: { control: 'select', options: ['myIconClassname'] },
  title: { control: 'text' },
  'aria-label': { control: 'text' },
  role: { control: 'text' },
  viewBox: { control: 'text' },
  variant: {
    control: { type: 'text' },
    table: { disable: true },
  },
};

SystemIcon.argTypes = {
  ...commonArgTypes,
  size: {
    control: 'select',
    options: [...sizeArr].slice(1),
    default: 'medium',
  },
  svgPath: {
    options: Object.keys(SystemSVGPaths),
    mapping: SystemSVGPaths,
    control: {
      type: 'select',
      labels: SystemIconLabels,
    },
    table: {
      type: { summary: 'select' },
      defaultValue: { summary: 'AccountChild' },
    },
  },
};

SystemIcon.args = {
  title: 'Default title',
  variant: 'systemIcon',
  viewBox: '0 0 24 24',
  size: 'medium',
  svgPath: SystemSVGPathsAndIcons.AccountChildSVGpath,
};

ThemeIcon.argTypes = {
  ...commonArgTypes,
  size: {
    control: 'select',
    options: [sizeArr[2], sizeArr[3]],
    default: 'medium',
  },
  svgPath: {
    options: Object.keys(ThemeSVGPaths),
    mapping: ThemeSVGPaths,
    control: {
      type: 'select',
      labels: ThemeIconLabels,
    },
    table: {
      type: { summary: 'select' },
      defaultValue: { summary: 'AndreForhold' },
    },
  },
};

ThemeIcon.args = {
  title: 'Default title',
  variant: 'themeIcon',
  viewBox: '0 0 48 48',
  size: 'medium',
  svgPath: ThemeSVGPathsAndIcons.AndreForholdSVGpath,
};
