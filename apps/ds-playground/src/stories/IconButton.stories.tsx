import { IconButton } from '@skatteetaten/ds-buttons';
import { sizeArr } from '@skatteetaten/ds-core-utils';
import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getDisabledDefault, getOutlinedDefault, getSizeDefault } from 'libs/ds-buttons/src/IconButton/defaults';

import { SystemIconLabels, SystemSVGPaths } from './utils/icon.systems';
import { getListOfAllSystemIcons } from './utils/icon.utils';

const iconList = getListOfAllSystemIcons(SystemIconLabels, SystemSVGPaths);

export default {
    component: IconButton,
    title: 'Design System/IconButton',
    argTypes: {
        iconProps: {
          options: Object.keys(iconList),
          mapping: iconList,
          control: 'select',
        },
        buttonSize: {
            options: [...sizeArr].slice(1, 4),
            control: 'radio',
        },
        isOutlined: {
            control: 'boolean',
        },
        disabled: {
          control: 'boolean',
        },
        className: {
          control: 'select',
          options: ['', 'buttonClassnameDark', 'buttonClassnameLight'],
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
    <IconButton {...args} iconProps={args.iconProps} onClick={action('KlikkEvent IconButton')} />
);

export const IconButtonDefault = TemplateDefault.bind({});
IconButtonDefault.storyName = 'Default';

IconButtonDefault.args = {
  iconProps: { svgPath: Object.values(SystemSVGPaths)[14] }, // Bell icon
  buttonSize: getSizeDefault(),
  isOutlined: getOutlinedDefault(),
  disabled: getDisabledDefault(),
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
