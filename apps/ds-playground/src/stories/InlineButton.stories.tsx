import {
  InlineButton,
  getInlineButtonPositionDefault,
} from '@skatteetaten/ds-buttons';
import { positionArr } from '@skatteetaten/ds-core-utils';
import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { category, htmlEventDescription } from '../../.storybook/helpers';
import { SystemSVGPaths } from './utils/icon.systems';
import './classnames.stories.css';

export default {
  component: InlineButton,
  title: 'Design System / InlineButton',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    iconPosition: {
      options: [...positionArr],
      control: 'radio',
      table: {
        type: { summary: positionArr.toString() },
        category: category.props,
        defaultValue: { summary: getInlineButtonPositionDefault() },
      },
    },
    svgPath: {
      options: [''].concat(Object.keys(SystemSVGPaths)),
      mapping: SystemSVGPaths,
      table: { category: category.props },
    },
    // HTML
    accessKey: {
      table: { category: category.htmlAttribute },
    },
    disabled: {
      control: 'boolean',
      table: {
        category: category.htmlAttribute,
      },
    },
    // Aria
    ariaDescribedby: { table: { category: category.aria } },
    // Events
    onClick: { ...htmlEventDescription },
    onFocus: { ...htmlEventDescription },
    onBlur: { ...htmlEventDescription },
  },
} as ComponentMeta<typeof InlineButton>;

const TemplateDefault: ComponentStory<typeof InlineButton> = (args) => (
  <InlineButton {...args} onClick={action('klikkEvent InlineButton')}>
    {args.children}
  </InlineButton>
);

const buttonDefaultParameters = {
  design: [
    {
      name: 'Varianter og tilstander',
      type: 'figma',
      url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=4018%3A9627',
    },
    {
      name: 'Luft og fontstørrelser',
      type: 'figma',
      url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=1210%3A7396',
    },
  ],
  backgrounds: {
    values: [
      { name: 'Svart', value: '#000' },
      { name: 'Hvit', value: '#fff' },
    ],
  },
};

export const InlineButtonDefault = TemplateDefault.bind({});
InlineButtonDefault.storyName = 'Default';
const baseArgs = {
  children: 'Legg til rapport',
};

InlineButtonDefault.args = {
  ...baseArgs,
  iconPosition: getInlineButtonPositionDefault(),
};
InlineButtonDefault.parameters = buttonDefaultParameters;
