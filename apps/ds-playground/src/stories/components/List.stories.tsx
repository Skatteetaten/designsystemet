import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { getListAsDefault, List, Paragraph } from '@skatteetaten/ds-typography';

import { category } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: List,
  title: 'Komponenter/List',
  argTypes: {
    // Props
    as: {
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getListAsDefault() },
      },
    },
    canBeManuallyFocused: { table: { category: category.props } },
    children: { control: false, table: { category: category.props } },
    hasSpacing: {
      table: { category: category.props, defaultValue: { summary: 'false' } },
    },
  },
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
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    return (
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
  },
} satisfies Story;
Examples.parameters = exampleParameters;
