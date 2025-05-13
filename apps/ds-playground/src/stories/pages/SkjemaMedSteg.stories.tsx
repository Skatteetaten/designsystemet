import {
  ChangeEvent,
  FocusEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
  type JSX,
} from 'react';

import { InlineButton, Link, LinkGroup } from '@skatteetaten/ds-buttons';
import { StepList } from '@skatteetaten/ds-collections';
import { Card, DescriptionList } from '@skatteetaten/ds-content';
import { dsI18n, langToLocale } from '@skatteetaten/ds-core-utils';
import {
  Checkbox,
  ErrorSummary,
  RadioGroup,
  TextField,
} from '@skatteetaten/ds-forms';
import {
  ArrowBackSVGpath,
  EditSVGpath,
  PrintSVGpath,
} from '@skatteetaten/ds-icons';
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
  const [hasLocalAddress, setHasLocalAddress] = useState<string>('');
  const [hasLocalAddressError, setHasLocalAddressError] = useState(false);

  type Contacts = {
    address: string;
    postalCode: string;
    city: string;
    phone: string;
  };

  type ContactsError = {
    address: string;
    postalCode: string;
    phone: string;
  };

  const [contactsInput, setContactsInput] = useState<Contacts>({
    address: '',
    postalCode: '',
    city: '',
    phone: '',
  });
  const [contactsError, setContactsError] = useState<ContactsError>({
    address: '',
    postalCode: '',
    phone: '',
  });

  const [showErrorSummary, setShowErrorSummary] = useState(false);

  const [consent, setConsent] = useState<string>('');
  const [consentError, setConsentError] = useState(false);

  useEffect(() => {
    if (!Object.values(contactsError).some((error) => error)) {
      setShowErrorSummary(false);
    }
  }, [contactsError]);

  const validateContacts = (): ContactsError => {
    const errors: ContactsError = {
      address: contactsInput.address ? '' : 'Postadresse må fylles ut.',
      postalCode: contactsInput.postalCode ? '' : 'Postnummer må fylles ut.',
      phone: contactsInput.phone ? '' : 'Telefonnummer må fylles ut.',
    };
    return errors;
  };

  const handleInputChange =
    (field: keyof Contacts) =>
    (e: ChangeEvent<HTMLInputElement>): void => {
      const value = e.target.value;
      setContactsError((prev) => ({
        ...prev,
        [field]: '',
      }));
      setContactsInput((prevState) => ({
        ...prevState,
        [field]: value,
        city:
          field === 'postalCode' && /^\d{4}$/.test(value)
            ? 'Oslo'
            : prevState.city,
      }));
    };

  const handleBlur =
    (field: keyof Contacts) =>
    (e: FocusEvent<HTMLInputElement>): void => {
      setContactsError((prev) => ({
        ...prev,
        [field]: validateField(field, e.target),
      }));
    };

  const validateField = (
    field: keyof Contacts,
    target: EventTarget & HTMLInputElement
  ): string => {
    switch (field) {
      case 'address':
        return target.validity.valueMissing ? 'Adresse må fylles ut.' : '';
      case 'postalCode':
        if (target.validity.valueMissing) return 'Postnummer må fylles ut.';
        if (target.validity.patternMismatch)
          return 'Postnummer må inneholde fire tall.';
        return '';
      case 'phone':
        if (target.validity.valueMissing) return 'Telefonnummer må fylles ut.';
        if (target.validity.patternMismatch)
          return 'Telefonnummer må inneholde tall.';
        return '';
      default:
        return '';
    }
  };

  const onNext = (): void => {
    setActiveStep(activeStep + 1);
    setConsent('');
  };

  const handleNextStep = (): void => {
    if (!hasLocalAddress) {
      setHasLocalAddressError(true);
      return;
    }

    if (hasLocalAddress === 'ja') {
      const errors = validateContacts();
      setContactsError(errors);

      if (Object.values(errors).some((error) => error)) {
        setShowErrorSummary(true);
        return;
      }
    }

    onNext();
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
        onEntitySelect={async () => {
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
              {me.name}
            </DescriptionList.Element>
            <DescriptionList.Element term={'Fødselsnummer'}>
              {/* formattere  */}
              {me.personId}
            </DescriptionList.Element>
          </DescriptionList>
          <Paragraph className={styles.wideContent} hasSpacing>
            <i>
              {'Alle felt må fylles ut med mindre feltet er merket valgfritt.'}
            </i>
          </Paragraph>
        </div>
        <StepList className={styles.marginBottomL}>
          {activeStep >= 1 && (
            <StepList.Step
              title={'Kort beskrivelse av steg'}
              titleAs={'h2'}
              stepNumber={1}
              variant={activeStep === 1 ? 'active' : 'passive'}
              shouldAutoFocusWhenActive={false}
              onNext={handleNextStep}
            >
              {activeStep === 1 && (
                <>
                  <Paragraph className={styles.marginTopM} hasSpacing>
                    {
                      'Fremskutt hjelpetekst skal forklare brukeren hvordan eller hvorfor de skal fylle ut feltene.'
                    }
                  </Paragraph>
                  <RadioGroup
                    legend={'Har du norsk adresse?'}
                    selectedValue={hasLocalAddress}
                    errorMessage={
                      hasLocalAddressError
                        ? 'Fyll ut om du har norsk adresse'
                        : undefined
                    }
                    onChange={(e): void => {
                      setHasLocalAddressError(false);
                      setHasLocalAddress(e.target.value);
                    }}
                  >
                    <RadioGroup.Radio value={'ja'}>
                      {'Ja, har norsk adresse'}
                    </RadioGroup.Radio>
                    <RadioGroup.Radio value={'nei'}>
                      {'Nei, har ikke norsk adresse'}
                    </RadioGroup.Radio>
                  </RadioGroup>
                  {hasLocalAddress === 'ja' && (
                    <>
                      <TextField
                        id={'input_address'}
                        label={'Postadresse'}
                        className={styles.address}
                        value={contactsInput.address}
                        errorMessage={contactsError.address}
                        required
                        onChange={handleInputChange('address')}
                        onBlur={handleBlur('address')}
                      />
                      <div className={styles.flex}>
                        <TextField
                          id={'input_postalcode'}
                          label={'Postnummer'}
                          className={`${styles.postalCode} ${styles.marginRightM}`}
                          classNames={{ errorMessage: styles.noWrap }}
                          value={contactsInput.postalCode}
                          inputMode={'numeric'}
                          pattern={'[0-9]{4}'}
                          maxLength={4}
                          minLength={4}
                          errorMessage={contactsError.postalCode}
                          required
                          onChange={handleInputChange('postalCode')}
                          onBlur={handleBlur('postalCode')}
                        />
                        <TextField
                          label={'Poststed'}
                          className={styles.city}
                          value={contactsInput.city}
                          required
                          readOnly
                        />
                      </div>
                      <TextField
                        id={'input_phone'}
                        label={'Telefonnummer'}
                        classNames={{ textbox: styles.phone }}
                        value={contactsInput.phone}
                        inputMode={'tel'}
                        pattern={'[0-9+ ]*'}
                        errorMessage={contactsError.phone}
                        required
                        onChange={handleInputChange('phone')}
                        onBlur={handleBlur('phone')}
                      />
                      <ErrorSummary
                        showErrorSummary={showErrorSummary}
                        className={styles.marginTopM}
                        title={'For å gå videre må du rette opp i følgende:'}
                        titleAs={'h3'}
                      >
                        {contactsError.address && (
                          <ErrorSummary.Error referenceId={'input_address'}>
                            {'Adresse må fylles ut.'}
                          </ErrorSummary.Error>
                        )}
                        {contactsError.postalCode && (
                          <ErrorSummary.Error referenceId={'input_postalcode'}>
                            {'Postnummer må fylles ut.'}
                          </ErrorSummary.Error>
                        )}
                        {contactsError.phone && (
                          <ErrorSummary.Error referenceId={'input_phone'}>
                            {'Telefonnummer må fylles ut.'}
                          </ErrorSummary.Error>
                        )}
                      </ErrorSummary>
                    </>
                  )}
                  {hasLocalAddress === 'nei' && (
                    <Paragraph>
                      {'Felter med utenlandsk format eller tilsvarende'}
                    </Paragraph>
                  )}
                </>
              )}
              {activeStep > 1 && (
                <div className={`${styles.flex} ${styles.marginTopM}`}>
                  <Paragraph className={styles.marginRightM}>
                    {hasLocalAddress === 'ja'
                      ? `${me.name}, ${contactsInput.address}, ${contactsInput.postalCode}, ${contactsInput.city}, ${contactsInput.phone}`
                      : `${me.name}, Utenlandsk adresse`}
                  </Paragraph>
                  <InlineButton
                    svgPath={EditSVGpath}
                    onClick={(): void => {
                      setActiveStep(1);
                    }}
                  >
                    {'Endre'}
                  </InlineButton>
                </div>
              )}
            </StepList.Step>
          )}
          {activeStep === 2 && (
            <StepList.Step
              title={'Oppsummering før innsending'}
              titleAs={'h2'}
              stepNumber={2}
              nextButtonText={'Send inn'}
              variant={activeStep === 2 ? 'active' : 'passive'}
              onNext={(): void => {
                if (consent) {
                  window.alert(
                    'Når Kvitteringssiden er ferdig, blir du sendt dit.'
                  );
                } else {
                  setConsentError(true);
                }
              }}
            >
              <Card color={'ochre'} className={styles.marginTopM}>
                <Card.Content>
                  <DescriptionList hasSpacing>
                    <DescriptionList.Element term={'Innsender'}>
                      {me.name}
                    </DescriptionList.Element>
                    <DescriptionList.Element term={'Adresse'}>
                      <span className={styles.preLine}>
                        {hasLocalAddress === 'ja'
                          ? `${contactsInput.address}\n${contactsInput.postalCode} ${contactsInput.city}`
                          : 'Utenlandsk adresse'}
                      </span>
                    </DescriptionList.Element>
                    {hasLocalAddress && (
                      <DescriptionList.Element term={'Telefon'}>
                        {/* formattere  */}
                        {contactsInput.phone}
                      </DescriptionList.Element>
                    )}
                  </DescriptionList>
                  <Checkbox
                    value={'consent'}
                    errorMessage={
                      consentError
                        ? 'Du må bekrefte at opplysningene stemmer'
                        : undefined
                    }
                    required
                    onChange={(e): void => {
                      setConsentError(false);
                      setConsent(e.target.value);
                    }}
                  >
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
