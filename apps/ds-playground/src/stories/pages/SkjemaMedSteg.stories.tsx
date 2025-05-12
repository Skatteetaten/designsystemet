import { MouseEvent, useRef, useState, type JSX } from 'react';

import { InlineButton, Link, LinkGroup } from '@skatteetaten/ds-buttons';
import { StepList } from '@skatteetaten/ds-collections';
import { Card, DescriptionList } from '@skatteetaten/ds-content';
import { dsI18n, langToLocale } from '@skatteetaten/ds-core-utils';
import { Checkbox, RadioGroup, TextField } from '@skatteetaten/ds-forms';
import { ArrowBackSVGpath, PrintSVGpath } from '@skatteetaten/ds-icons';
import {
  Footer,
  TopBannerExternal,
  TopBannerExternalHandle,
  User,
} from '@skatteetaten/ds-layout';
import { Person, RolePicker } from '@skatteetaten/ds-overlays';
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

export const SkjemaMedSteg = (): JSX.Element => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const topBannerRef = useRef<TopBannerExternalHandle>(null);
  const [user, setUser] = useState<User>();

  const me: Person = {
    name: 'Knuslete Foxtrot',
    personId: '12345678910',
    type: 'Person',
  };

  const [activeStep, setActiveStep] = useState(1);
  const [hasNorwegianAddress, setHasNorwegianAddress] = useState<
    string | undefined
  >(undefined);
  const [hasNorwegianAddressError, setHasNorwegianAddressError] =
    useState(false);

  const onNext = (): void => {
    setActiveStep(activeStep + 1);
  };

  return (
    <>
      <TopBannerExternal
        ref={topBannerRef}
        firstColumn={
          <LinkGroup>
            <LinkGroup.Link
              href={'#storybook-root'}
              onClick={(e): void => {
                e.preventDefault();
                topBannerRef.current?.closeMenu?.();
              }}
            >
              {'Skatt'}
            </LinkGroup.Link>
            <LinkGroup.Link
              href={'#storybook-root'}
              onClick={(e): void => {
                e.preventDefault();
                topBannerRef.current?.closeMenu?.();
              }}
            >
              {'Avgift'}
            </LinkGroup.Link>
          </LinkGroup>
        }
        user={user}
        onLanguageClick={(e: MouseEvent<HTMLButtonElement>): void => {
          void dsI18n.changeLanguage(langToLocale[e.currentTarget.lang]);
        }}
        onLogInClick={(): void => modalRef.current?.showModal()}
        onLogOutClick={(): void => setUser(undefined)}
        onUserClick={(): void => modalRef.current?.showModal()}
      />
      <RolePicker
        ref={modalRef}
        me={me}
        onEntitySelect={async (entity) => {
          setUser({
            role: 'meg',
          });
          modalRef.current?.close();
        }}
      />
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
        <StepList className={styles.marginBottomM}>
          {activeStep === 1 && (
            <StepList.Step
              title={'Kort beskrivelse av steg'}
              stepNumber={1}
              variant={activeStep === 1 ? 'active' : 'passive'}
              shouldAutoFocusWhenActive={false}
              onNext={(): void => {
                if (hasNorwegianAddress) {
                  onNext();
                } else {
                  setHasNorwegianAddressError(true);
                }
              }}
            >
              <Paragraph className={styles.marginTopM} hasSpacing>
                {
                  'Fremskutt hjelpetekst skal forklare brukeren hvordan eller hvorfor de skal fylle ut feltene.'
                }
              </Paragraph>
              <RadioGroup
                legend={'Har du norsk adresse?'}
                errorMessage={
                  hasNorwegianAddressError
                    ? 'Fyll ut om du har norsk adresse'
                    : undefined
                }
                onChange={(e): void => {
                  setHasNorwegianAddressError(false);
                  setHasNorwegianAddress(e.target.value);
                }}
              >
                <RadioGroup.Radio value={'ja'}>
                  {'Ja, har norsk adresse'}
                </RadioGroup.Radio>
                <RadioGroup.Radio value={'nei'}>
                  {'Nei, har ikke norsk adresse'}
                </RadioGroup.Radio>
              </RadioGroup>
              {hasNorwegianAddress === 'ja' && (
                <>
                  {/* savner hasSpacing på TextField */}
                  <TextField label={'Postadresse'} className={styles.adress} />
                  <div className={styles.flex}>
                    <TextField
                      label={'Postnummer'}
                      className={`${styles.postalCode} ${styles.marginRightM}`}
                    />
                    <TextField
                      label={'Poststed'}
                      className={styles.city}
                      readOnly
                    />
                  </div>
                  <TextField label={'Telefonnummer'} className={styles.phone} />
                </>
              )}
              {hasNorwegianAddress === 'nei' && (
                <>
                  <TextField
                    label={'Utenlandsk adresse'}
                    className={styles.adress}
                  />
                  <TextField label={'Telefonnummer'} className={styles.phone} />
                </>
              )}
            </StepList.Step>
          )}
          {activeStep === 2 && (
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
          )}
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
      <Footer
        titleFirstColumn={'Skatteetaten'}
        titleSecondColumn={'Følg oss'}
        secondColumn={
          <>
            <Paragraph hasSpacing>
              {'Du kan kontakte oss i sosiale medier.'}
            </Paragraph>
            <LinkGroup color={'white'}>
              <LinkGroup.Link href={'#'}>
                {'Se alle Skatteetatens kontoer'}
              </LinkGroup.Link>
            </LinkGroup>
          </>
        }
        titleThirdColumn={'Presse'}
        thirdColumn={
          <>
            <Paragraph hasSpacing>
              {
                'Pressemeldinger, pressekontaker og annen informasjon for journalister.'
              }
            </Paragraph>
            <LinkGroup color={'white'} hasSpacing>
              <LinkGroup.Link href={'#'}>{'Se vårt presserom'}</LinkGroup.Link>
            </LinkGroup>
            <Heading
              as={'h2'}
              level={3}
              className={styles.marginTopL}
              hasSpacing
            >
              {'Bruke data fra Skatteetaten'}
            </Heading>
            <Paragraph hasSpacing>
              {
                'Skatteetaten deler data som andre virksomheter og etater kan gjenbruke for å fornkle og effektivisere eksisterende og nye digitale tjenester.'
              }
            </Paragraph>
            <LinkGroup color={'white'}>
              <LinkGroup.Link href={'#'}>
                {'Hvordan få tilgang til data'}
              </LinkGroup.Link>
            </LinkGroup>
          </>
        }
      >
        <Footer.LinkFirstColumn href={'#'}>
          {'Jobb i Skatteetaten'}
        </Footer.LinkFirstColumn>
        <Footer.LinkFirstColumn href={'#'}>{'Om oss'}</Footer.LinkFirstColumn>
        <Footer.LinkFirstColumn href={'#'}>
          {'Analyse og rapporter'}
        </Footer.LinkFirstColumn>
        <Footer.LinkFirstColumn href={'#'}>
          {'Forskning'}
        </Footer.LinkFirstColumn>
        <Footer.Link href={'#'}>{'Satser'}</Footer.Link>
        <Footer.Link href={'#'}>{'Skjema og tjenester'}</Footer.Link>
        <Footer.Link href={'#'}>{'RSS'}</Footer.Link>
        <Footer.Link href={'#'}>{'Tips oss'}</Footer.Link>
        <Footer.Link href={'#'} isExternal>
          {'Koronatiltak'}
        </Footer.Link>
      </Footer>
    </>
  );
};
