import { JSX, useRef, useState, useId } from 'react';

import { linkTo } from '@storybook/addon-links';

import { Button, Link, ScrollToTopButton } from '@skatteetaten/ds-buttons';
import { StepList } from '@skatteetaten/ds-collections';
import { Card, Panel } from '@skatteetaten/ds-content';
import { Checkbox, ErrorSummary, RadioGroup } from '@skatteetaten/ds-forms';
import { InfoIcon } from '@skatteetaten/ds-icons';
import { Breadcrumbs } from '@skatteetaten/ds-navigation';
import { Modal } from '@skatteetaten/ds-overlays';
import { Heading, List, Paragraph } from '@skatteetaten/ds-typography';

import stylesAsString from './ExternalLayout.module.scss?raw';
import { includeStylesTransform } from '../../../.storybook/helpers';
import { withPageLayout } from '../../../.storybook/pagelayout-decorator';

import styles from './ExternalLayout.module.scss';

export default {
  title: 'Sidetyper/Ekstern/Layout',
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

export const Layout = (): JSX.Element => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const stepId = useId();
  const [activeStep, setActiveStep] = useState(1);
  const [step2, setStep2] = useState<string | undefined>(undefined);
  const [hasStep2Error, setHasStep2Error] = useState(false);
  const onNext = (): void => {
    const nextStep = activeStep + 1;
    setActiveStep(nextStep);
  };

  return (
    <main className={styles.mainContent}>
      <Breadcrumbs className={styles.marginBottomXL}>
        <Breadcrumbs.List shouldCollapse>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href={'#'}>{'Breadcrumb 1'}</Breadcrumbs.Link>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href={'#'}>{'Breadcrumb 2'}</Breadcrumbs.Link>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href={'#'}>{'Breadcrumb 3'}</Breadcrumbs.Link>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href={'#'}>{'Breadcrumb 4'}</Breadcrumbs.Link>
          </Breadcrumbs.Item>
        </Breadcrumbs.List>
      </Breadcrumbs>
      <div className={styles.article}>
        <Heading as={'h1'} level={2} hasSpacing>
          {'Eksempel på layout i publikumsløsninger'}
        </Heading>
        <Paragraph hasSpacing>
          {
            'Dette er et eksempel på hvordan layouten i eksterne løsninger kan se ut. Layouten er sentret. På storre skjermer har man flere containerbredder til rådighet. På mobil er det normalt bare en.'
          }
        </Paragraph>
        <Button
          className={styles.marginBottomXL}
          onClick={(): void => modalRef.current?.showModal()}
        >
          {'Åpne Modal med StepList'}
        </Button>
        <Modal ref={modalRef} title={'Test med StepList i Modal'}>
          <StepList className={styles.marginBottomXL}>
            {activeStep >= 1 && (
              <StepList.Step
                id={`${stepId}-1`}
                variant={activeStep === 1 ? 'active' : 'passive'}
                title={'StepList har også en innebygd containerbredde'}
                stepNumber={1}
                //slik at ikke første steg stjeler fokus ved initiell lasting av siden
                shouldAutoFocusWhenActive={false}
                onNext={onNext}
              >
                {
                  'Dette innholdet har en fast bredde på --semantic-responsive-article.'
                }
                <br />
                {
                  'Hvis vi erstatter bredden med minmax(40px, var(--semantic-responsive-article)) vil innholdet tilpasse seg bredden på Modal.'
                }
              </StepList.Step>
            )}

            {activeStep >= 2 && (
              <StepList.Step
                id={`${stepId}-2`}
                variant={activeStep === 2 ? 'active' : 'passive'}
                title={'Vil du gå videre?'}
                stepNumber={2}
                onEdit={
                  activeStep > 3 && activeStep < 5
                    ? (): void => setActiveStep(2)
                    : undefined
                }
                onNext={(): void => {
                  if (step2) {
                    onNext();
                  } else {
                    setHasStep2Error(true);
                  }
                }}
              >
                {activeStep === 2 ? (
                  <>
                    <RadioGroup
                      legend={'Vil du gå videre?'}
                      errorMessage={
                        hasStep2Error
                          ? 'Kryss av om du vil gå videre'
                          : undefined
                      }
                      hideLegend
                      onChange={(e): void => {
                        setHasStep2Error(false);
                        setStep2(e.target.value);
                      }}
                    >
                      <RadioGroup.Radio id={'step2radio'} value={'ja'}>
                        {'Ja'}
                      </RadioGroup.Radio>
                      <RadioGroup.Radio value={'nei'}>{'Nei'}</RadioGroup.Radio>
                    </RadioGroup>
                    <ErrorSummary showErrorSummary={hasStep2Error}>
                      <ErrorSummary.Error referenceId={'step2radio'}>
                        {'Vil du gå videre?'}
                      </ErrorSummary.Error>
                    </ErrorSummary>
                  </>
                ) : (
                  <div>{step2}</div>
                )}
              </StepList.Step>
            )}

            {activeStep >= 3 && (
              <StepList.Step
                id={`${stepId}-3`}
                variant={activeStep === 3 ? 'active' : 'passive'}
                title={'Oppsummering før innsending'}
                stepNumber={3}
                onNext={onNext}
              >
                {activeStep === 3 ? (
                  <Card color={'ochre'}>
                    <Card.Content>
                      <List>
                        <List.Element>
                          {'Du har forstått innholdet'}
                        </List.Element>
                        <List.Element>{'Du vil gå videre'}</List.Element>
                      </List>
                      <Checkbox>
                        {'Jeg bekrefter at opplysningene ovenfor stemmer'}
                      </Checkbox>
                    </Card.Content>
                  </Card>
                ) : (
                  <div>{'Oppsummering'}</div>
                )}
              </StepList.Step>
            )}

            {activeStep >= 4 && step2 === 'ja' && (
              <StepList.Step
                id={`${stepId}-4`}
                title={'Vårt veiledende svar'}
                variant={'positiveResult'}
                stepNumber={4}
                introTitle={
                  'Virksomheten skal registreres som særavgiftspliktig.'
                }
                introTitleAs={'h4'}
                introContent={
                  <Paragraph>
                    {
                      'For å bli registrert må du sende en søknad til Skatteetaten. Nedenfor beskriver vi hvordan du går frem og hva du må dokumentere.'
                    }
                  </Paragraph>
                }
              >
                <Paragraph>{'Du må gjøre følgende:'}</Paragraph>
                <List as={'ol'}>
                  <List.Element>
                    {
                      'Du må bestemme hvilken organisasjonsform som passer best.'
                    }
                  </List.Element>
                  <List.Element>
                    {
                      'Registrere bedriften i Enhetsregisteret ved å fylle ut Samordnet'
                    }
                    {'registermelding'}
                  </List.Element>
                  <List.Element>
                    {
                      'Dersom bedriften din har avgiftspliktig omsetning og/eller uttak'
                    }
                    {
                      'overstiger kr 50 000 i løpet av en 12 måneders periode, må du'
                    }
                    {'registrere virksomheten i Merverdiavgiftsregisteret.'}
                  </List.Element>
                </List>
              </StepList.Step>
            )}

            {activeStep >= 4 && step2 === 'nei' && (
              <StepList.Step
                id={`${stepId}-4`}
                title={'neutralt resultat'}
                variant={'neutralResult'}
                stepNumber={4}
              >
                {'more brødtekst'}
              </StepList.Step>
            )}
          </StepList>
        </Modal>
      </div>
      <Panel
        className={styles.marginBottomXL}
        variant={'filled'}
        titleAs={'h2'}
        title={'Størrelser er en del av komponentene'}
        renderIcon={(): JSX.Element => <InfoIcon size={'largePlus'} />}
      >
        {
          'Panel har en maksbredde på --container-m, mens innholdet i Panel har en maksbredde på --semantic-responsive-article. Containerbredder er dokumentert på Designtokens-undersiden: '
        }
        <Link
          href={'#'}
          onClick={(e) => {
            e.preventDefault();
            linkTo('Designtokens/Containers')();
          }}
        >
          {'Containers'}
        </Link>
        {'.'}
      </Panel>
      <StepList className={styles.marginBottomXL}>
        {activeStep >= 1 && (
          <StepList.Step
            id={`${stepId}-1`}
            variant={activeStep === 1 ? 'active' : 'passive'}
            title={'StepList har også en innebygd containerbredde'}
            stepNumber={1}
            //slik at ikke første steg stjeler fokus ved initiell lasting av siden
            shouldAutoFocusWhenActive={false}
            onNext={onNext}
          >
            {'--semantic-responsive-article er bredden på StepList innholdet.'}
          </StepList.Step>
        )}

        {activeStep >= 2 && (
          <StepList.Step
            id={`${stepId}-2`}
            variant={activeStep === 2 ? 'active' : 'passive'}
            title={'Vil du gå videre?'}
            stepNumber={2}
            onEdit={
              activeStep > 3 && activeStep < 5
                ? (): void => setActiveStep(2)
                : undefined
            }
            onNext={(): void => {
              if (step2) {
                onNext();
              } else {
                setHasStep2Error(true);
              }
            }}
          >
            {activeStep === 2 ? (
              <>
                <RadioGroup
                  legend={'Vil du gå videre?'}
                  errorMessage={
                    hasStep2Error ? 'Kryss av om du vil gå videre' : undefined
                  }
                  hideLegend
                  onChange={(e): void => {
                    setHasStep2Error(false);
                    setStep2(e.target.value);
                  }}
                >
                  <RadioGroup.Radio id={'step2radio'} value={'ja'}>
                    {'Ja'}
                  </RadioGroup.Radio>
                  <RadioGroup.Radio value={'nei'}>{'Nei'}</RadioGroup.Radio>
                </RadioGroup>
                <ErrorSummary showErrorSummary={hasStep2Error}>
                  <ErrorSummary.Error referenceId={'step2radio'}>
                    {'Vil du gå videre?'}
                  </ErrorSummary.Error>
                </ErrorSummary>
              </>
            ) : (
              <div>{step2}</div>
            )}
          </StepList.Step>
        )}

        {activeStep >= 3 && (
          <StepList.Step
            id={`${stepId}-3`}
            variant={activeStep === 3 ? 'active' : 'passive'}
            title={'Oppsummering før innsending'}
            stepNumber={3}
            onNext={onNext}
          >
            {activeStep === 3 ? (
              <Card color={'ochre'}>
                <Card.Content>
                  <List>
                    <List.Element>{'Du har forstått innholdet'}</List.Element>
                    <List.Element>{'Du vil gå videre'}</List.Element>
                  </List>
                  <Checkbox>
                    {'Jeg bekrefter at opplysningene ovenfor stemmer'}
                  </Checkbox>
                </Card.Content>
              </Card>
            ) : (
              <div>{'Oppsummering'}</div>
            )}
          </StepList.Step>
        )}

        {activeStep >= 4 && step2 === 'ja' && (
          <StepList.Step
            id={`${stepId}-4`}
            title={'Vårt veiledende svar'}
            variant={'positiveResult'}
            stepNumber={4}
            introTitle={'Virksomheten skal registreres som særavgiftspliktig.'}
            introTitleAs={'h4'}
            introContent={
              <Paragraph>
                {
                  'For å bli registrert må du sende en søknad til Skatteetaten. Nedenfor beskriver vi hvordan du går frem og hva du må dokumentere.'
                }
              </Paragraph>
            }
          >
            <Paragraph>{'Du må gjøre følgende:'}</Paragraph>
            <List as={'ol'}>
              <List.Element>
                {'Du må bestemme hvilken organisasjonsform som passer best.'}
              </List.Element>
              <List.Element>
                {
                  'Registrere bedriften i Enhetsregisteret ved å fylle ut Samordnet'
                }
                {'registermelding'}
              </List.Element>
              <List.Element>
                {
                  'Dersom bedriften din har avgiftspliktig omsetning og/eller uttak'
                }
                {
                  'overstiger kr 50 000 i løpet av en 12 måneders periode, må du'
                }
                {'registrere virksomheten i Merverdiavgiftsregisteret.'}
              </List.Element>
            </List>
          </StepList.Step>
        )}

        {activeStep >= 4 && step2 === 'nei' && (
          <StepList.Step
            id={`${stepId}-4`}
            title={'neutralt resultat'}
            variant={'neutralResult'}
            stepNumber={4}
          >
            {'more brødtekst'}
          </StepList.Step>
        )}
      </StepList>
      <Card color={'ochre'} className={styles.marginBottomXL}>
        <Card.Header>
          <strong>{'Card har også innebygd containerbredde:'}</strong>
        </Card.Header>
        <Card.Content>
          <List>
            <List.Element>{'max-width er --container-m'}</List.Element>
            <List.Element>
              {'ser ikke bra ut på større skjermer enn container-m'}
            </List.Element>
          </List>
        </Card.Content>
      </Card>
      <section className={styles.responsiveContainer}>
        {'--semantic-responsive-container'}
      </section>
      <section className={styles.responsiveWideContent}>
        {'--semantic-responsive-wide-content'}
      </section>
      <section className={styles.responsiveArticle}>
        {'--semantic-responsive-article'}
      </section>
      <ScrollToTopButton />
    </main>
  );
};
