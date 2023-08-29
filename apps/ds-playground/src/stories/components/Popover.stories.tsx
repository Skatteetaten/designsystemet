import { Popover } from '@skatteetaten/ds-overlays';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: Popover,
  title: 'Komponenter/Popover',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
  },
  tags: ['autodocs'],
  parameters: {
    version: getVersion('ds-typography'),
  },
} satisfies Meta<typeof Popover>;
export default meta;
type Story = StoryObj<typeof meta>;

export const ParagraphDefault = {
  name: 'Default',

  args: {
    children:
      'Lorem ipsum dolor sit amet. Alle som har laget en nettside, trengt litt fylltekst eller bare surfet rundt på nettet har antageligvis sett disse ordene, ' +
      'etterfulgt av en tilsynelatende eviglang tekst fylt med latinske liksomsetninger.',
  },
} satisfies Story;

//   export const ParagraphExample = {
//     render: TemplateExample,
//     name: 'Example',
//     args: {
//       children: 'dummy',
//     },

//     parameters: {
//       controls: { disabled: true },
//     },
//   } satisfies Story;
