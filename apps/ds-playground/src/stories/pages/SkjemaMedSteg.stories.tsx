import { ChangeEvent, useEffect, useState, type JSX } from 'react';

import { linkTo } from '@storybook/addon-links';

import { InlineButton, Link } from '@skatteetaten/ds-buttons';
import { StepList } from '@skatteetaten/ds-collections';
import { Card, DescriptionList } from '@skatteetaten/ds-content';
import {
  formatNationalIdentityNumber,
  formatPhoneNumber,
} from '@skatteetaten/ds-core-utils';
import {
  Checkbox,
  ErrorSummary,
  RadioGroup,
  TextField,
} from '@skatteetaten/ds-forms';
import { ArrowBackSVGpath, PrintSVGpath } from '@skatteetaten/ds-icons';
import { Person } from '@skatteetaten/ds-overlays';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import styles from './SkjemaMedSteg.module.css';
import stylesAsString from './SkjemaMedSteg.module.css?raw';
import { includeStylesTransform } from '../../../.storybook/helpers';
import { withPageLayout } from '../../../.storybook/pagelayout-decorator';

export default {
  title: 'Sidetyper/Ekstern/Skjema med steg',
  decorators: [withPageLayout],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true,
    },
    docs: {
      source: {
        transform: includeStylesTransform(stylesAsString),
      },
    },
  },
};

