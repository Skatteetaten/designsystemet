import { StepList, StepListProps } from '@skatteetaten/ds-collections';
import { dsI18n } from '@skatteetaten/ds-core-utils';
import { Heading, List, Paragraph } from '@skatteetaten/ds-typography';
import { expect } from '@storybook/jest';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import { category } from '../../../.storybook/helpers';
import { Preview } from '../components/StepList.stories';

const meta = {
  component: StepList,
  title: 'Tester/StepList/StepList',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
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

export const WithMultipleSteps = {
  name: 'With steps (A6, A8, A9)',
  render: Preview,
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
