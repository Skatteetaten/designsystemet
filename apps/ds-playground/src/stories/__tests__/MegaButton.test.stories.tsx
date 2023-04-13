import { useState } from 'react';

import {
  MegaButton,
  MegaButtonComponentCommonProps,
  MegaButtonDiscriminatedProp,
} from '@skatteetaten/ds-buttons';
import { expect } from '@storybook/jest';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';

import { wrapper } from './testUtils/storybook.testing.utils';

const defaultMegaButtonText = 'Klikk her';

const verifyAttribute =
  (attribute: string, expectedValue: string) =>
  async ({ canvasElement }: { canvasElement: HTMLElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const megaButton = canvas.getByRole('button');
    await expect(megaButton).toBeInTheDocument();
    await expect(megaButton).toHaveAttribute(attribute, expectedValue);
  };

export default {
  component: MegaButton,
  title: 'Tester/MegaButton',
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
    isExternal: { table: { disable: true } },
    // HTML
    accessKey: {
      table: { disable: true },
      control: 'text',
    },
    disabled: { table: { disable: true } },
    href: { table: { disable: true } },
    type: { table: { disable: true } },
    // Aria
    ariaDescribedby: { table: { disable: true } },
    // Events
    onBlur: { table: { disable: true } },
    onClick: { table: { disable: true } },
    onFocus: { table: { disable: true } },
  },
} as ComponentMeta<typeof MegaButton>;

const Template: ComponentStory<typeof MegaButton> = (args) => (
  <div className={'noTransition'} data-test-block>
    {/* eslint-disable-next-line testing-library/no-node-access */}
    <MegaButton {...args}>{args.children}</MegaButton>
  </div>
);

const defaultArgs: MegaButtonComponentCommonProps = {
  children: defaultMegaButtonText,
};

// Når MegaButton har en ref, så får dom button elementet ref forwarded
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

// Når MegaButton har en id, så har button-element id
// Når MegaButton har en custom CSS, så vises custom stil
// Når MegaButton har en lang, så har button-element lang
// Når MegaButton har dataTestid, så har button-elementet data-testid satt
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
  const megaButton = canvas.getByRole('button');
  await expect(megaButton).toHaveClass('dummyClassname');
  await expect(megaButton).toHaveAttribute('id', 'htmlId');
  await expect(megaButton).toHaveAttribute('lang', 'nb');
  await expect(megaButton).toHaveAttribute('data-testid', '123ID');
};

// Når MegaButton instansieres, så får den riktige default-verdier og rendrer riktig i ulike tilstander
export const Defaults = Template.bind({});
Defaults.storyName = 'Defaults (A1, B2)';
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
  const megaButton = canvas.getByText(defaultMegaButtonText);
  await expect(megaButton).toBeInTheDocument();
  await expect(megaButton).toHaveAttribute('type', 'button');
};

// Når MegaButton har en veldig lang tekst så skal det brekke over flere linjer
export const WithLongText = Template.bind({});
WithLongText.storyName = 'With Long Text (A2)';
WithLongText.args = {
  ...defaultArgs,
  children: 'Denne knappen har en veldig lang tekst. Så lang at den må brekke.',
};
WithLongText.argTypes = {
  ...WithLongText.argTypes,
  children: { table: { disable: false } },
};

// Når MegaButton har en veldig lang tekst uten breaking space så skal det brekke over flere linjer
export const WithLongTextBreaking = Template.bind({});
WithLongTextBreaking.storyName = 'With Long Text Breaking (A1, A2)';
WithLongTextBreaking.args = {
  ...defaultArgs,
  children: 'Denneknappenharenveldiglangtekst.Sålangatdenmåbrekke.',
};
WithLongTextBreaking.argTypes = {
  ...WithLongTextBreaking.argTypes,
  children: { table: { disable: false } },
};

// Når MegaButton har isExternal, så vises riktig ikon med tilhørende tekst. Tester også for de icon props som er relevant for saken med systemIcon som er brukt.
export const WithExternalIcon = Template.bind({});
WithExternalIcon.storyName = 'With External Icon (A4, B5, B7)';
WithExternalIcon.args = {
  ...defaultArgs,
  isExternal: true,
};
WithExternalIcon.argTypes = {
  ...WithExternalIcon.argTypes,
  isExternal: { table: { disable: false } },
};
WithExternalIcon.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);

  const megaButton = canvas.getByRole('button');
  // eslint-disable-next-line testing-library/no-node-access
  const svg = megaButton.querySelector('svg');
  await expect(svg).toHaveAttribute('aria-label', 'Til et annet nettsted');
  await expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
  await expect(megaButton).toBeInTheDocument();
};

// Når MegaButton har en veldig lang tekst så skal teksten brytes over flere linjer
// og når det er et ikon skal ikonet plasseres løpende etter teksten
export const WithLongTextAndExternalIcon = Template.bind({});
WithLongTextAndExternalIcon.storyName = 'With Long Text and External Icon (A2)';
WithLongTextAndExternalIcon.args = {
  ...defaultArgs,
  isExternal: true,
  children:
    'Denne knappen har en veldig lang tekst. Icon skal da plasseres løpende etter tekster på siste linje',
};
WithLongTextAndExternalIcon.argTypes = {
  ...WithLongTextAndExternalIcon.argTypes,
  children: { table: { disable: false } },
  isExternal: { table: { disable: false } },
};