export const SkjemaMedSteg = (): JSX.Element => {
  const me: Person = {
    name: 'Knuslete Foxtrot',
    personId: '12345678910',
    type: 'Person',
  };

  const [activeStep, setActiveStep] = useState(1);
  const [hasLocalAddress, setHasLocalAddress] = useState<string>('');
  const [localAddressErrorMessage, setLocalAddressErrorMessage] =
    useState<string>('');

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

  const [hasGivenConsent, setHasGivenConsent] = useState(false);
  const [consentError, setConsentError] = useState<string>('');

  useEffect(() => {
    if (!Object.values(contactsError).some((error) => error)) {
      setShowErrorSummary(false);
    }
  }, [contactsError]);

  const handleInputChange =
    (field: keyof ContactsError) =>
    (e: ChangeEvent<HTMLInputElement>): void => {
      const value = e.target.value;
      if (contactsError[field] !== '') {
        setContactsError((prev) => ({
          ...prev,
          [field]: '',
        }));
      }
      setContactsInput((prevState) => ({
        ...prevState,
        [field]: value,
        city:
          field === 'postalCode' && /^\d{4}$/.test(value)
            ? 'Oslo'
            : prevState.city,
      }));
    };

  const handleBlur = (field: keyof Contacts, value: string): void => {
    setContactsError((prev) => ({
      ...prev,
      [field]: validateField(field, value),
    }));
  };

  const validateField = (field: keyof Contacts, value: string): string => {
    switch (field) {
      case 'address':
        return value ? '' : 'Postadresse må fylles ut.';
      case 'postalCode':
        if (!value) return 'Postnummer må fylles ut.';
        if (!/^\d{4}$/.test(value)) return 'Postnummer må inneholde fire tall.';
        return '';
      case 'phone':
        if (!value) return 'Telefonnummer må fylles ut.';
        if (!/^[0-9+ ]*$/.test(value))
          return 'Telefonnummer må inneholde tall.';
        return '';
      default:
        return '';
    }
  };

  const onNext = (): void => {
    setActiveStep(activeStep + 1);
    setHasGivenConsent(false);
  };

  const setLocalAddressError = (): boolean => {
    if (!hasLocalAddress) {
      setLocalAddressErrorMessage('Svar på om du har norsk adresse.');
      return true;
    }
    return false;
  };

  const setConsentErrorMessage = (): void => {
    setConsentError('Du må bekrefte at opplysningene over stemmer.');
  };

  const handleNextStep = (): void => {
    if (setLocalAddressError()) return;

    if (hasLocalAddress === 'ja') {
      const updatedErrors: ContactsError = { ...contactsError };

      Object.entries(contactsInput).forEach(([field, value]) => {
        updatedErrors[field as keyof ContactsError] = validateField(
          field as keyof ContactsError,
          value
        );
      });

      setContactsError(updatedErrors);

      if (Object.values(updatedErrors).filter((error) => error).length > 1) {
        setShowErrorSummary(true);
        return;
      }
      if (Object.values(updatedErrors).some((error) => error)) {
        return;
      }
    }
    onNext();
  };

  return (
    <main className={styles.mainExternal}>
      <div className={styles.miniNav}>
        <Link href={'#'} svgPath={ArrowBackSVGpath}>
          {'Til Min side'}
        </Link>
        <InlineButton svgPath={PrintSVGpath}>{'Skriv ut'}</InlineButton>
      </div>
      <div className={styles.article}>
        <Heading as={'h1'} hasSpacing>
          {'Skjematittel'}
        </Heading>
        <DescriptionList hasSpacing>
          <DescriptionList.Element term={'Navn'}>
            {me.name}
          </DescriptionList.Element>
          <DescriptionList.Element term={'Fødselsnummer'}>
            {formatNationalIdentityNumber(me.personId)}
          </DescriptionList.Element>
        </DescriptionList>
        <Paragraph className={styles.wideContent} hasSpacing>
          <i>
            {'Alle felt må fylles ut med mindre feltet er merket valgfritt.'}
          </i>
        </Paragraph>
      </div>
      <StepList className={styles.stepList}>
        {activeStep >= 1 && (
          <StepList.Step
            title={'Kort beskrivelse av steg'}
            titleAs={'h2'}
            stepNumber={1}
            variant={activeStep === 1 ? 'active' : 'passive'}
            nextButtonProps={{ ariaDescribedby: 'infoNextButton' }}
            shouldAutoFocusWhenActive={false}
            onNext={handleNextStep}
            onEdit={activeStep > 1 ? (): void => setActiveStep(1) : undefined}
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
                  errorMessage={localAddressErrorMessage}
                  onBlur={setLocalAddressError}
                  onChange={(e): void => {
                    setLocalAddressErrorMessage('');
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
                      hasSpacing
                      required
                      onChange={handleInputChange('address')}
                      onBlur={(e) => handleBlur('address', e.target.value)}
                    />
                    <div className={styles.flexWrap}>
                      <TextField
                        id={'input_postalCode'}
                        label={'Postnummer'}
                        className={`${styles.postalCode} ${styles.marginRightM}`}
                        classNames={{ errorMessage: styles.noWrap }}
                        value={contactsInput.postalCode}
                        inputMode={'numeric'}
                        pattern={'[0-9]{4}'}
                        maxLength={4}
                        minLength={4}
                        errorMessage={contactsError.postalCode}
                        hasSpacing
                        required
                        onChange={handleInputChange('postalCode')}
                        onBlur={(e) => handleBlur('postalCode', e.target.value)}
                      />
                      <TextField
                        label={'Poststed'}
                        className={styles.city}
                        value={contactsInput.city}
                        hasSpacing
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
                      onBlur={(e) => handleBlur('phone', e.target.value)}
                    />
                    <div className={styles.errorSummaryWrapper}>
                      <ErrorSummary
                        showErrorSummary={showErrorSummary}
                        title={'For å gå videre må du rette opp i følgende:'}
                        titleAs={'h3'}
                      >
                        {Object.entries(contactsError)
                          .filter(([_, error]) => error)
                          .map(([field, error]) => (
                            <ErrorSummary.Error
                              key={field}
                              referenceId={`input_${field}`}
                            >
                              {error}
                            </ErrorSummary.Error>
                          ))}
                      </ErrorSummary>
                    </div>
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
              <div className={styles.flexWrap}>
                <Paragraph className={styles.marginRightM}>
                  {hasLocalAddress === 'ja'
                    ? `${me.name}, ${contactsInput.address}, ${contactsInput.postalCode}, ${contactsInput.city}, ${formatPhoneNumber(contactsInput.phone)}`
                    : `${me.name}, Utenlandsk adresse`}
                </Paragraph>
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
            onNext={
              hasGivenConsent
                ? linkTo('Sidetyper/Ekstern/Kvittering', 'Kvittering')
                : setConsentErrorMessage
            }
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
                      {formatPhoneNumber(contactsInput.phone)}
                    </DescriptionList.Element>
                  )}
                </DescriptionList>
                <Checkbox
                  checked={hasGivenConsent}
                  errorMessage={consentError}
                  required
                  onBlur={hasGivenConsent ? undefined : setConsentErrorMessage}
                  onChange={(e): void => {
                    setConsentError('');
                    setHasGivenConsent(e.target.checked);
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
        <div className={styles.flexWrap}>
          <InlineButton
            className={`${styles.marginRightM} ${styles.marginBottomM}`}
          >
            {'Lagre og fortsett senere'}
          </InlineButton>
          <InlineButton className={styles.marginBottomM}>
            {'Avbryt og slett'}
          </InlineButton>
        </div>
        <Paragraph id={'infoNextButton'} hasSpacing>
          <i>
            {
              'Når du klikker på «Neste», blir informasjonen som du har skrevet inn automatisk lagret.'
            }
          </i>
        </Paragraph>
      </div>
    </main>
  );
};
