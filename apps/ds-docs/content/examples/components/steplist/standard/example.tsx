import { type ReactElement, useId, useState } from 'react';

import { OpenClose, StepList } from '@skatteetaten/ds-collections';
import { Card } from '@skatteetaten/ds-content';
import { Checkbox, ErrorSummary, RadioGroup } from '@skatteetaten/ds-forms';
import { List, Paragraph } from '@skatteetaten/ds-typography';

export default function StepListStandardExample(): ReactElement {
  const stepId = useId();
  const [activeStep, setActiveStep] = useState(1);
  const [step3, setStep3] = useState<string | undefined>(undefined);
  const [hasStep3Error, setHasStep3Error] = useState(false);

  const onNext = (): void => {
    const nextStep = activeStep + 1;
    setActiveStep(nextStep);
  };

  return (
    <StepList>
      {activeStep >= 1 && (
        <StepList.Step
          id={`${stepId}-1`}
          variant={activeStep === 1 ? 'active' : 'passive'}
          title={'Hva holder du på med?'}
          stepNumber={1}
          shouldAutoFocusWhenActive={false}
          onEdit={
            activeStep > 1 && activeStep < 5
              ? (): void => setActiveStep(1)
              : undefined
          }
          onNext={onNext}
        >
          {'Varer og tjenester'}
        </StepList.Step>
      )}

      {activeStep >= 2 && (
        <StepList.Step
          id={`${stepId}-2`}
          variant={activeStep === 2 ? 'active' : 'passive'}
          title={'Hva gjør du?'}
          stepNumber={2}
          onEdit={
            activeStep > 2 && activeStep < 5
              ? (): void => setActiveStep(2)
              : undefined
          }
          onNext={onNext}
        >
          {'Selger'}
        </StepList.Step>
      )}

      {activeStep >= 3 && (
        <StepList.Step
          id={`${stepId}-3`}
          variant={activeStep === 3 ? 'active' : 'passive'}
          title={'Selger du varer og tjenester for egen regning?'}
          stepNumber={3}
          onEdit={
            activeStep > 3 && activeStep < 5
              ? (): void => setActiveStep(2)
              : undefined
          }
          onNext={(): void => {
            if (step3) {
              onNext();
            } else {
              setHasStep3Error(true);
            }
          }}
        >
          {activeStep === 3 ? (
            <>
              <RadioGroup
                legend={
                  'Selger du varer og tjenester for egen regning og risiko?'
                }
                errorMessage={
                  hasStep3Error
                    ? 'Kryss av hvorvidt du selger varer  og tjenester'
                    : undefined
                }
                hideLegend
                onChange={(event): void => {
                  setHasStep3Error(false);
                  setStep3(event.target.value);
                }}
              >
                <RadioGroup.Radio id={'step3radio'} value={'ja'}>
                  {'Ja'}
                </RadioGroup.Radio>
                <RadioGroup.Radio value={'nei'}>{'Nei'}</RadioGroup.Radio>
              </RadioGroup>

              <OpenClose
                title={'Hva mener vi med egen regning og risiko?'}
                size={'small'}
              >
                <Paragraph hasSpacing>
                  {
                    'At du driver for egen regning og risiko innebærer at det er du som har det økonomiske ansvaret for gjeld og forpliktelser. Det innebærer også at det er du som dekker kostnadene i virksomheten, for eksempel kostnader til materiale eller andre driftskostnader.'
                  }{' '}
                </Paragraph>
                <Paragraph>
                  {
                    'I tillegg vil du ha det kontraktsmessige ansvaret for at oppdrag blir utført og ansvar for å dekke et eventuelt underskudd.'
                  }
                </Paragraph>
              </OpenClose>
              <ErrorSummary showErrorSummary={hasStep3Error}>
                <ErrorSummary.Error referenceId={'step3radio'}>
                  {'Selger du varer og tjenester for egen regning?'}
                </ErrorSummary.Error>
              </ErrorSummary>
            </>
          ) : (
            <div>{step3}</div>
          )}
        </StepList.Step>
      )}

      {activeStep >= 4 && (
        <StepList.Step
          id={`${stepId}-4`}
          variant={activeStep === 4 ? 'active' : 'passive'}
          title={'Oppsummering før innsending'}
          stepNumber={4}
          onNext={onNext}
        >
          {activeStep === 4 ? (
            <Card color={'ochre'}>
              <Card.Content>
                <List>
                  <List.Element>
                    {'Du jobber med varer og tjenester'}
                  </List.Element>
                  <List.Element>{'Du selger'}</List.Element>
                  <List.Element>
                    {'Du selger for egen regning og risiko'}
                  </List.Element>
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

      {activeStep >= 5 && step3 === 'ja' && (
        <StepList.Step
          id={`${stepId}-5`}
          title={'Vårt veiledende svar'}
          variant={'positiveResult'}
          stepNumber={5}
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
              {'overstiger kr 50 000 i løpet av en 12 måneders periode, må du'}
              {'registrere virksomheten i Merverdiavgiftsregisteret.'}
            </List.Element>
          </List>
        </StepList.Step>
      )}

      {activeStep >= 5 && step3 === 'nei' && (
        <StepList.Step
          id={`${stepId}-5`}
          title={'Nøytralt resultat'}
          variant={'neutralResult'}
          stepNumber={5}
        >
          {'Mer brødtekst'}
        </StepList.Step>
      )}
    </StepList>
  );
}
