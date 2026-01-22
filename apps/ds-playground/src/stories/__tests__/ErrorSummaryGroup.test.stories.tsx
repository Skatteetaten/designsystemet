import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { ErrorSummary } from '@skatteetaten/ds-forms';

const meta = {
  component: ErrorSummary.Group,
  title: 'Tester/ErrorSummary/ErrorSummaryGroup',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: {
      table: { disable: true },
      control: { disable: true },
    },
    title: { table: { disable: true } },
    titleAs: {
      control: 'inline-radio',
      table: { disable: true },
    },
  },
  tags: ['test'],
} satisfies Meta<typeof ErrorSummary.Group>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultChildren = [
  <ErrorSummary.Error key={'errorSummaryError_1'} referenceId={'id_1'}>
    {'Fornavn må fylles ut'}
  </ErrorSummary.Error>,
  <ErrorSummary.Error key={'errorSummaryError_2'} referenceId={'id_2'}>
    {'Etternavn må fylles ut'}
  </ErrorSummary.Error>,
];

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    title: 'Personopplysninger',
    children: defaultChildren,
    ref: (instance: HTMLDivElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    },
  },
  argTypes: {
    ref: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const group = canvas.getAllByRole('generic')[1];
    await expect(group).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes (FA2-5)',
  args: {
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
    title: 'Personopplysninger',
    children: defaultChildren,
  },
  argTypes: {
    id: { table: { disable: false } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
  },
  parameters: {
    a11y: {
      test: 'off',
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const group = canvas.getByTestId('123ID');
    await expect(group).toHaveAttribute('id', 'htmlId');
    await expect(group).toHaveClass('dummyClassname');
    await expect(group).toHaveAttribute('lang', 'nb');
  },
} satisfies Story;

export const WithTitle = {
  name: 'With Title',
  args: {
    title: 'Mottaker 1 av fullmakt',
    children: defaultChildren,
  },
  argTypes: {
    title: { table: { disable: false } },
    children: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const heading = canvas.getByRole('heading', { level: 3 });
    await expect(heading).toBeInTheDocument();
    await expect(heading).toHaveTextContent('Mottaker 1 av fullmakt');
    const listItems = canvas.getAllByRole('listitem');
    await expect(listItems).toHaveLength(2);
  },
} satisfies Story;

export const WithTitleAs = {
  name: 'With TitleAs',
  args: {
    title: 'Mottaker 1 av fullmakt',
    titleAs: 'h4',
    children: defaultChildren,
  },
  argTypes: {
    titleAs: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const heading = canvas.getByRole('heading', { level: 4 });
    await expect(heading).toBeInTheDocument();
    await expect(heading).toHaveTextContent('Mottaker 1 av fullmakt');
  },
} satisfies Story;

const WithinErrorSummaryTemplate = (): JSX.Element => (
  <ErrorSummary
    title={'For å gå videre må du rette opp i følgende'}
    showErrorSummary
  >
    <ErrorSummary.Error referenceId={'inntekstaaret'}>
      {'Inntekstsåret må være etter 2008'}
    </ErrorSummary.Error>
    <ErrorSummary.Error referenceId={'epost'}>
      {'E-posten ser ikke riktig ut. Skriv slik: olaug.nordmann@norge.no'}
    </ErrorSummary.Error>
    <ErrorSummary.Error referenceId={'antallDager'}>
      {'Antall dager må fylles ut.'}
    </ErrorSummary.Error>

    <ErrorSummary.Group title={'Mottaker 1 av fullmakt'}>
      <ErrorSummary.Error referenceId={'navn1'}>
        {'Navn på person må fylles ut'}
      </ErrorSummary.Error>
      <ErrorSummary.Error referenceId={'fnummer1'}>
        {'Fødselsnummer eller D-nummer må fylles ut'}
      </ErrorSummary.Error>
      <ErrorSummary.Error referenceId={'telefon1'}>
        {'Telefonnummer må fylles ut'}
      </ErrorSummary.Error>
    </ErrorSummary.Group>

    <ErrorSummary.Group title={'Mottaker 2 av fullmakt'}>
      <ErrorSummary.Error referenceId={'navn2'}>
        {'Navn på person må fylles ut'}
      </ErrorSummary.Error>
      <ErrorSummary.Error referenceId={'fnummer2'}>
        {'Fødselsnummer eller D-nummer må fylles ut'}
      </ErrorSummary.Error>
      <ErrorSummary.Error referenceId={'telefon2'}>
        {'Telefonnummer må fylles ut'}
      </ErrorSummary.Error>
    </ErrorSummary.Group>
  </ErrorSummary>
);

export const WithinErrorSummary = {
  name: 'Within ErrorSummary',
  args: {
    title: 'Mottaker 1 av fullmakt',
    children: defaultChildren,
  },
  render: WithinErrorSummaryTemplate,
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const mainHeading = canvas.getByRole('heading', { level: 2 });
    await expect(mainHeading).toHaveTextContent(
      'For å gå videre må du rette opp i følgende'
    );
    const groupHeadings = canvas.getAllByRole('heading', { level: 3 });
    await expect(groupHeadings).toHaveLength(2);
    await expect(groupHeadings[0]).toHaveTextContent('Mottaker 1 av fullmakt');
    await expect(groupHeadings[1]).toHaveTextContent('Mottaker 2 av fullmakt');
    const links = canvas.getAllByRole('link');
    await expect(links).toHaveLength(9);
  },
} satisfies Story;

export const WithinErrorSummaryOnMobile = {
  name: 'Within ErrorSummary on Mobile',
  args: {
    title: 'Mottaker 1 av fullmakt',
    children: defaultChildren,
  },
  globals: {
    viewport: {
      value: '--mobile',
    },
  },
  render: WithinErrorSummaryTemplate,
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const mainHeading = canvas.getByRole('heading', { level: 2 });
    await expect(mainHeading).toHaveTextContent(
      'For å gå videre må du rette opp i følgende'
    );
    const groupHeadings = canvas.getAllByRole('heading', { level: 3 });
    await expect(groupHeadings).toHaveLength(2);
    await expect(groupHeadings[0]).toHaveTextContent('Mottaker 1 av fullmakt');
    await expect(groupHeadings[1]).toHaveTextContent('Mottaker 2 av fullmakt');
    const links = canvas.getAllByRole('link');
    await expect(links).toHaveLength(9);
  },
} satisfies Story;
