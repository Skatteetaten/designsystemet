import {
  InlineButton,
  getInlineButtonPositionDefault,
} from '@skatteetaten/ds-buttons';
import { getCommonDisabledDefault } from '@skatteetaten/ds-core-utils';
import {
  AddOutlineSVGpath,
  BellSVGpath,
  ChatbotSVGpath,
} from '@skatteetaten/ds-icons';
import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import './classnames.stories.css';

// TODO FRONT-893 - legge på figma-lenker
// TODO FRONT-893 - komplett list med ikoner
const iconList = {
  AddOutline: { svgPath: AddOutlineSVGpath },
  Bell: { svgPath: BellSVGpath },
  Chatbot: { svgPath: ChatbotSVGpath },
};

export default {
  component: InlineButton,
  title: 'Design System / InlineButton',
  argTypes: {
    id: {
      control: 'text',
      table: { defaultValue: { summary: '' } },
    },
    children: {
      control: 'text',
      table: { defaultValue: { summary: '' } },
    },
    className: {
      control: 'select',
      options: ['', 'dummyClassname'],
      table: { defaultValue: { summary: '' } },
    },
    disabled: {
      control: 'boolean',
      table: { defaultValue: { summary: getCommonDisabledDefault() } },
    },
    svgPath: {
      options: [''].concat(Object.keys(iconList)),
      control: 'select',
      mapping: iconList,
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      table: { defaultValue: { summary: getInlineButtonPositionDefault() } },
    },
    ariaDescribedby: {
      control: 'text',
      table: { defaultValue: { summary: '' } },
    },
    accessKey: {
      control: 'text',
      table: { defaultValue: { summary: '' } },
    },
    tabIndex: {
      control: 'text',
      table: { defaultValue: { summary: '' } },
    },
  },
} as ComponentMeta<typeof InlineButton>;

const TemplateDefault: ComponentStory<typeof InlineButton> = (args) => (
  <InlineButton {...args} onClick={action('klikkEvent InlineButton')}>
    {args.children}
  </InlineButton>
);

const baseArgs = {
  children: 'Legg til rapport',
};

export const InlineButtonDefault = TemplateDefault.bind({});
InlineButtonDefault.storyName = 'Default';
InlineButtonDefault.args = {
  ...baseArgs,
};

export const InlineButtonIcon = TemplateDefault.bind({});
InlineButtonIcon.storyName = 'With icon';
InlineButtonIcon.args = {
  ...baseArgs,
  svgPath: AddOutlineSVGpath,
};
