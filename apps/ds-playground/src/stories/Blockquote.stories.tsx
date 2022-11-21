import { Blockquote } from '@skatteetaten/ds-typography';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { category } from '../../.storybook/helpers';

export default {
  component: Blockquote,
  title: 'Design System/Blockquote',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    hasSpacing: {
      control: 'boolean',
      table: {
        category: category.props,
      },
    },
  },
} as ComponentMeta<typeof Blockquote>;

const TemplateDefault: ComponentStory<typeof Blockquote> = (args) => (
  <Blockquote {...args} />
);

export const BlockquoteDefault = TemplateDefault.bind({});
BlockquoteDefault.storyName = 'Default';

BlockquoteDefault.args = {
  children:
    'Lorem ipsum dolor sit amet. Alle som har laget en nettside, trengt litt fylltekst eller bare surfet rundt på nettet har antageligvis sett disse ordene, ' +
    'etterfulgt av en tilsynelatende eviglang tekst fylt med latinske liksomsetninger.',
};

BlockquoteDefault.parameters = {
  design: [
    {
      name: 'font og størrelser',
      type: 'figma',
      url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=7490%3A12547&t=1KMwZAqrUp0ClnpK-0',
    },
    {
      name: 'luft og avstander',
      type: 'figma',
      url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=7490%3A12580&t=xXoSp2cmSHZZtCMU-0',
    },
  ],
};
