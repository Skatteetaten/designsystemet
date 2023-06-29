import { headingAsArr } from '@skatteetaten/ds-core-utils';
import { ErrorMessage, ErrorSummary } from '@skatteetaten/ds-forms';
import { Paragraph } from '@skatteetaten/ds-typography';
import { expect } from '@storybook/jest';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';

import { loremIpsum } from './testUtils/storybook.testing.utils';
import { webComponent } from '../../../.storybook/webcomponent-decorator';

export default {
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
      control: { type: null },
    },
    content: {
      table: { disable: true },
      control: { type: null },
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
} as ComponentMeta<typeof ErrorSummary>;

const defaultChildren = [
  <ErrorSummary.Error key={'errorSummaryError_1'} referenceId={'id_1'}>
    {'Husk å fylle ut type varer'}
  </ErrorSummary.Error>,
  <ErrorSummary.Error key={'errorSummaryError_2'} referenceId={'id_2'}>
    {'Selger du varer og tjenester for egen regning?'}
  </ErrorSummary.Error>,
];

const Template: ComponentStory<typeof ErrorSummary> = (args) => (
  <div data-test-block>
    <ErrorSummary {...args} />
  </div>
);

// Når ErrorSummary har en ref, så får dom elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';
WithRef.args = {
  ref: (instance: HTMLDivElement | null): void => {
    if (instance) {
      instance.id = 'dummyIdForwardedFromRef';
    }
  },
};
WithRef.argTypes = {
  ref: { table: { disable: false } },
};
WithRef.parameters = {
  imageSnapshot: { disable: true },
};
WithRef.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const container = canvas.getAllByRole('generic')[1];
  await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
};

// Når ErrorSummary har en id, så har containeren id'en satt
// Når ErrorSummary har en custom className, så har containeren className satt og custom stil vises
// Når ErrorSummary har en lang, så har containeren lang satt
// Når ErrorSummary har en data-testid, så har containeren data-testid satt
export const WithAttributes = Template.bind({});
WithAttributes.storyName = 'With Attributes (FA2-5, B1)';
WithAttributes.args = {
  id: 'htmlId',
  className: 'dummyClassname',
  lang: 'nb',
  'data-testid': '123ID',
  showErrorSummary: true,
};
WithAttributes.argTypes = {
  id: { table: { disable: false } },
  className: { table: { disable: false } },
  lang: { table: { disable: false } },
  'data-testid': { table: { disable: false } },
};
WithAttributes.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const container = canvas.getAllByRole('generic')[1];
  const errorSummary = canvas.getAllByRole('generic')[2];
  await expect(container).toHaveAttribute('id', 'htmlId');
  await expect(errorSummary).toHaveClass('dummyClassname');
  await expect(container).toHaveAttribute('lang', 'nb');
  await expect(container).toHaveAttribute('data-testid', '123ID');
};

// Når ErrorSummary instansieres, får den riktige default-verdier og ErrorSummary vises ikke
export const Defaults = Template.bind({});
Defaults.storyName = 'Default (B2, B3 delvis)';
Defaults.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const container = canvas.getAllByRole('generic')[1];
  await expect(container).toBeInTheDocument();
  await expect(container).toHaveAttribute('aria-live', 'assertive');
  await expect(container).toHaveAttribute('aria-atomic');
  await expect(container).toHaveAttribute('tabIndex', '-1');
  // eslint-disable-next-line testing-library/no-node-access
  const errorSummary = container.querySelector('div');
  await expect(errorSummary).not.toBeInTheDocument();
};

// Når ErrorSummary har children, ser det riktig ut og har tittelen 'h2'-tag
export const WithChildren = Template.bind({});
WithChildren.storyName = 'With Children (A1, A2, A3 delvis)';
WithChildren.args = {
  showErrorSummary: true,
  children: defaultChildren,
};
WithChildren.argTypes = {
  children: { table: { disable: false } },
};
WithChildren.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const heading = canvas.getByRole('heading', { level: 2 });
  await expect(heading).toBeInTheDocument();
};

// Når ErrorSummary har content, ser det riktig ut og error-ikonet har aria-hidden satt til true
export const WithContent = Template.bind({});
WithContent.storyName = 'With Content (A1, A5, B1)';
WithContent.args = {
  showErrorSummary: true,
  title: 'Inntektsmottaker inneholder 2 feil:',
  content: <Paragraph>{loremIpsum}</Paragraph>,
};
WithContent.argTypes = {
  content: { table: { disable: false } },
  title: { table: { disable: false } },
};
WithContent.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const icon = canvas.getByRole('img', { hidden: true });
  await expect(icon).toBeInTheDocument();
  await expect(icon).toHaveAttribute('aria-hidden', 'true');
};

// Når ErrorSummary har children og content, ser det riktig ut
export const WithChildrenAndContent = Template.bind({});
WithChildrenAndContent.storyName =
  'With Children And Content (A1, A3 delvis, A5)';
WithChildrenAndContent.args = {
  showErrorSummary: true,
  children: defaultChildren,
  content: <Paragraph>{loremIpsum}</Paragraph>,
};
WithChildrenAndContent.argTypes = {
  children: { table: { disable: false } },
  content: { table: { disable: false } },
};

