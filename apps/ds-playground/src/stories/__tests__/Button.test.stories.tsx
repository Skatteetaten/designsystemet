import { useState } from 'react';

import { Button, buttonVariantArr } from '@skatteetaten/ds-buttons';
import { SendSVGpath } from '@skatteetaten/ds-icons';
import { expect } from '@storybook/jest';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';

import { wrapper } from './testUtils/storybook.testing.utils';
import { SystemSVGPaths } from '../utils/icon.systems';

const defaultButtonText = 'Klikk her';

const verifyAttribute =
  (attribute: string, expectedValue: string) =>
  async ({ canvasElement }: { canvasElement: HTMLElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute(attribute, expectedValue);
  };

export default {
  component: Button,
  title: 'Tester/Button',
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
    svgPath: {
      table: { disable: true },
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
    },
    variant: {
      table: { disable: true },
      options: [...buttonVariantArr],
      control: 'radio',
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
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div data-test-block>
    <Button {...args} variant={args.variant} svgPath={args.svgPath}>
      {/* eslint-disable-next-line testing-library/no-node-access */}
      {args.children}
    </Button>
  </div>
);

const defaultArgs = {
  children: defaultButtonText,
};

// Når Button har en ref, så får dom button elementet ref forwarded
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
  ref: { table: { disable: false } },
};
WithRef.parameters = {
  imageSnapshot: { disable: true },
};
WithRef.play = verifyAttribute('id', 'dummyIdForwardedFromRef');

// Når Button har en id, så har button-elementet id'en satt
// Når Button har en custom className, så har button-elementet className satt og custom stil vises
// Når Button har en lang, så har button-elementet lang satt
// Når Button har en data-testid, så har button-elementet data-testid satt
export const WithAttributes = Template.bind({});
WithAttributes.storyName = 'With Attributes (FA2-5)';
WithAttributes.args = {
  ...defaultArgs,
  id: 'htmlid',
  className: 'dummyClassname',
  lang: 'nb',
  'data-testid': '123ID',
};
WithAttributes.argTypes = {
  id: { table: { disable: false } },
  className: { table: { disable: false } },
  lang: { table: { disable: false } },
  'data-testid': { table: { disable: false } },
};
WithAttributes.parameters = {
  imageSnapshot: {
    focus: `${wrapper} > button`,
    hover: `${wrapper} > button`,
    click: `${wrapper} > button`,
  },
};
WithAttributes.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button');
  await expect(button).toHaveAttribute('id', 'htmlid');
  await expect(button).toHaveClass('dummyClassname');
  await expect(button).toHaveAttribute('lang', 'nb');
  await expect(button).toHaveAttribute('data-testid', '123ID');
};

// Når Button instansieres, får den default variant primary.
// Knapp må også ha tekst/children
export const Defaults = Template.bind({});
Defaults.storyName = 'Defaults Variant Primary (A1, B1)';
Defaults.args = {
  ...defaultArgs,
};
Defaults.argTypes = {
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
  const button = canvas.getByText(defaultButtonText);
  await expect(button).toBeInTheDocument();
  await expect(button).toHaveAttribute('type', 'button');
};

// Når Button har en variant, så vises stilsett for varianten (secondary)
export const VariantSecondary = Template.bind({});
VariantSecondary.storyName = 'Variant Secondary (A1)';
VariantSecondary.args = {
  ...defaultArgs,
  variant: 'secondary',
};
VariantSecondary.argTypes = {
  variant: { table: { disable: false } },
};
VariantSecondary.parameters = {
  imageSnapshot: {
    focus: `${wrapper} > button`,
    hover: `${wrapper} > button`,
    click: `${wrapper} > button`,
  },
};
VariantSecondary.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const button = canvas.getByText(defaultButtonText);
  await expect(button).toBeInTheDocument();
  await expect(button).toHaveAttribute('type', 'button');
};

