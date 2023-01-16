import { MegaButton } from '@skatteetaten/ds-buttons';
import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { category, htmlEventDescription } from '../../.storybook/helpers';
import './classnames.stories.css';

export default {
  component: MegaButton,
  title: 'Design System/MegaButton',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    isExternal: {
      control: 'boolean',
      table: {
        category: category.props,
      },
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
      },
    },
    href: {
      table: { category: category.htmlAttribute },
    },
    type: {
      table: {
        category: category.htmlAttribute,
        defaultValue: { summary: 'button' },
      },
    },
    // Aria
    ariaDescribedby: { table: { category: category.aria } },
    // Events
    onClick: { ...htmlEventDescription },
    onFocus: { ...htmlEventDescription },
    onBlur: { ...htmlEventDescription },
  },
} as ComponentMeta<typeof MegaButton>;

const TemplateDefault: ComponentStory<typeof MegaButton> = (args) => (
  <MegaButton {...args} onClick={action('KlikkEvent MegaButton')}>
    {args.children}
  </MegaButton>
);

export const Default = TemplateDefault.bind({});

const baseArgs = {
  children: 'Klikk her',
};

const designUrlTilstander =
  'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=1717%3A8893';
const designUrlLuft =
  'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=1717%3A8987';
Default.args = {
  ...baseArgs,
};

Default.storyName = 'Default';
Default.parameters = {
  displayName: 'MegaButton',
  design: [
    {
      name: 'Varianter og tilstander',
      type: 'figma',
      url: designUrlTilstander,
    },
    {
      name: 'Luft og fontstørrelser',
      type: 'figma',
      url: designUrlLuft,
    },
  ],
  backgrounds: {
    values: [
      { name: 'Svart', value: '#000' },
      { name: 'Hvit', value: '#fff' },
    ],
  },
};