export const Disabled = Template.bind({});
Disabled.storyName = 'Disabled (B6)';
const discriminatedProps: MegaButtonDiscriminatedProp = {
  href: undefined,
  disabled: true,
};
Disabled.args = {
  ...defaultArgs,
  ...discriminatedProps,
};
Disabled.argTypes = {
  ...Disabled.argTypes,
  disabled: { table: { disable: false } },
};
Disabled.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  expect(canvas.getByText(defaultMegaButtonText)).toBeDisabled();
};

// Når MegaButton har prop type, så har button-elementet type satt
export const WithType = Template.bind({});
WithType.storyName = 'With Type (B2)';
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

// Når MegaButton har aria attributer, så har button element aria-* satt
export const WithAriaDescribedby = Template.bind({});
WithAriaDescribedby.storyName = 'With AriaDescribedby (B1)';
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
  const megaButton = canvas.getByRole('button');
  await expect(megaButton).toBeInTheDocument();
  await expect(megaButton).toHaveAttribute('aria-describedby', 'testid1234');
};

// Når MegaButton har en accessKey, så settes den som forventet
export const WithAccesskey = Template.bind({});
WithAccesskey.storyName = 'With Accesskey (B4)';
WithAccesskey.args = {
  children: defaultMegaButtonText,
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
  const megaButton = canvas.getByRole('button');
  await expect(megaButton).toBeInTheDocument();
  await expect(megaButton).toHaveAttribute('accessKey', 'j');
};

// Når MegaButton har en href, så rendres den som en a
export const AsLink = Template.bind({});
AsLink.storyName = 'As Link (B3)';
AsLink.args = {
  ...defaultArgs,
  href: 'https://www.skatteetaten.no',
};
AsLink.argTypes = {
  ...AsLink.argTypes,
  href: { table: { disable: false } },
};
AsLink.parameters = {
  imageSnapshot: {
    focus: `${wrapper} > a`,
    hover: `${wrapper} > a`,
  },
};

// Når MegaButton har en href med tom streng, så rendres den som en a
export const AsLinkEmptyString = Template.bind({});
AsLinkEmptyString.storyName = 'As Link with empty href (B3)';
AsLinkEmptyString.args = {
  ...defaultArgs,
  href: '',
};
AsLinkEmptyString.argTypes = {
  ...AsLinkEmptyString.argTypes,
  href: { table: { disable: false } },
};
AsLinkEmptyString.parameters = {
  imageSnapshot: { disable: true },
};

// Når MegaButton har en href og er eksternlink, så rendres den som en a og det vises eksternlink-ikon
export const AsLinkExternal = Template.bind({});
AsLinkExternal.storyName = 'As Link External (B3, A4)';
AsLinkExternal.args = {
  ...defaultArgs,
  href: 'https://www.skatteetaten.no',
  isExternal: true,
};
AsLinkExternal.argTypes = {
  ...AsLinkExternal.argTypes,
  href: { table: { disable: false } },
  isExternal: { table: { disable: false } },
};
AsLinkExternal.parameters = {
  imageSnapshot: {
    focus: `${wrapper} > a`,
    hover: `${wrapper} > a`,
  },
};
AsLinkExternal.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const megaButton = canvas.getByText('Klikk her');
  await expect(megaButton).toBeInTheDocument();
  await expect(megaButton.tagName).toBe('A');
  await expect(megaButton).toHaveAttribute('role', 'button');
};

// Når brukeren setter focus, blurrer, eller klikker på knappen, så kalles riktig eventHandler
// Eventhandlere endrer tesksten på knappen
const EventHandlersTemplate: ComponentStory<typeof MegaButton> = (args) => {
  const [buttonText, setButtonText] = useState('bruk knapp for å teste events');
  return (
    <div className={'noTransition'} data-test-block>
      <MegaButton
        {...args}
        onFocus={(
          event: React.FocusEvent<HTMLButtonElement | HTMLAnchorElement>
        ): void => {
          setButtonText('Knapp har fått fokus');
          args.onFocus && args.onFocus(event);
        }}
        onBlur={(
          event: React.FocusEvent<HTMLButtonElement | HTMLAnchorElement>
        ): void => {
          setButtonText('Knapp har blitt blurret');
          args.onBlur && args.onBlur(event);
        }}
        onClick={(
          event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
        ): void => {
          setButtonText('Knapp har blitt klikket på');
          args.onClick && args.onClick(event);
        }}
      >
        {buttonText}
      </MegaButton>
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
  const megaButton = canvas.getByText('bruk knapp for å teste events');
  await expect(megaButton).toBeInTheDocument();
  await megaButton.focus();
  await waitFor(() => expect(args.onFocus).toHaveBeenCalled());
  await userEvent.tab();
  await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
  await userEvent.click(megaButton);
  await waitFor(() => expect(args.onClick).toHaveBeenCalled());
};