// Når Button har en variant, så vises stilsett for varianten (tertiary)
export const VariantTertiary = Template.bind({});
VariantTertiary.storyName = 'Variant Tertiary (A1)';
VariantTertiary.args = {
  ...defaultArgs,
  variant: 'tertiary',
};
VariantTertiary.argTypes = {
  variant: { table: { disable: false } },
};
VariantTertiary.parameters = {
  imageSnapshot: {
    focus: `${wrapper} > button`,
    hover: `${wrapper} > button`,
    click: `${wrapper} > button`,
  },
};
VariantTertiary.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const button = canvas.getByText(defaultButtonText);
  await expect(button).toBeInTheDocument();
  await expect(button).toHaveAttribute('type', 'button');
};

// Når Button har en variant, så vises stilsett for varianten (danger)
export const VariantDanger = Template.bind({});
VariantDanger.storyName = 'Variant Danger (A1)';
VariantDanger.args = { ...defaultArgs, variant: 'danger' };
VariantDanger.argTypes = {
  variant: { table: { disable: false } },
};
VariantDanger.parameters = {
  imageSnapshot: {
    focus: `${wrapper} > button`,
    hover: `${wrapper} > button`,
    click: `${wrapper} > button`,
  },
};
VariantDanger.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const button = canvas.getByText(defaultButtonText);
  await expect(button).toBeInTheDocument();
  await expect(button).toHaveAttribute('type', 'button');
};

// Når Button har ett ikon, så vises ikonet. Tester også for de icon props som er relevant for saken med systemIcon som er brukt.
export const WithIcon = Template.bind({});
WithIcon.storyName = 'With Icon (A3, B3)';
WithIcon.args = {
  ...defaultArgs,
  svgPath: SendSVGpath,
};
WithIcon.argTypes = {
  svgPath: { table: { disable: false } },
};
WithIcon.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button');
  // eslint-disable-next-line testing-library/no-node-access
  const svg = button.querySelector('svg');
  await expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
  await expect(svg).toHaveAttribute('aria-hidden', 'true');
  await expect(button).toBeInTheDocument();
};

// Når Button har en veldig lang tekst så skal tekst venstrejusteres
export const WithLongText = Template.bind({});
WithLongText.storyName = 'With Long Text (A1 delvis)';
WithLongText.args = {
  ...defaultArgs,
  children:
    'Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Her har vi ikke ikon så da skal teksten midtstilles. ' +
    'Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Her har vi ikke ikon så da skal teksten midtstilles',
};
WithLongText.argTypes = {
  children: { table: { disable: false } },
};

// Når Button har en veldig lang tekst uten breaking space så skal det brekke over flere linjer
export const WithLongTextAndBreaking = Template.bind({});
WithLongTextAndBreaking.storyName = 'With Long Text And Breaking (A1 delvis)';
WithLongTextAndBreaking.args = {
  ...defaultArgs,
  children:
    'Denneknappenharenveldiglangtekst.Sålangatdentvingerframlinjeskift.Herharviikkeikonsådaskaltekstenmidtstilles.' +
    'Denneknappenharenveldiglangtekst.Sålangatdentvingerframlinjeskift.Herharviikkeikonsådaskaltekstenmidtstilles',
};
WithLongTextAndBreaking.argTypes = {
  children: { table: { disable: false } },
};

// Når Button har en veldig lang tekst og det er et ikon så skal tekst venstrejusteres
export const WithLongTextAndIcon = Template.bind({});
WithLongTextAndIcon.storyName = 'With Long Text And Icon (A1 delvis)';
WithLongTextAndIcon.args = {
  ...defaultArgs,
  svgPath: SendSVGpath,
  children:
    'Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Tekst skal venstrejusteres. ' +
    'Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Tekst skal venstrejusteres.',
};
WithLongTextAndIcon.argTypes = {
  children: { table: { disable: false } },
  svgPath: { table: { disable: false } },
};

