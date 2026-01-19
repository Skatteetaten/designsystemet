import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import {
  getParagraphVariantDefault,
  Heading,
  Paragraph,
} from '@skatteetaten/ds-typography';

import { category } from '../../../.storybook/helpers';
import { loremIpsum } from '../__tests__/testUtils/storybook.testing.utils';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: Paragraph,
  title: 'Komponenter/Paragraph',
  argTypes: {
    // Props
    canBeManuallyFocused: { table: { category: category.props } },
    children: { control: 'text', table: { category: category.props } },
    hasSpacing: { table: { category: category.props } },
    variant: {
      table: {
        category: category.props,
        defaultValue: { summary: getParagraphVariantDefault() },
      },
    },
  },
  args: {
    children: loremIpsum,
  },
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    return (
      <>
        <Heading as={'h1'} hasSpacing>
          {'Flere oppgir kryptoverdier i skattemeldingen'}
        </Heading>
        <Paragraph variant={'ingress'} hasSpacing>
          {'Antall personer som oppgir kryptoverdier i skattemeldingen har økt fra 15.000 til 41.000. ' +
            'Skatteetaten ønsker at det skal bli pliktig for tilbydere av vekslingstjenester å rapportere om transaksjoner og eiere.'}
        </Paragraph>
        <Paragraph hasSpacing>
          {'- Det har vært en god vekst i antall personer som eier kryptovaluta, men fortsatt er det mange som ikke rapporterer sine verdier. ' +
            'Vi har økt vår innsats innen både veiledning og kontroll for at også denne delen av økonomien skal bli riktigere beskattet, sier skattedirektør Nina Schanke Funnemark.'}
        </Paragraph>
        <Paragraph>
          {'Sammenlignet med '}
          <a
            href={
              'https://www.skatteetaten.no/presse/nyhetsrommet/flere-oppgir-kryptoverdier-i-skattemeldingen/'
            }
            target={'_blank'}
            rel={'noreferrer'}
          >
            {'tidligere år'}
          </a>
          {
            ' oppgir langt flere personer at de eier kryptovaluta, og inntekt, formue og fradrag fra kryptovaluta øker også kraftig.'
          }
        </Paragraph>
      </>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;

export const ExampleWithLink: Story = {
  render: (_args): JSX.Element => {
    return (
      <Paragraph>
        {'Dette er et eksempel på et avsnitt med en '}
        <a
          href={'https://www.skatteetaten.no/stilogtone/'}
          target={'_blank'}
          rel={'noreferrer'}
        >
          {'lenke til stil og tone'}
        </a>
        {' og som får  designsystemets typografi.'}
      </Paragraph>
    );
  },
} satisfies Story;
ExampleWithLink.storyName = 'Paragraf med lenke';
ExampleWithLink.parameters = exampleParameters;

export const ExampleWithInlineStyling: Story = {
  render: (_args): JSX.Element => {
    return (
      <Paragraph>
        {'Noen ganger ønsker vi å fremheve tekst med '}
        <strong>{'tydelig utheving'}</strong>
        {', mens andre ganger holder det med '}
        <em>{'lett betoning'}</em>
        {'. Begge deler støttes automatisk i Paragraph.'}
      </Paragraph>
    );
  },
} satisfies Story;
ExampleWithInlineStyling.storyName = 'Paragraf med utheving';
ExampleWithInlineStyling.parameters = exampleParameters;
