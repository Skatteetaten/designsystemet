import {
  getParagraphVariantDefault,
  Heading,
  Paragraph,
} from '@skatteetaten/ds-typography';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { loremIpsum } from '../__tests__/testUtils/storybook.testing.utils';
import { exampleParameters } from '../utils/stories.utils';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: Paragraph,
  title: 'Komponenter/Paragraph',
  argTypes: {
    // Props
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
  parameters: {
    version: getVersion('ds-typography'),
  },
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args) => (
    <>
      <Heading as={'h1'} level={1} hasSpacing>
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
        >
          {'tidligere år'}
        </a>
        {
          ' oppgir langt flere personer at de eier kryptovaluta, og inntekt, formue og fradrag fra kryptovaluta øker også kraftig.'
        }
      </Paragraph>
    </>
  ),
} satisfies Story;
Examples.parameters = exampleParameters;