// Når Button har prop disabled, så er knapp disabled og stil er satt til disabled
export const WithDisabled = Template.bind({});
WithDisabled.storyName = 'With Disabled (B5)';
WithDisabled.args = {
  ...defaultArgs,
  disabled: true,
};
WithDisabled.argTypes = {
  disabled: { table: { disable: false } },
};
WithDisabled.parameters = {
  imageSnapshot: {
    focus: `${wrapper} > button`,
    hover: `${wrapper} > button`,
  },
};
WithDisabled.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  expect(canvas.getByRole('button')).toBeDisabled();
};

// Når Button har prop disabled og ikon er satt, så vises ikonet og knapp er disabled og stil er satt til disabled
export const WithDisabledAndIcon = Template.bind({});
WithDisabledAndIcon.storyName = 'With Disabled And Icon (B5)';
WithDisabledAndIcon.args = {
  ...defaultArgs,
  svgPath: SendSVGpath,
  disabled: true,
};
WithDisabledAndIcon.argTypes = {
  svgPath: { table: { disable: false } },
  disabled: { table: { disable: false } },
};
WithDisabledAndIcon.parameters = {
  imageSnapshot: {
    focus: `${wrapper} > button`,
    hover: `${wrapper} > button`,
  },
};

// Når Button har prop type, så har button-elementet type satt
export const WithType = Template.bind({});
WithType.storyName = 'With Type (B1)';
WithType.args = {
  ...defaultArgs,
  type: 'submit',
};
WithType.argTypes = {
  type: { table: { disable: false } },
};
WithType.parameters = {
  imageSnapshot: { disable: true },
};
WithType.play = verifyAttribute('type', 'submit');

// Når Button har aria attributer, så har button element aria-* satt
export const WithAriaDescribedby = Template.bind({});
WithAriaDescribedby.storyName = 'With AriaDescribedby (B2)';
WithAriaDescribedby.args = {
  ...defaultArgs,
  ariaDescribedby: 'testid1234',
};
WithAriaDescribedby.argTypes = {
  ariaDescribedby: { table: { disable: false } },
};
WithAriaDescribedby.parameters = {
  imageSnapshot: { disable: true },
};
WithAriaDescribedby.play = verifyAttribute('aria-describedby', 'testid1234');

// Når Button har satt accessKey, så har accessKey en verdi
export const WithAccesskey = Template.bind({});
WithAccesskey.storyName = 'With Accesskey (B3)';
WithAccesskey.args = {
  ...defaultArgs,
  accessKey: 'j',
};
WithAccesskey.argTypes = {
  accessKey: { table: { disable: false } },
};
WithAccesskey.parameters = {
  imageSnapshot: { disable: true },
};
WithAccesskey.play = verifyAttribute('accessKey', 'j');

// Når brukeren setter focus, blurrer, eller klikker på knappen, så kalles riktig eventHandler
// Eventhandlere endrer tesksten på knappen
const EventHandlersTemplate: ComponentStory<typeof Button> = (args) => {
  const [buttonText, setButtonText] = useState('bruk knapp for å teste events');
  return (
    <div data-test-block>
      <Button
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
      </Button>
    </div>
  );
};
export const WithEventHandlers = EventHandlersTemplate.bind({});
WithEventHandlers.storyName = 'With EventHandlers (A2 delvis)';
WithEventHandlers.args = {
  ...defaultArgs,
};
WithEventHandlers.parameters = {
  imageSnapshot: { disable: true },
};
WithEventHandlers.play = async ({ args, canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const button = canvas.getByText('bruk knapp for å teste events');
  await expect(button).toBeInTheDocument();
  await button.focus();
  await waitFor(() => expect(args.onFocus).toHaveBeenCalled());
  await userEvent.tab();
  await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
  await userEvent.click(button);
  await waitFor(() => expect(args.onClick).toHaveBeenCalled());
};
