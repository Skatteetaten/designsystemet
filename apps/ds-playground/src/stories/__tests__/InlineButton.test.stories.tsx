import { useState } from 'react';

import { InlineButton } from '@skatteetaten/ds-buttons';
import { positionArr } from '@skatteetaten/ds-core-utils';
import { AddOutlineSVGpath } from '@skatteetaten/ds-icons';
import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';

import { wrapper } from './testUtils/storybook.testing.utils';
import { SystemSVGPaths } from '../utils/icon.systems';

const defaultButtonText = 'Legg til rapport';

const verifyAttribute =
  (attribute: string, expectedValue: string) =>
  async ({ canvasElement }: { canvasElement: HTMLElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inlineButton = canvas.getByRole('button');
    await expect(inlineButton).toBeInTheDocument();
    await expect(inlineButton).toHaveAttribute(attribute, expectedValue);
  };

export default {
  component: InlineButton,
  title: 'Tester/InlineButton',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: { table: { disable: true } },
    iconPosition: {
      table: { disable: true },
      options: [...positionArr],
      control: 'radio',
    },
    svgPath: {
      table: { disable: true },
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
    },
    // HTML
    accessKey: { table: { disable: true } },
    disabled: { table: { disable: true } },
    type: { table: { disable: true } },
    // Aria
    ariaDescribedby: { table: { disable: true } },
    // Events
    onBlur: { table: { disable: true } },
    onClick: { table: { disable: true } },
    onFocus: { table: { disable: true } },
  },
} as ComponentMeta<typeof InlineButton>;

const Template: ComponentStory<typeof InlineButton> = (args) => (
  <div data-test-block>
    <InlineButton {...args} svgPath={args.svgPath}>
      {/* eslint-disable-next-line testing-library/no-node-access */}
      {args.children}
    </InlineButton>
  </div>
);

const defaultArgs = {
  children: defaultButtonText,
};

// Når InlineButton har en ref, så får dom button elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';
WithRef.args = {
  ...defaultArgs,
  ref: (instance: HTMLButtonElement | null): void => {
    if (instance) {
      instance.id = 'dummyIdForwardedFromRef';
    }
  },
};
WithRef.argTypes = {
  ...WithRef.argTypes,
  ref: { table: { disable: false } },
};
WithRef.parameters = {
  imageSnapshot: { disable: true },
};
WithRef.play = verifyAttribute('id', 'dummyIdForwardedFromRef');

// Når InlineButton har en id, så har button-element id
// Når InlineButton har en custom CSS, så vises custom stil
// Når InlineButton har en lang, så har button-element lang
// Når InlineButton har dataTestid, så har button-elementet data-testid satt
export const WithAttributes = Template.bind({});
WithAttributes.storyName = 'With Attributes(FA2-5)';
WithAttributes.args = {
  ...defaultArgs,
  id: 'htmlId',
  className: 'dummyClassname',
  lang: 'nb',
  'data-testid': '123ID',
};
WithAttributes.argTypes = {
  ...WithAttributes.argTypes,
  id: { table: { disable: false } },
  className: { table: { disable: false } },
  lang: { table: { disable: false } },
  'data-testid': { table: { disable: false } },
};
WithAttributes.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const inlineButton = canvas.getByRole('button');
  await expect(inlineButton).toHaveClass('dummyClassname');
  await expect(inlineButton).toHaveAttribute('id', 'htmlId');
  await expect(inlineButton).toHaveAttribute('lang', 'nb');
  await expect(inlineButton).toHaveAttribute('data-testid', '123ID');
};

// Når InlineButton instansieres, får den default iconPosition left
// Knapp må også ha tekst/children
export const Defaults = Template.bind({});
Defaults.storyName = 'Defaults (A1, B1)';
Defaults.args = {
  ...defaultArgs,
};
Defaults.argTypes = {
  ...Defaults.argTypes,
  children: { table: { disable: false } },
};
Defaults.parameters = {
  imageSnapshot: {
    focus: `${wrapper} > button`,
    hover: `${wrapper} > button`,
    click: `${wrapper} > button`,
  },
};
Defaults.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const inlineButton = canvas.getByText(defaultButtonText);
  await expect(inlineButton).toBeInTheDocument();
  await expect(inlineButton).toHaveAttribute('type', 'button');
};

