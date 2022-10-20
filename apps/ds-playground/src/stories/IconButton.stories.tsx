import {
  IconButton,
  getClassNameDefault,
  getDisabledDefault,
  getIsOutlinedDefault,
  getSizeDefault,
} from '@skatteetaten/ds-buttons';
import { sizeArr } from '@skatteetaten/ds-core-utils';
import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SystemIconLabels, SystemSVGPaths } from './utils/icon.systems';
import { getListOfAllSystemIcons } from './utils/icon.utils';

const iconList = getListOfAllSystemIcons(SystemIconLabels, SystemSVGPaths);

export default {
  component: IconButton,
  title: 'Design System/IconButton',
  argTypes: {
    svgPath: {
      options: Object.keys(iconList),
      mapping: iconList,
      control: 'select',
    },
    size: {
      options: [...sizeArr].slice(1, 4),
      control: 'radio',
      table: { defaultValue: { summary: getSizeDefault() } },
    },
    isOutlined: {
      control: 'boolean',
      table: { defaultValue: { summary: getIsOutlinedDefault() } },
    },
    disabled: {
      control: 'boolean',
      table: { defaultValue: { summary: getDisabledDefault() } },
    },
    className: {
      control: 'select',
      options: ['', 'buttonClassnameDark', 'buttonClassnameLight'],
      table: { defaultValue: { summary: getClassNameDefault() } },
    },
    tabIndex: {
      control: 'number',
    },
    accessKey: {
      control: 'text',
    },
    ariaLabel: {
      control: 'text',
    },
    ariaDescribedBy: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof IconButton>;

const TemplateDefault: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} onClick={action('KlikkEvent IconButton')} />
);

export const IconButtonDefault = TemplateDefault.bind({});
IconButtonDefault.storyName = 'Default';

IconButtonDefault.args = {
  svgPath: Object.values(SystemSVGPaths)[14], // Bell icon
  size: getSizeDefault(),
  isOutlined: getIsOutlinedDefault(),
  disabled: getDisabledDefault(),
  className: getClassNameDefault(),
};

IconButtonDefault.parameters = {
  design: [
    {
      name: 'tilstander',
      type: 'figma',
      url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=3152%3A8650',
    },
    {
      name: 'spacing',
      type: 'figma',
      url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=1556%3A9035',
    },
  ],
};
