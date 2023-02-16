import {
  getListAsDefault,
  List,
  listAsArr,
  Paragraph,
} from '@skatteetaten/ds-typography';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { category } from '../../.storybook/helpers';
import { getParameters } from './utils/parameters.utils';

export default {
  component: List,
  title: 'Design System/List',
  argTypes: {
    // Props
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
  <List {...args}>
    <List.Element key={'listElement_1'}>
      {'Kjenner du behovet til brukeren?'}
    </List.Element>
    <List.Element key={'listElement_2'}>
      {'Er du sikker på at du kjenner behovet til brukeren?'}
    </List.Element>
    <List.Element key={'listElement_3'}>{'Snakk med andre.'}</List.Element>
  </List>
);

const TemplateExample: ComponentStory<typeof List> = () => (
  <>
    <Paragraph hasSpacing>{'På Min side finner du'}</Paragraph>
    <List hasSpacing>
      <List.Element key={'listElement_1'}>
        {'din kontaktinformasjon'}
      </List.Element>
      <List.Element key={'listElement_2'}>
        {'opplysningene dine i Folkeregisteret'}
      </List.Element>
      <List.Element key={'listElement_3'}>
        {
          'oversikt over skatten din, blant annet skattekort, skattemelding og skatteoppgjør'
        }
      </List.Element>
      <List.Element key={'listElement_3'}>
        {'kontonummeret du har registrert hos oss'}
      </List.Element>
      <List.Element key={'listElement_3'}>
        {
          'innboksen din med faktura, melding og brev fra Skatteetaten og Folkeregisteret'
        }
      </List.Element>
    </List>
    <Paragraph>
      {'Du kan også endre mange av opplysningene dine på Min side.'}
    </Paragraph>
  </>
);

const designParameters = [
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
];

export const ListDefault = TemplateDefault.bind({});
export const ListExample = TemplateExample.bind({});
ListDefault.storyName = 'Default';
ListExample.storyName = 'Example';
ListDefault.parameters = getParameters(designParameters);
ListExample.parameters = getParameters(designParameters);

ListDefault.args = {
  as: getListAsDefault(),
};
