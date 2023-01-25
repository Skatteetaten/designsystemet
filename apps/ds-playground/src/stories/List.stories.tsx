import {
  getListHasIndentDefault,
  getListAsDefault,
  List,
  listAsArr,
} from '@skatteetaten/ds-typography';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { category } from '../../.storybook/helpers';

export default {
  component: List,
  title: 'Design System/List',
  argTypes: {
    // Props
    hasIndent: {
      control: 'boolean',
      table: {
        category: category.props,
        defaultValue: { summary: getListHasIndentDefault() },
      },
    },
    hasSpacing: {
      control: 'boolean',
      table: {
        category: category.props,
      },
    },
    as: {
      options: [...listAsArr],
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getListAsDefault() },
      },
    },
  },
} as ComponentMeta<typeof List>;

const TemplateDefault: ComponentStory<typeof List> = (args) => (
  <>
    <p>
      {
        'Jeg er et tekstavsnitt uten innrykk. Denne teksten blir ca. to linjer lang.'
      }
    </p>
    <List {...args}>
      <List.Element key={'listElement_1'}>
        {'Kjenner du behovet til brukeren?'}
      </List.Element>
      <List.Element key={'listElement_2'}>
        {'Er du sikker på at du kjenner behovet til brukeren?'}
      </List.Element>
      <List.Element key={'listElement_3'}>{'Snakk med andre.'}</List.Element>
    </List>
    <p>
      {
        'Jeg er et tekstavsnitt uten innrykk. Denne teksten blir ca. to linjer lang.'
      }
    </p>
  </>
);

export const ListDefault = TemplateDefault.bind({});
ListDefault.storyName = 'Default';

ListDefault.args = {
  hasIndent: getListHasIndentDefault(),
  as: getListAsDefault(),
};

ListDefault.parameters = {
  design: [
    {
      name: 'varianter og font',
      type: 'figma',
      url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=7490%3A12391&t=2mJsV7woWcwQI3i6-0',
    },
    {
      name: 'luft og avstander',
      type: 'figma',
      url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=7490%3A12419&t=D45Mkl3WbJqk8vM4-0',
    },
  ],
};
