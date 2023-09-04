import { Blockquote } from '@skatteetaten/ds-typography';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

const meta = {
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
  tags: ['autodocs'],
  parameters: {
    version: getVersion('ds-typography'),
  },
} satisfies Meta<typeof Blockquote>;
export default meta;
type Story = StoryObj<typeof meta>;

export const BlockquoteDefault = {
  name: 'Default',

  args: {
    children:
      'Lorem ipsum dolor sit amet. Alle som har laget en nettside, trengt litt fylltekst eller bare surfet rundt på nettet har antageligvis sett disse ordene, ' +
      'etterfulgt av en tilsynelatende eviglang tekst fylt med latinske liksomsetninger.',
  },
} satisfies Story;

export const BlockquoteExample = {
  name: 'Example',

  args: {
    children:
      'Skatteetaten jobber målrettet sammen med andre samarbeidspartnere for at det skal være enkelt å gjøre rett og vanskelig å gjøre feil.',
  },
  parameters: {
    controls: { disabled: true },
  },
} satisfies Story;