// Når ErrorSummary har children og content, ser det riktig ut på mobil
export const WithChildrenAndContentMobile = Template.bind({});
WithChildrenAndContentMobile.storyName = 'With Children And Content Mobile';
WithChildrenAndContentMobile.args = {
  showErrorSummary: true,
  children: defaultChildren,
  content: <Paragraph>{loremIpsum}</Paragraph>,
};
WithChildrenAndContentMobile.argTypes = {
  children: { table: { disable: false } },
  content: { table: { disable: false } },
};
WithChildrenAndContentMobile.parameters = {
  viewport: {
    defaultViewport: '--mobile',
  },
};

// Når ErrorSummary har children og content, ser det riktig ut på xs-screen
export const WithChildrenAndContentBreakpointXs = Template.bind({});
WithChildrenAndContentBreakpointXs.storyName =
  'With Children And Content Breakpoint Xs';
WithChildrenAndContentBreakpointXs.args = {
  showErrorSummary: true,
  children: defaultChildren,
  content: <Paragraph>{loremIpsum}</Paragraph>,
};
WithChildrenAndContentBreakpointXs.argTypes = {
  children: { table: { disable: false } },
  content: { table: { disable: false } },
};
WithChildrenAndContentBreakpointXs.parameters = {
  viewport: {
    defaultViewport: '--breakpoint-xs',
  },
};

// Når ErrorSummary har titleAs, får tittelen riktig Heading-tag
export const WithTitleAs = Template.bind({});
WithTitleAs.storyName = 'With TitleAs (A2)';
WithTitleAs.args = {
  showErrorSummary: true,
  titleAs: 'h1',
  children: defaultChildren,
};
WithTitleAs.argTypes = {
  titleAs: { table: { disable: false } },
};
WithTitleAs.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const heading = canvas.getByRole('heading', { level: 1 });
  await expect(heading).toBeInTheDocument();
};

const TemplateWithInput: ComponentStory<typeof ErrorSummary> = () => (
  <div data-test-block>
    {/* TODO FRONT-1279 erstattes med TextField når den er ferdig utviklet */}
    <label className={'block'} htmlFor={'input_aar'}>
      {'År'}
    </label>
    <input id={'input_aar'} type={'number'} value={1009} />
    <ErrorMessage className={'bottomSpacingXL'} showError>
      {'Inntekståret må være etter 2008'}
    </ErrorMessage>
    <ErrorSummary showErrorSummary>
      <ErrorSummary.Error referenceId={'input_aar'}>
        {'Inntekståret må være etter 2008'}
      </ErrorSummary.Error>
    </ErrorSummary>
  </div>
);

// Når bruker klikker på lenke i ErrorSummary, får det tilhørende feltet fokus
export const WithInput = TemplateWithInput.bind({});
WithInput.storyName = 'With Input (A4)';
WithInput.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const link = canvas.getByRole('link');
  const input = canvas.getByLabelText('År');
  await userEvent.click(link);
  await waitFor(() => expect(input).toHaveFocus());
};

const TemplateWithShadowRootNode: ComponentStory<typeof ErrorSummary> = () => {
  // eslint-disable-next-line testing-library/no-node-access
  const element = document.querySelector('errorsummary-customelement');
  const shadowRoot = element?.shadowRoot;
  return (
    <div data-test-block>
      {/* TODO FRONT-1279 erstattes med TextField når den er ferdig utviklet */}
      <label className={'block'} htmlFor={'input_aar'}>
        {'År'}
      </label>
      <input id={'input_aar'} type={'number'} value={1009} />
      <ErrorMessage className={'bottomSpacingXL'} showError>
        {'Inntekståret må være etter 2008'}
      </ErrorMessage>
      <ErrorSummary shadowRootNode={shadowRoot ?? undefined} showErrorSummary>
        <ErrorSummary.Error referenceId={'input_aar'}>
          {'Inntekståret må være etter 2008'}
        </ErrorSummary.Error>
      </ErrorSummary>
    </div>
  );
};

// Når ErrorSummary og referanse-elementet lastes i en shadowDom så tegnes den riktig og klarer å sette fokus til referanse-elementet
export const WithShadowRootNode = TemplateWithShadowRootNode.bind({});
WithShadowRootNode.storyName = 'With ShadowRootNode';
WithShadowRootNode.decorators = [webComponent];
WithShadowRootNode.parameters = {
  a11y: {
    //Stilen som slår av transitions og animations finnes ikke på innsiden av shadowDom
    //Slår derfor av denne slik at vi ikke får false positives
    disable: true,
  },
  imageSnapshot: {
    disable: true,
  },
  customElementName: 'errorsummary-customelement',
};
WithShadowRootNode.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  // errorLink finnes ikke utenfor shadowDom
  await expect(canvas.queryByRole('link')).not.toBeInTheDocument();
  // eslint-disable-next-line testing-library/no-node-access
  const customElement = canvasElement.querySelector(
    `errorsummary-customelement`
  );
  await expect(customElement).toBeInTheDocument();
  const errorLink =
    // eslint-disable-next-line testing-library/no-node-access
    customElement?.shadowRoot && customElement.shadowRoot.querySelector('a');
  await expect(errorLink).toBeInTheDocument();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  await userEvent.click(errorLink!);
  const input =
    customElement?.shadowRoot &&
    // eslint-disable-next-line testing-library/no-node-access
    customElement.shadowRoot.querySelector('input:focus');
  await expect(input).toBeInTheDocument();
};
