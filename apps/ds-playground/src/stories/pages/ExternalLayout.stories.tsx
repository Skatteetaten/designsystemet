import { JSX, useState, useId } from 'react';

import { linkTo } from '@storybook/addon-links';

import { Link, LinkGroup, ScrollToTopButton } from '@skatteetaten/ds-buttons';
import { StepList } from '@skatteetaten/ds-collections';
import { Card, Panel } from '@skatteetaten/ds-content';
import { Checkbox, ErrorSummary, RadioGroup } from '@skatteetaten/ds-forms';
import { InfoIcon } from '@skatteetaten/ds-icons';
import { Breadcrumbs } from '@skatteetaten/ds-navigation';
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

export const StandardLayout = (): JSX.Element => {
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
            'Layouten er sentret. På større skjermer har man flere containerbredder til rådighet. På mobil er det normalt bare én. Denne teksten ligger i en container med bredden --semantic-responsive-article. Containerbredder er dokumentert på Designtokens-undersiden: '
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
        </Paragraph>
      </div>
      <div className={styles.wideContent}>
        <Panel
          className={styles.marginBottomXL}
          variant={'filled'}
          titleAs={'h2'}
          title={'Størrelser er en del av komponentene'}
          renderIcon={(): JSX.Element => <InfoIcon size={'largePlus'} />}
        >
          {
            'Denne Panelen ligger i en container med bredden --semantic-responsive-wide-content. Innholdet i Panel har en innebygd containerbredde på --semantic-responsive-article, for å venstre- og høyrejustere denne teksten med resten av siden.'
          }
        </Panel>
      </div>
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
              'Stegene i StepList har fått en bredde på --semantic-responsive-article. Dette gjør at innholdet i stegene er venstre- og høyrejustert med resten av siden.'
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
                    hasStep2Error ? 'Kryss av om du vil gå videre' : undefined
                  }
                  hideLegend
                  onChange={(e): void => {
                    setHasStep2Error(false);
                    setStep2(e.target.value);
                  }}
                >
                  <RadioGroup.Radio
                    id={'step2radio'}
                    value={'ja'}
                    description={'Velger du ja, vil du få et positivt resultat'}
                  >
                    {'Ja'}
                  </RadioGroup.Radio>
                  <RadioGroup.Radio
                    value={'nei'}
                    description={
                      'Velger du nei, vil du få et nøytralt resultat'
                    }
                  >
                    {'Nei'}
                  </RadioGroup.Radio>
                </RadioGroup>
                <Paragraph hasSpacing>
                  {
                    'Velger du ingenting og klikker på Neste-knappen, vil du få en feilmelding.'
                  }
                </Paragraph>
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
            title={'Oppsummering før resultat'}
            stepNumber={3}
            onNext={onNext}
          >
            {activeStep === 3 ? (
              <Card color={'ochre'} className={styles.marginTopS}>
                <Card.Content>
                  <Paragraph hasSpacing>
                    {'Oppsummering av valget ditt:'}
                  </Paragraph>
                  <List hasSpacing>
                    <List.Element>{'Du har forstått innholdet'}</List.Element>
                    <List.Element>{`Du vil se et ${step2 === 'ja' ? 'positivt' : 'nøytralt'} resultat`}</List.Element>
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
            title={'Positivt resultat'}
            variant={'positiveResult'}
            stepNumber={4}
            introTitle={'Dette er en overskrift.'}
            introTitleAs={'h4'}
            introContent={
              <Paragraph>
                {'Husk å sette riktig overskrifts-tag til overskriften.'}
              </Paragraph>
            }
          >
            <Paragraph hasSpacing>
              {
                'Her ligger mer utfyllende informasjon om resultatet. I veiledere pleier vi å vise resultatet sammen med StepList. I skjemaer for privatpersoner og virksomheter sender vi brukeren til en egen kvitteringsside.'
              }
            </Paragraph>
            <LinkGroup>
              <LinkGroup.Link
                href={'#'}
                onClick={(e) => {
                  e.preventDefault();
                  linkTo('Sidetyper/Ekstern/Kvittering', 'Kvittering')();
                }}
              >
                {'Eksempel på kvittering'}
              </LinkGroup.Link>
              <LinkGroup.Link
                href={
                  'https://www.skatteetaten.no/stilogtone/monster/skjemadesign/skjema-med-steplist/'
                }
                target={'_blank'}
              >
                {'Skjema med StepList'}
              </LinkGroup.Link>
            </LinkGroup>
            <Paragraph>
              {
                'Resultatet er sentrert. Rammen har fått en maksbredde på --container-m, mens innholdet har en bredde på --semantic-responsive-article for å venstre- og høyrejustere teksten med resten av siden.'
              }
            </Paragraph>
          </StepList.Step>
        )}

        {activeStep >= 4 && step2 === 'nei' && (
          <StepList.Step
            id={`${stepId}-4`}
            title={'Nøytralt resultat'}
            variant={'neutralResult'}
            stepNumber={4}
            introTitle={'Dette er en overskrift.'}
            introTitleAs={'h4'}
            introContent={
              <Paragraph>
                {'Husk å sette riktig overskrifts-tag til overskriften.'}
              </Paragraph>
            }
          >
            <Paragraph hasSpacing>
              {
                'Her ligger mer utfyllende informasjon om resultatet. I veiledere pleier vi å vise resultatet sammen med StepList. I skjemaer for privatpersoner og virksomheter sender vi brukeren til en egen kvitteringsside.'
              }
            </Paragraph>
            <LinkGroup hasSpacing>
              <LinkGroup.Link
                href={'#'}
                onClick={(e) => {
                  e.preventDefault();
                  linkTo('Sidetyper/Ekstern/Kvittering', 'Kvittering')();
                }}
              >
                {'Eksempel på kvittering'}
              </LinkGroup.Link>
              <LinkGroup.Link
                href={
                  'https://www.skatteetaten.no/stilogtone/monster/skjemadesign/skjema-med-steplist/'
                }
                target={'_blank'}
              >
                {'Skjema med StepList'}
              </LinkGroup.Link>
            </LinkGroup>
            <Paragraph>
              {
                'Resultatet er sentrert. Rammen har fått en maksbredde på --container-m, mens innholdet har en bredde på --semantic-responsive-article for å venstre- og høyrejustere teksten med resten av siden.'
              }
            </Paragraph>
          </StepList.Step>
        )}
      </StepList>
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
StandardLayout.storyName = 'Standard sentrert';
