import { Heading, Paragraph } from '@skatteetaten/ds-typography';

export default function ParagraphNewsStandardStateExample(): JSX.Element {
  return (
    <>
      <Heading as={'h1'} hasSpacing>
        {'Flere oppgir kryptoverdier i skattemeldingen'}
      </Heading>
      <Paragraph variant={'ingress'} hasSpacing>
        {'Antall personer som oppgir kryptoverdier i skattemeldingen har økt fra 15 000 til 41 000. ' +
          'Skatteetaten ønsker at det skal bli pliktig for tilbydere av vekslingstjenester å rapportere om transaksjoner og eiere.'}
      </Paragraph>
      <Paragraph hasSpacing>
        {'– Det har vært en god vekst i antall personer som eier kryptovaluta, men fortsatt er det mange som ikke rapporterer sine verdier. ' +
          'Vi har økt vår innsats innen både veiledning og kontroll for at også denne delen av økonomien skal bli riktigere beskattet, sier skattedirektor Nina Schanke Funnemark.'}
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
}
