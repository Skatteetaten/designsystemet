import { Blockquote } from '@skatteetaten/ds-typography';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { loremIpsum } from '../__tests__/testUtils/storybook.testing.utils';
import { getVersion } from '../utils/version.utils';

export default {
  component: Blockquote,
  title: 'Komponenter/Blockquote',
  argTypes: {
    // Props
    children: {
      control: 'text',
      table: { category: category.props },
    },
    hasSpacing: {
      control: 'boolean',
      table: { category: category.props },
    },
  },
  parameters: {
    version: getVersion('ds-typography'),
  },
} satisfies Meta<typeof Blockquote>;

export const Preview: StoryObj<typeof Blockquote> = {
  args: {
    children: loremIpsum,
  },
};

export const Example: StoryFn<typeof Blockquote> = (_args) => (
  <Blockquote>
    {
      'Skatteetaten jobber målrettet sammen med andre samarbeidspartnere for at det skal være enkelt å gjøre rett og vanskelig å gjøre feil.'
    }
  </Blockquote>
);

Example.parameters = {
  controls: {
    exclude: /.*/,
  },
};
