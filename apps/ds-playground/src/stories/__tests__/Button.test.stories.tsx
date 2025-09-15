import { FocusEvent, MouseEvent, useState } from 'react';

import { StoryFn, Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, waitFor, within } from 'storybook/test';

import { Button } from '@skatteetaten/ds-buttons';
import {
  dsI18n,
  getCommonButtonTypeDefault,
} from '@skatteetaten/ds-core-utils';
import { SendSVGpath } from '@skatteetaten/ds-icons';

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

const meta = {
  component: Button,
  title: 'Tester/Button',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: { table: { disable: true } },
    hasSpinner: { table: { disable: true } },
    spinnerTitle: { table: { disable: true } },
    svgPath: {
      table: { disable: true },
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
    },
    variant: { table: { disable: true } },
    isExternal: { table: { disable: true } },
    // HTML
    accessKey: { table: { disable: true } },
    disabled: { table: { disable: true } },
    href: { table: { disable: true } },
    form: { table: { disable: true } },
    type: { table: { disable: true } },
    // Aria
    ariaDescribedby: { table: { disable: true } },
    ariaCurrent: { table: { disable: true } },
    // Events
    onBlur: { table: { disable: true } },
    onClick: { table: { disable: true } },
    onFocus: { table: { disable: true } },
  },
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
  },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  children: defaultButtonText,
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
    imageSnapshot: { disableSnapshot: true },
  },
  play: verifyAttribute('id', 'dummyIdForwardedFromRef'),
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlid',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
    form: 'formid123',
  },
  argTypes: {
    id: { table: { disable: false } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
    form: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
    // customClassname sin farge gir ikke nok kontrast med knapp i modal ved hover
    a11y: { test: 'off' },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('id', 'htmlid');
    await expect(button).toHaveClass('dummyClassname');
    await expect(button).toHaveAttribute('lang', 'nb');
    await expect(button).toHaveAttribute('data-testid', '123ID');
    await expect(button).toHaveAttribute('form', 'formid123');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults Variant Primary (A1, B1)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    children: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { pseudoStates: ['hover', 'focus', 'active'] },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute('type', getCommonButtonTypeDefault());
  },
} satisfies Story;

export const VariantSecondary = {
  name: 'Variant Secondary (A1)',
  args: {
    ...defaultArgs,
    variant: 'secondary',
  },
  argTypes: {
    variant: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { pseudoStates: ['hover', 'focus', 'active'] },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute('type', getCommonButtonTypeDefault());
  },
} satisfies Story;

export const VariantTertiary = {
  name: 'Variant Tertiary (A1)',
  args: {
    ...defaultArgs,
    variant: 'tertiary',
  },
  argTypes: {
    variant: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { pseudoStates: ['hover', 'focus', 'active'] },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute('type', getCommonButtonTypeDefault());
  },
} satisfies Story;

export const VariantDanger = {
  name: 'Variant Danger (A1)',
  args: { ...defaultArgs, variant: 'danger' },
  argTypes: {
    variant: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { pseudoStates: ['hover', 'focus', 'active'] },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute('type', getCommonButtonTypeDefault());
  },
} satisfies Story;

export const WithIcon = {
  name: 'With Icon (A3, B3)',
  args: {
    ...defaultArgs,
    svgPath: SendSVGpath,
  },
  argTypes: {
    svgPath: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    const svg = button.querySelector('svg');
    await expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    await expect(svg).toHaveAttribute('aria-hidden', 'true');
    await expect(button).toBeInTheDocument();
  },
} satisfies Story;

export const WithLongText = {
  name: 'With Long Text (A1 delvis)',
  args: {
    ...defaultArgs,
    children:
      'Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Her har vi ikke ikon så da skal teksten midtstilles. ' +
      'Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Her har vi ikke ikon så da skal teksten midtstilles',
  },
  argTypes: {
    children: { table: { disable: false } },
  },
} satisfies Story;

export const WithLongTextAndIcon = {
  name: 'With Long Text And Icon (A1 delvis)',
  args: {
    ...defaultArgs,
    svgPath: SendSVGpath,
    children:
      'Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Tekst skal venstrejusteres. ' +
      'Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Tekst skal venstrejusteres.',
  },
  argTypes: {
    children: { table: { disable: false } },
    svgPath: { table: { disable: false } },
  },
} satisfies Story;

export const WithDisabled = {
  name: 'With Disabled (B5)',
  args: {
    ...defaultArgs,
    disabled: true,
  },
  argTypes: {
    disabled: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { pseudoStates: ['hover', 'focus', 'active'] },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('button')).toBeDisabled();
  },
} satisfies Story;

