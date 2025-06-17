import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { MegaButton } from '@skatteetaten/ds-buttons';
import { getCommonButtonTypeDefault } from '@skatteetaten/ds-core-utils';
import { getSpinnerLabelDefault } from '@skatteetaten/ds-progress';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: MegaButton,
  title: 'Komponenter/MegaButton',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    hasSpinner: { table: { category: category.props } },
    spinnerTitle: {
      table: {
        category: category.props,
        defaultValue: { summary: getSpinnerLabelDefault() },
      },
    },
    isExternal: { table: { category: category.props } },
    // HTML
    accessKey: { table: { category: category.htmlAttribute } },
    disabled: { table: { category: category.htmlAttribute } },
    href: { table: { category: category.htmlAttribute } },
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
  args: {
    children: 'Klikk her',
  },
} satisfies Meta<typeof MegaButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    return <MegaButton>{'Se eller endre skattekortet'}</MegaButton>;
  },
} satisfies Story;
Examples.parameters = exampleParameters;
