import { MegaButton } from '@skatteetaten/ds-buttons';
import { getCommonDisabledDefault } from '@skatteetaten/ds-core-utils';
import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { category, htmlEventDescription } from '../../.storybook/helpers';
import './classnames.stories.css';

const MBStory = {
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
      table: {
        type: { summary: 'string' },
        category: category.htmlAttribute,
        defaultValue: { summary: '' },
      },
    },
    disabled: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        category: category.htmlAttribute,
        defaultValue: { summary: getCommonDisabledDefault() },
      },
    },
    href: {
      control: 'text',
      table: { category: category.htmlAttribute },
    },
    tabIndex: {
      control: 'text',
      table: { type: { summary: 'number' }, category: category.htmlAttribute },
    },
    // Aria
    ariaDescribedby: { table: { category: category.aria } },
    // Events
    onClick: { ...htmlEventDescription },
    onFocus: { ...htmlEventDescription },
    onBlur: { ...htmlEventDescription },
  },
};
export default MBStory as ComponentMeta<typeof MegaButton>;

const TemplateDefault: ComponentStory<typeof MegaButton> = (args) => (
  <MegaButton {...args} onClick={action('KlikkEvent MegaButton')}>
    {args.children}
  </MegaButton>
);

export const Default = TemplateDefault.bind({});

const firstWithCategory = ({
  storyProps,
  category,
}: {
  storyProps: any;
  category: string;
}): string => {
  const ret = Object.entries(storyProps.argTypes).find(([, value]) => {
    return value?.table.category === category;
  });
  console.log(ret);
  if (ret) return ret[0];
  else {
    return '';
  }
};
/* 
export const category = {
  baseProps: 'BaseProps',
  props: 'Props',
  htmlAttribute: 'HTML-attribute',
  aria: 'Aria-attribute',
  event: 'Event',
}; */

const baseArgs = {
  [firstWithCategory({
    category: category.props,
    storyProps: MBStory,
  })]: undefined,
  [firstWithCategory({
    category: category.htmlAttribute,
    storyProps: MBStory,
  })]: undefined,
  [firstWithCategory({
    category: category.aria,
    storyProps: MBStory,
  })]: undefined,
  [firstWithCategory({
    category: category.event,
    storyProps: MBStory,
  })]: undefined,
  children: 'Klikk her',
  /*   tabIndex: undefined,
  ariaDescribedby: undefined, */
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