export const WithDisabledAndIcon = {
  name: 'With Disabled And Icon (B5)',
  args: {
    ...defaultArgs,
    svgPath: SendSVGpath,
    disabled: true,
  },
  argTypes: {
    svgPath: { table: { disable: false } },
    disabled: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { pseudoStates: ['hover', 'focus', 'active'] },
  },
} satisfies Story;

export const WithType = {
  name: 'With Type (B1)',
  args: {
    ...defaultArgs,
    type: 'submit',
  },
  argTypes: {
    type: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: verifyAttribute('type', 'submit'),
} satisfies Story;

export const WithAriaDescribedby = {
  name: 'With AriaDescribedby (B2)',
  args: {
    ...defaultArgs,
    ariaDescribedby: 'testid1234',
  },
  argTypes: {
    ariaDescribedby: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: verifyAttribute('aria-describedby', 'testid1234'),
} satisfies Story;

export const WithAccesskey = {
  name: 'With Accesskey (B3)',
  args: {
    ...defaultArgs,
    accessKey: 'j',
  },
  argTypes: {
    accessKey: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: verifyAttribute('accessKey', 'j'),
} satisfies Story;

const EventHandlersTemplate: StoryFn<typeof Button> = (args) => {
  const [buttonText, setButtonText] = useState('bruk knapp for å teste events');
  return (
    <Button
      {...args}
      onFocus={(event: FocusEvent<HTMLButtonElement>): void => {
        setButtonText('Knapp har fått fokus');
        args.onFocus && args.onFocus(event);
      }}
      onBlur={(event: FocusEvent<HTMLButtonElement>): void => {
        setButtonText('Knapp har blitt blurret');
        args.onBlur && args.onBlur(event);
      }}
      onClick={(event: MouseEvent<HTMLButtonElement>): void => {
        setButtonText('Knapp har blitt klikket på');
        args.onClick && args.onClick(event);
      }}
    >
      {buttonText}
    </Button>
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
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ args, canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    button.focus();
    await waitFor(() => expect(args.onFocus).toHaveBeenCalled());
    await userEvent.tab();
    await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
    await userEvent.click(button);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  },
} satisfies Story;

const TemplateWithSpinner: StoryFn<typeof Button> = (args) => (
  <>
    <div className={'bottomSpacingXL'}>
      <Button {...args} hasSpinner={false} className={'marginRightM'} />
      <Button
        {...args}
        hasSpinner={false}
        variant={'secondary'}
        className={'marginRightM'}
      />
      <Button
        {...args}
        hasSpinner={false}
        variant={'tertiary'}
        className={'marginRightM'}
      />
      <Button {...args} hasSpinner={false} variant={'danger'} />
    </div>
    <div className={'bottomSpacingXL'}>
      <Button {...args} className={'marginRightM'} />
      <Button {...args} variant={'secondary'} className={'marginRightM'} />
      <Button {...args} variant={'tertiary'} className={'marginRightM'} />
      <Button {...args} variant={'danger'} />
    </div>
    <div className={'bottomSpacingXL'}>
      <Button
        {...args}
        svgPath={SendSVGpath}
        hasSpinner={false}
        className={'marginRightM'}
      />
      <Button
        {...args}
        svgPath={SendSVGpath}
        hasSpinner={false}
        variant={'secondary'}
        className={'marginRightM'}
      />
      <Button
        {...args}
        svgPath={SendSVGpath}
        hasSpinner={false}
        variant={'tertiary'}
        className={'marginRightM'}
      />
      <Button
        {...args}
        svgPath={SendSVGpath}
        hasSpinner={false}
        variant={'danger'}
      />
    </div>
    <Button {...args} svgPath={SendSVGpath} className={'marginRightM'} />
    <Button
      {...args}
      svgPath={SendSVGpath}
      variant={'secondary'}
      className={'marginRightM'}
    />
    <Button
      {...args}
      svgPath={SendSVGpath}
      variant={'tertiary'}
      className={'marginRightM'}
    />
    <Button {...args} svgPath={SendSVGpath} variant={'danger'} />
  </>
);

export const WithSpinner = {
  render: TemplateWithSpinner,
  name: 'With Spinner (A6)',
  args: {
    ...defaultArgs,
    hasSpinner: true,
  },
  argTypes: {
    hasSpinner: { table: { disable: false } },
  },
} satisfies Story;

export const WithExternalIcon = {
  name: 'With External Icon (A7, B6)',
  args: {
    ...defaultArgs,
    isExternal: true,
    children: 'Til altinn.no',
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
