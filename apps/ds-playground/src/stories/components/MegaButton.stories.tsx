import { MegaButton } from '@skatteetaten/ds-buttons';
import { action } from '@storybook/addon-actions';
import { StoryFn, Meta, StoryObj } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

const meta = {
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
  tags: ['autodocs'],
  parameters: {
    version: getVersion('ds-buttons'),
  },
} satisfies Meta<typeof MegaButton>;
export default meta;
type Story = StoryObj<typeof meta>;

const TemplateDefault: StoryFn<typeof MegaButton> = (args) => (
  <MegaButton {...args} onClick={action('KlikkEvent MegaButton')}>
    {args.children}
  </MegaButton>
);

export const MegaButtonDefault = {
  render: TemplateDefault,
  name: 'Default',
  args: {
    children: 'Klikk her',
  },
} satisfies Story;

export const MegaButtonExample = {
  render: TemplateDefault,
  name: 'Example',
  args: {
    children: 'Se eller endre skattekortet',
  },
  parameters: {
    controls: { disable: true },
  },
} satisfies Story;
