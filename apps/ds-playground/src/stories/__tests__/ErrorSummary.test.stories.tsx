import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, waitFor, within } from '@storybook/test';

import { headingAsArr } from '@skatteetaten/ds-core-utils';
import { ErrorSummary, TextField } from '@skatteetaten/ds-forms';
import { Paragraph } from '@skatteetaten/ds-typography';

import { loremIpsum } from './testUtils/storybook.testing.utils';
import { webComponent } from '../../../.storybook/webcomponent-decorator';

const meta = {
  component: ErrorSummary,
  title: 'Tester/ErrorSummary/ErrorSummary',
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
      table: { disable: true },
      control: { disable: true },
    },
    content: {
      table: { disable: true },
      control: { disable: true },
    },
    shadowRootNode: {
      table: { disable: true },
    },
    showErrorSummary: {
      table: { disable: true },
    },
    title: {
      table: { disable: true },
    },
    titleAs: {
      options: [...headingAsArr],
      control: 'inline-radio',
      table: { disable: true },
    },
  },
} satisfies Meta<typeof ErrorSummary>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultChildren = [
  <ErrorSummary.Error key={'errorSummaryError_1'} referenceId={'id_1'}>
    {'Husk å fylle ut type varer'}
  </ErrorSummary.Error>,
  <ErrorSummary.Error key={'errorSummaryError_2'} referenceId={'id_2'}>
    {'Selger du varer og tjenester for egen regning?'}
  </ErrorSummary.Error>,
  false,
];

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
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
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes (FA2-5, B1)',
  args: {
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
    showErrorSummary: true,
  },
  argTypes: {
    id: { table: { disable: false } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    const errorSummary = canvas.getAllByRole('generic')[2];
    await expect(container).toHaveAttribute('id', 'htmlId');
    await expect(errorSummary).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Default (B2, B3 delvis)',
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toBeInTheDocument();
    await expect(container).toHaveAttribute('aria-live', 'assertive');
    await expect(container).toHaveAttribute('aria-atomic');

    const errorSummary = container.querySelector('div');
    await expect(errorSummary).not.toBeInTheDocument();
  },
} satisfies Story;

export const WithChildren = {
  name: 'With Children (A1, A2, A3 delvis)',
  args: {
    showErrorSummary: true,
    children: defaultChildren,
  },
  argTypes: {
    children: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const listItems = canvas.getAllByRole('listitem');
    await expect(listItems).toHaveLength(2);
  },
} satisfies Story;

export const WithContent = {
  name: 'With Content (A1, A5, B1)',
  args: {
    showErrorSummary: true,
    title: 'Inntektsmottaker inneholder 2 feil:',
    content: <Paragraph>{loremIpsum}</Paragraph>,
  },
  argTypes: {
    content: { table: { disable: false } },
    title: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const icon = canvas.getByRole('img', { hidden: true });
    await expect(icon).toBeInTheDocument();
    await expect(icon).toHaveAttribute('aria-hidden', 'true');
  },
} satisfies Story;

export const WithChildrenAndContent = {
  name: 'With Children And Content (A1, A3 delvis, A5)',
  args: {
    showErrorSummary: true,
    children: defaultChildren,
    content: <Paragraph>{loremIpsum}</Paragraph>,
  },
  argTypes: {
    children: { table: { disable: false } },
    content: { table: { disable: false } },
  },
} satisfies Story;

export const WithChildrenAndContentMobile = {
  name: 'With Children And Content Mobile',
  args: {
    showErrorSummary: true,
    children: defaultChildren,
    content: <Paragraph>{loremIpsum}</Paragraph>,
  },
  argTypes: {
    children: { table: { disable: false } },
    content: { table: { disable: false } },
  },
  parameters: {
    viewport: {
      defaultViewport: '--mobile',
    },
  },
} satisfies Story;

export const WithChildrenAndContentBreakpointXs = {
  name: 'With Children And Content Breakpoint Xs',
  args: {
    showErrorSummary: true,
    children: defaultChildren,
    content: <Paragraph>{loremIpsum}</Paragraph>,
  },
  argTypes: {
    children: { table: { disable: false } },
    content: { table: { disable: false } },
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs',
    },
  },
} satisfies Story;

export const WithTitleAs = {
  name: 'With TitleAs (A2)',
  args: {
    showErrorSummary: true,
    titleAs: 'h1',
    children: defaultChildren,
  },
  argTypes: {
    titleAs: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const heading = canvas.getByRole('heading', { level: 1 });
    await expect(heading).toBeInTheDocument();
  },
} satisfies Story;

const TemplateWithInput: StoryFn<typeof ErrorSummary> = () => (
  <>
    <TextField
      className={'bottomSpacingXL'}
      id={'input_aar'}
      label={'År'}
      value={1009}
      errorMessage={'Inntekståret må være etter 2008'}
      required
    />
    <ErrorSummary showErrorSummary>
      <ErrorSummary.Error referenceId={'input_aar'}>
        {'Inntekståret må være etter 2008'}
      </ErrorSummary.Error>
    </ErrorSummary>
  </>
);

export const WithInput = {
  render: TemplateWithInput,
  name: 'With Input (A4)',
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link');
    const input = canvas.getByLabelText('År');
    await userEvent.click(link);
    await waitFor(() => expect(input).toHaveFocus());
  },
} satisfies Story;

const TemplateWithShadowRootNode: StoryFn<typeof ErrorSummary> = () => {
  const element = document.querySelector('errorsummary-customelement');
  const shadowRoot = element?.shadowRoot;
  return (
    <div data-test-block>
      <TextField
        className={'bottomSpacingXL'}
        id={'input_aar'}
        label={'År'}
        value={1009}
        errorMessage={'Inntekståret må være etter 2008'}
        required
      />
      <ErrorSummary shadowRootNode={shadowRoot ?? undefined} showErrorSummary>
        <ErrorSummary.Error referenceId={'input_aar'}>
          {'Inntekståret må være etter 2008'}
        </ErrorSummary.Error>
      </ErrorSummary>
    </div>
  );
};

export const WithShadowRootNode = {
  render: TemplateWithShadowRootNode,
  name: 'With ShadowRootNode',
  decorators: [webComponent],
  parameters: {
    a11y: {
      //Stilen som slår av transitions og animations finnes ikke på innsiden av shadowDom
      //Slår derfor av denne slik at vi ikke får false positives
      disable: true,
    },
    imageSnapshot: {
      disable: true,
    },
    customElementName: 'errorsummary-customelement',
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    // errorLink finnes ikke utenfor shadowDom
    await expect(canvas.queryByRole('link')).not.toBeInTheDocument();

    const customElement = canvasElement.querySelector(
      `errorsummary-customelement`
    );
    await expect(customElement).toBeInTheDocument();
    const errorLink =
      customElement?.shadowRoot && customElement.shadowRoot.querySelector('a');
    await expect(errorLink).toBeInTheDocument();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await userEvent.click(errorLink!);
    const input =
      customElement?.shadowRoot &&
      customElement.shadowRoot.querySelector('input:focus');
    await expect(input).toBeInTheDocument();
  },
} satisfies Story;
