import { IconButton } from '@skatteetaten/ds-buttons';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
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
            options: ['small', 'medium', 'large'],
            control: 'radio',
        },
        isOutlined: {
            control: 'boolean',
        },
        disabled: {
          control: 'boolean',
        },
        className: {
          control: 'text',
        },
        tabIndex: {
          control: 'number',
        },
        'aria-label': {
          control: 'text',
        },
        'aria-hidden': {
          control: 'boolean',
        },
        'aria-describedby': {
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
  buttonSize: 'medium',
  isOutlined: false,
  disabled: false,
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