// Når InlineButton har en veldig lang tekst så skal tekst venstrejusteres
export const WithLongText = Template.bind({});
WithLongText.storyName = 'With Long Text (A1)';
WithLongText.args = {
  ...defaultArgs,
  children:
    'Denne knappen har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er venstrejustert. ' +
    'Denne knappen har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er venstrejustert.',
};
WithLongText.argTypes = {
  ...WithLongText.argTypes,
  children: { table: { disable: false } },
};

// Når InlineButton har en veldig lang tekst uten breaking space så skal det brekke over flere linjer
export const WithLongTextAndBreaking = Template.bind({});
WithLongTextAndBreaking.storyName = 'With Long Text And Breaking (A1)';
WithLongTextAndBreaking.args = {
  ...defaultArgs,
  children:
    'Denneknappenharenveldiglangtekst.Sålangatdentvingerframlinjeskift.Nårikkeikonsåskaltekstenværevenstrejusteres.' +
    'Denneknappenharenveldiglangtekst.Sålangatdentvingerframlinjeskift.Nårikkeikonsåskaltekstenværevenstrejusteres.',
};
WithLongTextAndBreaking.argTypes = {
  ...WithLongTextAndBreaking.argTypes,
  children: { table: { disable: false } },
};

// Når InlineButton har ett ikon uten posisjon oppgitt, så vises dette ikonet på venstre side (default).
// Tester også for de icon props som er relevant for saken med systemIcon som er brukt.
export const WithIcon = Template.bind({});
WithIcon.storyName = 'With Icon (A3, A4, B4)';
WithIcon.args = {
  ...defaultArgs,
  svgPath: AddOutlineSVGpath,
};
WithIcon.argTypes = {
  ...WithIcon.argTypes,
  svgPath: { table: { disable: false } },
};
WithIcon.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);

  const inlineButton = canvas.getByRole('button');
  // eslint-disable-next-line testing-library/no-node-access
  const svg = inlineButton.querySelector('svg');
  await expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
  await expect(inlineButton).toBeInTheDocument();
};

// Når InlineButton har et custom ikon, så vises dette ikonet
export const WithCustomIcon = Template.bind({});
WithCustomIcon.storyName = 'With Custom Icon (A3)';
WithCustomIcon.args = {
  ...defaultArgs,
  svgPath: <path d={'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z'} />,
};
WithCustomIcon.argTypes = {
  ...WithCustomIcon.argTypes,
  svgPath: {
    table: { disable: false },
    control: { type: null },
  },
};

// Når InlineButton har en veldig lang tekst og det er et ikon med position right så skal tekst høyrejusteres
export const WithLongTextAndIcon = Template.bind({});
WithLongTextAndIcon.storyName = 'With Long Text And Icon (A3)';
WithLongTextAndIcon.args = {
  ...defaultArgs,
  svgPath: AddOutlineSVGpath,
  children:
    'Denne knappen har en veldig lang tekst med ikon på høyre side. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er høyrejustert. ' +
    'Denne knappen har en veldig lang tekst med ikon på høyre side. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er høyrejustert.',
};
WithLongTextAndIcon.argTypes = {
  ...WithLongTextAndIcon.argTypes,
  children: { table: { disable: false } },
  svgPath: { table: { disable: false } },
};

// Når InlineButton har ett ikon med posisjon right, så vises dette ikonet på høyre side.
export const WithIconRight = Template.bind({});
WithIconRight.storyName = 'With Icon Right (A5)';
WithIconRight.args = {
  ...defaultArgs,
  svgPath: AddOutlineSVGpath,
  iconPosition: 'right',
};
WithIconRight.argTypes = {
  ...WithIconRight.argTypes,
  iconPosition: {
    table: { disable: false },
  },
};

// Når InlineButton har prop disabled, så er knapp disabled og stil er satt til disabled
export const WithDisabled = Template.bind({});
WithDisabled.storyName = 'With Disabled (B5)';
WithDisabled.args = {
  ...defaultArgs,
  disabled: true,
};
WithDisabled.argTypes = {
  ...WithDisabled.argTypes,
  disabled: { table: { disable: false } },
};
WithDisabled.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  expect(canvas.getByText(defaultButtonText)).toBeDisabled();
};

