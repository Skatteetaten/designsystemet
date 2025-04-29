import type { JSX } from 'react';

import { InlineButton, Link } from '@skatteetaten/ds-buttons';
import { StepList } from '@skatteetaten/ds-collections';
import { Card, DescriptionList } from '@skatteetaten/ds-content';
import { Checkbox, RadioGroup, TextField } from '@skatteetaten/ds-forms';
import { ArrowBackSVGpath, PrintSVGpath } from '@skatteetaten/ds-icons';
import { Footer, TopBannerExternal } from '@skatteetaten/ds-layout';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import styles from './pages.module.css';

export default {
  title: 'Sidetyper/Ekstern/Skjema med steg',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true,
    },
  },
};

export const SkjemaMedSteg = (): JSX.Element => (
  <>
    {/* skal TopBanner og Footer være med? */}
    <TopBannerExternal />
    <main className={styles.mainExternal}>
      <div className={styles.miniNav}>
        <Link href={'#'} svgPath={ArrowBackSVGpath}>
          {'Til Min side'}
        </Link>
        <InlineButton svgPath={PrintSVGpath}>{'Skriv ut'}</InlineButton>
      </div>
      <div className={styles.article}>
        <Heading as={'h1'} level={1} hasSpacing>
          {'Skjematittel'}
        </Heading>
        <DescriptionList hasSpacing>
          <DescriptionList.Element term={'Navn'}>
            {'Knuslete Foxtrot'}
          </DescriptionList.Element>
          <DescriptionList.Element term={'Fødselsnummer'}>
            {/* formattere  */}
            {'12345678910'}
          </DescriptionList.Element>
        </DescriptionList>
        <Paragraph className={styles.wideContent} hasSpacing>
          <i>
            {'Alle felt må fylles ut med mindre feltet er merket valgfritt.'}
          </i>
        </Paragraph>
      </div>
      <StepList>
        <StepList.Step title={'Kort beskrivelse av steg'} stepNumber={1}>
          <Paragraph className={styles.marginTopM} hasSpacing>
            {
              'Fremskutt hjelpetekst skal forklare brukeren hvordan eller hvorfor de skal fylle ut feltene.'
            }
          </Paragraph>
          <RadioGroup legend={'Har du norsk adresse?'}>
            <RadioGroup.Radio value={'ja'}>
              {'Ja, har norsk adresse'}
            </RadioGroup.Radio>
            <RadioGroup.Radio value={'nei'}>
              {'Nei, har ikke norsk adresse'}
            </RadioGroup.Radio>
          </RadioGroup>
          {/* savner hasSpacing på TextField */}
          <TextField label={'Postadresse'} className={styles.adress} />
          <div className={styles.flex}>
            <TextField
              label={'Postnummer'}
              className={`${styles.postalCode} ${styles.marginRightM}`}
            />
            <TextField label={'Poststed'} className={styles.city} readOnly />
          </div>
          <TextField label={'Telefonnummer'} className={styles.phone} />
        </StepList.Step>
        <StepList.Step
          title={'Oppsummering før innsending'}
          stepNumber={2}
          nextButtonText={'Send inn'}
        >
          <Card color={'ochre'} className={styles.marginTopM}>
            <Card.Content>
              <DescriptionList hasSpacing>
                <DescriptionList.Element term={'Innsender'}>
                  {'Knuslete Foxtrot'}
                </DescriptionList.Element>
                <DescriptionList.Element term={'Adresse'}>
                  <span className={styles.preLine}>
                    {'Adresseveien 1\n1234 Lillevik'}
                  </span>
                </DescriptionList.Element>
                <DescriptionList.Element term={'Telefon'}>
                  {/* formattere  */}
                  {'98765432'}
                </DescriptionList.Element>
              </DescriptionList>
              <Checkbox>
                {'Jeg bekrefter at opplysningene over stemmer.'}
              </Checkbox>
            </Card.Content>
          </Card>
        </StepList.Step>
      </StepList>
      <div className={styles.article}>
        <div className={styles.flex}>
          <InlineButton className={styles.marginRightM}>
            {'Lagre og fortsett senere'}
          </InlineButton>
          <InlineButton>{'Avbryt og slett'}</InlineButton>
        </div>
        <Paragraph className={styles.marginTopM} hasSpacing>
          <i>
            {
              'Når du klikker på "Neste", blir informasjonen som du har skrevet inn automatisk lagret.'
            }
          </i>
        </Paragraph>
      </div>
    </main>
    <Footer titleFirstColumn={'Skatteetaten'} />
  </>
);
