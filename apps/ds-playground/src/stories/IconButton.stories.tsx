import {
  IconButton,
  getIsOutlinedDefault,
  getSizeDefault,
} from '@skatteetaten/ds-buttons';
import { getCommonDisabledDefault, sizeArr } from '@skatteetaten/ds-core-utils';
import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { category, htmlEventDescription } from '../../.storybook/helpers';
import { SystemSVGPaths } from './utils/icon.systems';

export default {
  component: IconButton,
  title: 'Design System/IconButton',
  argTypes: {
    // Props
    isOutlined: {
      control: 'boolean',
      table: {
        category: category.props,
        defaultValue: { summary: getIsOutlinedDefault() },
      },
    },
    size: {
      options: [...sizeArr].slice(1, 4),
      control: 'radio',
      table: {
        category: category.props,
        defaultValue: { summary: getSizeDefault() },
      },
    },
    svgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      control: 'select',
      table: { category: category.props },
    },
    // HTML
    accessKey: {
      control: 'text',
      table: { category: category.htmlAttribute },
    },
    disabled: {
      control: 'boolean',
      table: {
        category: category.htmlAttribute,
        defaultValue: { summary: getCommonDisabledDefault() },
      },
    },
    tabIndex: {
      control: 'number',
      table: { category: category.htmlAttribute },
    },
    // Aria
    ariaDescribedBy: { table: { category: category.aria } },
    ariaLabel: { table: { category: category.aria } },
    // Events
    onBlur: { ...htmlEventDescription },
    onClick: { ...htmlEventDescription },
    onFocus: { ...htmlEventDescription },
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
