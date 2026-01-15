import { useState, JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@skatteetaten/ds-buttons';
import {
  ErrorSummary,
  TextField,
  getErrorSummaryTitleAsDefault,
} from '@skatteetaten/ds-forms';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import { category } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: ErrorSummary,
  title: 'Komponenter/ErrorSummary',
  argTypes: {
    // Props
    children: { control: false, table: { category: category.props } },
    content: { control: 'text', table: { category: category.props } },
    hasSpacing: { table: { category: category.props } },
    shadowRootNode: {
      control: false,
      table: { control: false, category: category.props },
    },
    showErrorSummary: { table: { category: category.props } },
    title: { table: { category: category.props } },
    titleAs: {
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getErrorSummaryTitleAsDefault() },
      },
    },
  },
  args: {
    showErrorSummary: true,
    content: 'Her kan du legge inn vilkårlig innhold.',
    children: [
      <ErrorSummary.Error key={'error1'} referenceId={'id1'}>
        {'Husk å fylle ut type varer'}
      </ErrorSummary.Error>,
      <ErrorSummary.Error key={'error2'} referenceId={'id2'}>
        {'Selger du varer og tjenester for egen regning?'}
      </ErrorSummary.Error>,
    ],
  },
} satisfies Meta<typeof ErrorSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    const [state, setState] = useState({
      hasError: false,
    });
    return (
      <>
        <TextField
          id={'input_aar'}
          label={'År'}
          value={1009}
          errorMessage={'Inntekståret må være etter 2008'}
          hasSpacing
          required
        />
        <TextField
          id={'input_epost'}
          label={'E-post'}
          value={'Ola.Normann.no'}
          errorMessage={
            state.hasError
              ? 'E-posten ser ikke riktig ut. Skriv slik: ola.normann@norge.no'
              : undefined
          }
          hasSpacing
          required
        />
        <TextField
          className={'bottomSpacingXL'}
          id={'input_dager'}
          label={'Antall dager i Norge i perioden/inntekståret'}
          errorMessage={
            state.hasError ? 'Antall dager må fylles ut.' : undefined
          }
          hasSpacing
          required
        />
        <ErrorSummary
          id={'errorSummary1'}
          showErrorSummary={state.hasError}
          hasSpacing
        >
          <ErrorSummary.Error referenceId={'input_aar'}>
            {'Inntekståret må være etter 2008'}
          </ErrorSummary.Error>
          <ErrorSummary.Error referenceId={'input_epost'}>
            {'E-posten ser ikke riktig ut. Skriv slik: ola.normann@norge.no'}
          </ErrorSummary.Error>
          <ErrorSummary.Error referenceId={'input_dager'}>
            {'Antall dager må fylles ut.'}
          </ErrorSummary.Error>
        </ErrorSummary>
        <Button
          onClick={(): void => {
            setState({ hasError: !state.hasError });
          }}
        >
          {'Send'}
        </Button>
      </>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;

export const WithContainerQuery: Story = {
  render: (_args): JSX.Element => {
    const [width, setWidth] = useState(300);

    return (
      <>
        <Heading level={3} as={'h1'} hasSpacing>
          {'Container Queries i ErrorSummary'}
        </Heading>

        <Paragraph hasSpacing>
          {
            'ErrorSummary støtter container queries, som gjør at komponenten tilpasser seg bredden på sin parent-container i stedet for hele viewporten. Dette er nyttig når komponenten brukes i stegliste, modaler eller andre områder med begrenset bredde.'
          }
        </Paragraph>

        <Heading level={4} as={'h2'} hasSpacing>
          {'Slik aktiverer du container queries'}
        </Heading>

        <Paragraph className={'bottomSpacingS'}>
          {
            'Sett CSS-egenskapen container-type: inline-size på et parent-element:'
          }
        </Paragraph>

        <pre className={'bottomSpacingS'}>
          {`.error-summary-wrapper {
  container-type: inline-size;
}`}
        </pre>

        <Paragraph className={'bottomSpacingS'}>
          {
            'Komponenten responderer på følgende breakpoints og tilpasser padding, ikon-størrelse og layout:'
          }
        </Paragraph>

        <Heading level={4} as={'h2'} hasSpacing>
          {'Interaktiv demo'}
        </Heading>

        <Paragraph className={'bottomSpacingS'}>
          {'Juster bredden for å se hvordan layouten endrer seg:'}
        </Paragraph>

        <input
          className={'bottomSpacingS containerQuerySlider'}
          max={800}
          min={200}
          type={'range'}
          value={width}
          onChange={(e): void => setWidth(Number(e.target.value))}
        />

        <div
          className={'containerQueryWrapper'}
          // eslint-disable-next-line react/forbid-dom-props -- dynamisk bredde krever inline style
          style={
            { '--container-query-width': `${width}px` } as React.CSSProperties
          }
        >
          <ErrorSummary showErrorSummary>
            <ErrorSummary.Error referenceId={'field1'}>
              {'Feltet må fylles ut'}
            </ErrorSummary.Error>
            <ErrorSummary.Error referenceId={'field2'}>
              {'Ugyldig verdi'}
            </ErrorSummary.Error>
          </ErrorSummary>
        </div>
      </>
    );
  },
} satisfies Story;
WithContainerQuery.parameters = exampleParameters;
