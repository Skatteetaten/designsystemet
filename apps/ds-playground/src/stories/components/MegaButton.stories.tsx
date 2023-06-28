import { MegaButton } from '@skatteetaten/ds-buttons';
import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
  component: MegaButton,
  title: 'Komponenter/MegaButton',
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
  parameters: {
    version: getVersion('ds-buttons'),
  },
} as ComponentMeta<typeof MegaButton>;

const TemplateDefault: ComponentStory<typeof MegaButton> = (args) => (
  <MegaButton {...args} onClick={action('KlikkEvent MegaButton')}>
    {args.children}
  </MegaButton>
);

export const MegaButtonDefault = TemplateDefault.bind({});
export const MegaButtonExample = TemplateDefault.bind({});
MegaButtonDefault.storyName = 'Default';
MegaButtonExample.storyName = 'Example';
MegaButtonExample.parameters = {
  controls: { disabled: true },
};

MegaButtonDefault.args = {
  children: 'Klikk her',
};

MegaButtonExample.args = {
  children: 'Se eller endre skattekortet',
};
