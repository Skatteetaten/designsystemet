import { Blockquote } from '@skatteetaten/ds-typography';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
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
} as ComponentMeta<typeof Blockquote>;

const TemplateDefault: ComponentStory<typeof Blockquote> = (args) => (
  <Blockquote {...args} />
);

const TemplateExample: ComponentStory<typeof Blockquote> = () => (
  <Blockquote>
    {
      'Skatteetaten jobber målrettet sammen med andre samarbeidspartnere for at det skal være enkelt å gjøre rett og vanskelig å gjøre feil.'
    }
  </Blockquote>
);

export const BlockquoteDefault = TemplateDefault.bind({});
export const BlockquoteExample = TemplateExample.bind({});
BlockquoteDefault.storyName = 'Default';
BlockquoteExample.storyName = 'Example';
BlockquoteExample.parameters = {
  controls: { disabled: true },
};

BlockquoteDefault.args = {
  children:
    'Lorem ipsum dolor sit amet. Alle som har laget en nettside, trengt litt fylltekst eller bare surfet rundt på nettet har antageligvis sett disse ordene, ' +
    'etterfulgt av en tilsynelatende eviglang tekst fylt med latinske liksomsetninger.',
};
