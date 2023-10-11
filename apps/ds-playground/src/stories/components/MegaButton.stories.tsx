import { MegaButton } from '@skatteetaten/ds-buttons';
import { StoryFn, Meta } from '@storybook/react';

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
} satisfies Meta<typeof MegaButton>;

export const Default: StoryFn<typeof MegaButton> = () => (
  <MegaButton>{'Klikk her'}</MegaButton>
);

export const Example: StoryFn<typeof MegaButton> = () => (
  <MegaButton>{'Se eller endre skattekortet'}</MegaButton>
);
