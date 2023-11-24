import { getListAsDefault, List, Paragraph } from '@skatteetaten/ds-typography';
import { StoryFn, Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
  component: List,
  title: 'Komponenter/List/List',
  argTypes: {
    // Props
    hasSpacing: {
      table: {
        category: category.props,
      },
    },
    as: {
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getListAsDefault() },
      },
    },
    children: {
      table: { category: category.props },
    },
  },
  parameters: {
    version: getVersion('ds-typography'),
  },
} as Meta<typeof List>;

export const Preview: StoryObj<typeof List> = {
  args: {
    children: [
      <List.Element key={'listElement1'}>
        {'Kjenner du behovet til brukeren?'}
      </List.Element>,
      <List.Element key={'listElement2'}>
        {'Er du sikker på at du kjenner behovet til brukeren?'}
      </List.Element>,
      <List.Element key={'listElement3'}>{'Snakk med andre.'}</List.Element>,
    ],
  },
};

export const Example: StoryFn<typeof List> = (_args) => (
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

Example.parameters = {
  controls: {
    exclude: /.*/,
  },
};
