import { useId, useState } from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import { StepList, StepListProps } from '@skatteetaten/ds-collections';
import { dsI18n } from '@skatteetaten/ds-core-utils';
import { RadioGroup } from '@skatteetaten/ds-forms';
import { Heading, List, Paragraph } from '@skatteetaten/ds-typography';

import { category } from '../../../.storybook/helpers';

const meta = {
  component: StepList,
  title: 'Tester/StepList/StepList',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: {
      control: false,
      table: { disable: true, category: category.props },
    },
  },
  parameters: { a11y: { disable: true } },
} satisfies Meta<typeof StepList>;
export default meta;
type Story = StoryObj<typeof meta>;

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ref: (instance: HTMLOListElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    },
    'data-testid': '123ID',
  },
  argTypes: {
    ref: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const stepList = canvas.getByTestId('123ID');
    await expect(stepList).toBeInTheDocument();
    await expect(stepList).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;
export const WithAttributes = {
  name: 'With Attributes (FA2-5)',
  args: {
    id: 'htmlid',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
  },
  argTypes: {
    id: { table: { disable: false } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const stepList = canvas.getByTestId('123ID');
    await expect(stepList).toHaveAttribute('id', 'htmlid');
    await expect(stepList).toHaveClass('dummyClassname');
    await expect(stepList).toHaveAttribute('lang', 'nb');
  },
} satisfies Story;

const TemplateExample: StoryFn<StepListProps> = () => {
  return (
    <div>
      <StepList>
        <StepList.Step
          variant={'passive'}
          title={'besvart'}
          stepNumber={1}
          onEdit={(): void => alert('endre')}
        >
          {'brødtekst'}
        </StepList.Step>
        <StepList.Step title={'besvart 2'} stepNumber={2}>
          {'brødtekst'}
        </StepList.Step>
        <StepList.Step
          title={'aktivt'}
          variant={'active'}
          stepNumber={3}
          shouldAutoFocusWhenActive={false}
          onNext={(): void => console.log('next')}
        >
          {
            'brødtekst brødtekst brødtekst brødtekst brødtekst brødtekst brødtekst brødtekst brødtekst brødtekst brødtekst '
          }
        </StepList.Step>

        <StepList.Step
          title={'positivt resultat'}
          variant={'positiveResult'}
          stepNumber={4}
        >
          <Heading as={'h3'} level={4}>
            {'Virksomheten skal registreres som særavgiftspliktig.'}
          </Heading>
          <Paragraph>
            {'For å bli registrert må du sende en søknad til Skatteetaten.'}
            {
              'Nedenfor beskriver vi hvordan du går frem og hva du må dokumentere.'
            }
          </Paragraph>
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

        <StepList.Step
          title={'neutralt resultat'}
          variant={'neutralResult'}
          stepNumber={4}
          introTitle={'Intro til steget'}
          introContent={'innhold'}
        >
          {'more brødtekst'}
        </StepList.Step>
      </StepList>
    </div>
  );
};

export const WithVariants = {
  name: 'With step Variants (A1, A2, A3)',
  render: TemplateExample,
  parameters: {
    viewport: {
      viewPortHeight: 1200,
    },
  },
} satisfies Story;

export const WithBreakPointS = {
  name: 'With step Variants breakpoint-s (A1, A2, A3)',
  render: TemplateExample,
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-s',
      viewPortHeight: 1200,
    },
  },
} satisfies Story;

export const WithBreakPointXS = {
  name: 'With step Variants breakpoint-xs (A1, A2, A3)',
  render: TemplateExample,
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs',
      viewPortHeight: 1200,
    },
  },
} satisfies Story;

export const WithBreakPointMobile = {
  name: 'With step Variants mobile (A1, A2, A3)',
  render: TemplateExample,
  parameters: {
    viewport: {
      defaultViewport: '--mobile',
      viewPortHeight: 1550,
    },
  },
} satisfies Story;

const TemplateMultipleSteps: StoryFn<typeof StepList> = () => {
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
            <RadioGroup
              id={'step3radio'}
              legend={
                'Selger du varer og tjenester for egen regning og risiko?'
              }
              errorMessage={
                hasStep3Error
                  ? 'Kryss av hvorvidt du selger varer  og tjenester'
                  : undefined
              }
              hideLegend
              onChange={(e): void => {
                setHasStep3Error(false);
                setStep3(e.target.value);
              }}
            >
              <RadioGroup.Radio value={'ja'}>{'Ja'}</RadioGroup.Radio>
              <RadioGroup.Radio value={'nei'}>{'Nei'}</RadioGroup.Radio>
            </RadioGroup>
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
          introContent={<Paragraph>{'brødtekst'}</Paragraph>}
        >
          <Paragraph>{'brødtekst'}</Paragraph>
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

export const WithMultipleSteps = {
  name: 'With steps (A6, A8, A9)',
  render: TemplateMultipleSteps,
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const nextText = dsI18n.t('ds_collections:steplist.Next');
    const editText = dsI18n.t('ds_collections:steplist.Edit');
    await userEvent.click(canvas.getByText(nextText));
    await userEvent.click(canvas.getByText(editText));
    await userEvent.click(canvas.getByText(nextText));
    await userEvent.click(canvas.getByText(nextText));
    await userEvent.click(canvas.getByText(nextText));
    await userEvent.click(canvas.getByText('Ja'));
    await userEvent.click(canvas.getByText(nextText));
    await expect(canvas.queryByText(nextText)).not.toBeInTheDocument();
    await expect(canvas.queryByText(editText)).not.toBeInTheDocument();
  },
} satisfies Story;
