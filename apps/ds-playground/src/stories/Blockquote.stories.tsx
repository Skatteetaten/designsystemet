import { Blockquote } from '@skatteetaten/ds-typography';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { category } from '../../.storybook/helpers';
import { getParameters } from './utils/parameters.utils';

export default {
  component: Blockquote,
  title: 'Design System/Blockquote',
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

const designParameters = [
  {
    name: 'Font og størrelser',
    type: 'figma',
    url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=7490%3A12547&t=1KMwZAqrUp0ClnpK-0',
  },
  {
    name: 'Luft og avstander',
    type: 'figma',
    url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=7490%3A12580&t=xXoSp2cmSHZZtCMU-0',
  },
];

export const BlockquoteDefault = TemplateDefault.bind({});
export const BlockquoteExample = TemplateExample.bind({});
BlockquoteDefault.storyName = 'Default';
BlockquoteExample.storyName = 'Example';
BlockquoteDefault.parameters = getParameters(designParameters);
BlockquoteExample.parameters = getParameters(designParameters);

BlockquoteDefault.args = {
  children:
    'Lorem ipsum dolor sit amet. Alle som har laget en nettside, trengt litt fylltekst eller bare surfet rundt på nettet har antageligvis sett disse ordene, ' +
    'etterfulgt av en tilsynelatende eviglang tekst fylt med latinske liksomsetninger.',
};
