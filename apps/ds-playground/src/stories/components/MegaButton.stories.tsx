import { MegaButton } from '@skatteetaten/ds-buttons';
import { getCommonButtonTypeDefault } from '@skatteetaten/ds-core-utils';
import { StoryFn, Meta, StoryObj } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
  component: MegaButton,
  title: 'Komponenter/MegaButton',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    isExternal: {
      table: {
        category: category.props,
      },
    },
    // HTML
    accessKey: {
      table: { category: category.htmlAttribute },
    },
    disabled: {
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
        defaultValue: { summary: getCommonButtonTypeDefault() },
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

export const Preview: StoryObj<typeof MegaButton> = {
  args: {
    children: 'Klikk her',
  },
};

export const Example: StoryFn<typeof MegaButton> = (_args) => (
  <MegaButton>{'Se eller endre skattekortet'}</MegaButton>
);

Example.parameters = {
  controls: {
    exclude: /.*/,
  },
};