// Når InlineButton har prop disabled og ikon er satt, så vises ikonet og knapp er disabled og stil er satt til disabled
export const WithDisabledAndIcon = Template.bind({});
WithDisabledAndIcon.storyName = 'With Disabled And Icon (B5)';
WithDisabledAndIcon.args = {
  ...defaultArgs,
  svgPath: AddOutlineSVGpath,
  disabled: true,
};
WithDisabledAndIcon.argTypes = {
  ...WithDisabledAndIcon.argTypes,
  disabled: { table: { disable: false } },
  svgPath: { table: { disable: false } },
};

// Når InlineButton har prop type, så har button-elementet type satt
export const WithType = Template.bind({});
WithType.storyName = 'With Type (B1)';
WithType.args = {
  ...defaultArgs,
  type: 'submit',
};
WithType.argTypes = {
  ...WithType.argTypes,
  type: { table: { disable: false } },
};
WithType.parameters = {
  imageSnapshot: { disable: true },
};
WithType.play = verifyAttribute('type', 'submit');

// Når InlineButton har aria-describedby, så har button-element aria-describedby
export const WithAriaDescribedby = Template.bind({});
WithAriaDescribedby.storyName = 'With AriaDescribedby (B2)';
WithAriaDescribedby.args = {
  ...defaultArgs,
  ariaDescribedby: 'testid1234',
};
WithAriaDescribedby.argTypes = {
  ...WithAriaDescribedby.argTypes,
  ariaDescribedby: { table: { disable: false } },
};
WithAriaDescribedby.parameters = {
  imageSnapshot: { disable: true },
};
WithAriaDescribedby.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const inlineButton = canvas.getByRole('button');
  await expect(inlineButton).toBeInTheDocument();
  await expect(inlineButton).toHaveAttribute('aria-describedby', 'testid1234');
};

// Når InlineButton har satt accessKey, så har accessKey en verdi
export const WithAccesskey = Template.bind({});
WithAccesskey.storyName = 'With Accesskey (B3)';
WithAccesskey.args = {
  ...defaultArgs,
  accessKey: 'j',
};
WithAccesskey.argTypes = {
  ...WithAccesskey.argTypes,
  accessKey: { table: { disable: false } },
};
WithAccesskey.parameters = {
  imageSnapshot: { disable: true },
};
WithAccesskey.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const inlineButton = canvas.getByRole('button');
  await expect(inlineButton).toBeInTheDocument();
  await expect(inlineButton).toHaveAttribute('accessKey', 'j');
};

// Når brukeren setter focus, blurrer, eller klikker på knappen, så kalles riktig eventHandler
// Eventhandlere endrer tesksten på knappen
const EventHandlersTemplate: ComponentStory<typeof InlineButton> = (args) => {
  const [buttonText, setButtonText] = useState('bruk knapp for å events');
  return (
    <div data-test-block>
      <InlineButton
        {...args}
        onFocus={(event: React.FocusEvent<HTMLButtonElement>): void => {
          setButtonText('Knapp har fått fokus');
          args.onFocus && args.onFocus(event);
        }}
        onBlur={(event: React.FocusEvent<HTMLButtonElement>): void => {
          setButtonText('Knapp har blitt blurret');
          args.onBlur && args.onBlur(event);
        }}
        onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
          setButtonText('Knapp har blitt klikket på');
          args.onClick && args.onClick(event);
        }}
      >
        {buttonText}
      </InlineButton>
    </div>
  );
};
export const WithEventHandlers = EventHandlersTemplate.bind({});
WithEventHandlers.storyName = 'With EventHandlers (A2 delvis)';
WithEventHandlers.args = {
  ...defaultArgs,
};
WithEventHandlers.argTypes = {
  ...WithEventHandlers.argTypes,
};
WithEventHandlers.parameters = {
  imageSnapshot: { disable: true },
};
WithEventHandlers.play = async ({ args, canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const inlineButton = canvas.getByText('bruk knapp for å events');
  await expect(inlineButton).toBeInTheDocument();
  await inlineButton.focus();
  await waitFor(() => expect(args.onFocus).toHaveBeenCalled());
  await userEvent.tab();
  await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
  await userEvent.click(inlineButton);
  await waitFor(() => expect(args.onClick).toHaveBeenCalled());
};
