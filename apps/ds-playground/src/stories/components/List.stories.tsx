import {
  getListAsDefault,
  List,
  listAsArr,
  Paragraph,
} from '@skatteetaten/ds-typography';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
  component: List,
  subcomponents: {
    'List.Element': List.Element,
  },
  title: 'Komponenter/List',
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
  parameters: {
    version: getVersion('ds-typography'),
    docs: { source: { type: 'code' } },
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
      <List.Element key={'listElement_4'}>
        {'kontonummeret du har registrert hos oss'}
      </List.Element>
      <List.Element key={'listElement_5'}>
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

export const ListDefault = TemplateDefault.bind({});
export const ListExample = TemplateExample.bind({});
ListDefault.storyName = 'Default';
ListExample.storyName = 'Example';
ListExample.parameters = {
  controls: { disabled: true },
};

ListDefault.args = {
  as: getListAsDefault(),
};
