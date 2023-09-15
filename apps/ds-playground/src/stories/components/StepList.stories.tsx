import React, { useId, useState } from 'react';

import {
  OpenClose,
  StepList,
  StepListProps,
} from '@skatteetaten/ds-collections';
import { ErrorSummary, RadioGroup } from '@skatteetaten/ds-forms';
import { List, Paragraph } from '@skatteetaten/ds-typography';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: StepList,
  title: 'Komponenter/StepList/StepList',
  argTypes: {
    // Props
    children: { control: false, table: { category: category.props } },
  },
  tags: ['autodocs'],
  parameters: {
    docs: { source: { type: 'code' } },
    version: getVersion('ds-collections'),
  },
} satisfies Meta<typeof StepList>;
export default meta;

type Story = StoryObj<typeof meta>;
const TemplateDefault: StoryFn<StepListProps> = (args) => {
  const stepId = useId();
  const [activeStep, setActiveStep] = useState(1);
  const [step3, setStep3] = useState<string | undefined>(undefined);
  const [hasStep3Error, setHasStep3Error] = useState(false);

  const onNext = (): void => {
    const nextStep = activeStep + 1;
    setActiveStep(nextStep);
    setTimeout((): void => {
      const el = document.getElementById(`${stepId}-${nextStep}-focus-target`);
      el?.focus();
    }, 0);
  };
  return (
    <StepList {...args}>
      {activeStep >= 1 && (
        <StepList.Step
          id={`${stepId}-1`}
          variant={activeStep === 1 ? 'active' : 'passive'}
          title={'Hva holder du på med?'}
          stepNumber={1}
          onEdit={
            activeStep > 1 && activeStep < 4
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
            activeStep > 2 && activeStep < 4
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
          title={'Salg av varer og tjenester'}
          stepNumber={3}
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
              <OpenClose title={'Hva er egen regning og risiko?'}>
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
              <RadioGroup
                id={'step3radio'}
                legend={
                  'Selger du varer og tjenester for egen regning og risiko?'
                }
                errorMessage={'Kryss av hvorvidt du selger varer  og tjenester'}
                hasError={hasStep3Error}
                onChange={(e): void => {
                  setHasStep3Error(false);
                  setStep3(e.target.value);
                }}
              >
                <RadioGroup.Radio value={'ja'}>{'Ja'}</RadioGroup.Radio>
                <RadioGroup.Radio value={'nei'}>{'Nei'}</RadioGroup.Radio>
              </RadioGroup>
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

      {activeStep >= 4 && step3 === 'ja' && (
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
              {'overstiger kr 50 000 i løpet av en 12 måneders periode, må du'}
              {'registrere virksomheten i Merverdiavgiftsregisteret.'}
            </List.Element>
          </List>
        </StepList.Step>
      )}

      {activeStep >= 4 && step3 === 'nei' && (
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
  );
};

export const StepListDefault = {
  render: TemplateDefault,
  name: 'Default',
} satisfies Story;
