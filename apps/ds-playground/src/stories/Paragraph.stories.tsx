import { paragraphVariantArr } from '@skatteetaten/ds-core-utils';
import {
  getParagraphVariantDefault,
  Paragraph,
} from '@skatteetaten/ds-typography';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { category } from '../../.storybook/helpers';

export default {
  component: Paragraph,
  title: 'Design System/Paragraph',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    hasSpacing: {
      control: 'boolean',
      table: {
        category: category.props,
      },
    },
    variant: {
      options: [...paragraphVariantArr],
      control: 'radio',
      table: {
        category: category.props,
        defaultValue: { summary: getParagraphVariantDefault() },
      },
    },
  },
} as ComponentMeta<typeof Paragraph>;

const TemplateDefault: ComponentStory<typeof Paragraph> = (args) => (
  <Paragraph {...args} />
);

export const ParagraphDefault = TemplateDefault.bind({});
ParagraphDefault.storyName = 'Default';

ParagraphDefault.args = {
  children:
    'Lorem ipsum dolor sit amet. Alle som har laget en nettside, trengt litt fylltekst eller bare surfet rundt på nettet har antageligvis sett disse ordene, ' +
    'etterfulgt av en tilsynelatende eviglang tekst fylt med latinske liksomsetninger.',
  variant: getParagraphVariantDefault(),
};

ParagraphDefault.parameters = {
  design: [
    {
      name: 'varianter og størrelser',
      type: 'figma',
      url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=7490%3A12296',
    },
    {
      name: 'luft og avstander',
      type: 'figma',
      url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=7490%3A12324',
    },
  ],
};
