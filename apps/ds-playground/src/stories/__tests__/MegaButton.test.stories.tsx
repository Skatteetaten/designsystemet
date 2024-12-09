import { FocusEvent, MouseEvent, useState } from 'react';

import {
  MegaButton,
  MegaButtonComponentCommonProps,
  MegaButtonDiscriminatedProp,
} from '@skatteetaten/ds-buttons';
import {
  dsI18n,
  getCommonButtonTypeDefault,
} from '@skatteetaten/ds-core-utils';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';

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

const meta = {
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
    hasSpinner: { table: { disable: true } },
    spinnerTitle: { table: { disable: true } },
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
} satisfies Meta<typeof MegaButton>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: MegaButtonComponentCommonProps = {
  children: defaultMegaButtonText,
};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLButtonElement | null): void => {
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
  play: verifyAttribute('id', 'dummyIdForwardedFromRef'),
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes(FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlId',
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
    const megaButton = canvas.getByRole('button');
    await expect(megaButton).toHaveClass('dummyClassname');
    await expect(megaButton).toHaveAttribute('id', 'htmlId');
    await expect(megaButton).toHaveAttribute('lang', 'nb');
    await expect(megaButton).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults (A1, B2)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    children: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: {
      focus: `${wrapper} > button`,
      hover: `${wrapper} > button`,
      click: `${wrapper} > button`,
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const megaButton = canvas.getByRole('button');
    await expect(megaButton).toBeInTheDocument();
    await expect(megaButton).toHaveAttribute(
      'type',
      getCommonButtonTypeDefault()
    );
  },
} satisfies Story;

export const WithLongText = {
  name: 'With Long Text (A2)',
  args: {
    ...defaultArgs,
    children:
      'Denne knappen har en veldig lang tekst. Så lang at den må brekke.',
  },
  argTypes: {
    children: { table: { disable: false } },
  },
} satisfies Story;

export const WithLongTextAndBreaking = {
  name: 'With Long Text And Breaking (A1, A2)',
  args: {
    ...defaultArgs,
    children: 'Denneknappenharenveldiglangtekst.Sålangatdenmåbrekke.',
  },
  argTypes: {
    children: { table: { disable: false } },
  },
} satisfies Story;

export const WithExternalIcon = {
  name: 'With External Icon (A4, B5, B7)',
  args: {
    ...defaultArgs,
    isExternal: true,
    href: '#',
  },
  argTypes: {
    isExternal: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const megaButton = canvas.getByRole('button');

    const svg = megaButton.querySelector('svg');
    await expect(svg).toHaveAttribute(
      'aria-label',
      dsI18n.t('ds_buttons:shared.ExternalIcon')
    );
    await expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    await expect(megaButton).toBeInTheDocument();
  },
} satisfies Story;

export const WithLongTextAndExternalIcon = {
  name: 'With Long Text and External Icon (A2)',
  args: {
    ...defaultArgs,
    isExternal: true,
    href: '#',
    children:
      'Denne knappen har en veldig lang tekst. Icon skal da plasseres løpende etter tekster på siste linje',
  },
  argTypes: {
    children: { table: { disable: false } },
    isExternal: { table: { disable: false } },
  },
} satisfies Story;

const discriminatedProps: MegaButtonDiscriminatedProp = {
  href: undefined,
  disabled: true,
};

export const WithDisabled = {
  name: 'With Disabled (B6)',
  args: {
    ...defaultArgs,
    ...discriminatedProps,
  },
  argTypes: {
    disabled: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('button')).toBeDisabled();
  },
} satisfies Story;

export const WithType = {
  name: 'With Type (B2)',
  args: {
    ...defaultArgs,
    type: 'submit',
  },
  argTypes: {
    type: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: verifyAttribute('type', 'submit'),
} satisfies Story;

export const WithAriaDescribedby = {
  name: 'With AriaDescribedby (B1)',
  args: {
    ...defaultArgs,
    ariaDescribedby: 'testid1234',
  },
  argTypes: {
    ariaDescribedby: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: verifyAttribute('aria-describedby', 'testid1234'),
} satisfies Story;

export const WithAccesskey = {
  name: 'With Accesskey (B4)',
  args: {
    children: defaultMegaButtonText,
    accessKey: 'j',
  },
  argTypes: {
    accessKey: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: verifyAttribute('accessKey', 'j'),
} satisfies Story;

export const AsLink = {
  name: 'As Link (B3)',
  args: {
    ...defaultArgs,
    href: 'https://www.skatteetaten.no',
  },
  argTypes: {
    href: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: {
      focus: `${wrapper} > a`,
      hover: `${wrapper} > a`,
    },
  },
} satisfies Story;

export const AsLinkEmptyString = {
  name: 'As Link with empty href (B3)',
  args: {
    ...defaultArgs,
    href: '',
  },
  argTypes: {
    href: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
} satisfies Story;

export const AsLinkExternal = {
  name: 'As Link External (B3, A4)',
  args: {
    ...defaultArgs,
    href: 'https://www.skatteetaten.no',
    isExternal: true,
  },
  argTypes: {
    href: { table: { disable: false } },
    isExternal: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: {
      focus: `${wrapper} > a`,
      hover: `${wrapper} > a`,
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const megaButton = canvas.getByRole('button');
    await expect(megaButton).toBeInTheDocument();
    await expect(megaButton.tagName).toBe('A');
    await expect(megaButton).toHaveAttribute('role', 'button');
  },
} satisfies Story;

const EventHandlersTemplate: StoryFn<typeof MegaButton> = (args) => {
  const [buttonText, setButtonText] = useState('bruk knapp for å teste events');
  return (
    <MegaButton
      {...args}
      onFocus={(
        event: FocusEvent<HTMLButtonElement | HTMLAnchorElement>
      ): void => {
        setButtonText('Knapp har fått fokus');
        args.onFocus && args.onFocus(event);
      }}
      onBlur={(
        event: FocusEvent<HTMLButtonElement | HTMLAnchorElement>
      ): void => {
        setButtonText('Knapp har blitt blurret');
        args.onBlur && args.onBlur(event);
      }}
      onClick={(
        event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>
      ): void => {
        setButtonText('Knapp har blitt klikket på');
        args.onClick && args.onClick(event);
      }}
    >
      {buttonText}
    </MegaButton>
  );
};

export const WithEventHandlers = {
  render: EventHandlersTemplate,
  name: 'With EventHandlers (A2 delvis)',
  args: {
    ...defaultArgs,
    onFocus: fn(),
    onBlur: fn(),
    onClick: fn(),
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ args, canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const megaButton = canvas.getByRole('button');
    await expect(megaButton).toBeInTheDocument();
    megaButton.focus();
    await waitFor(() => expect(args.onFocus).toHaveBeenCalled());
    await userEvent.tab();
    await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
    await userEvent.click(megaButton);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  },
} satisfies Story;

const TemplateWithSpinner: StoryFn<typeof MegaButton> = (args) => (
  <>
    <div className={'bottomSpacingXL'}>
      <MegaButton>{defaultMegaButtonText}</MegaButton>
    </div>
    <MegaButton {...args}>{defaultMegaButtonText}</MegaButton>
  </>
);

export const WithSpinner = {
  render: TemplateWithSpinner,
  name: 'With Spinner (A7)',
  args: {
    ...defaultArgs,
    hasSpinner: true,
  },
  argTypes: {
    hasSpinner: { table: { disable: false } },
  },
} satisfies Story;
