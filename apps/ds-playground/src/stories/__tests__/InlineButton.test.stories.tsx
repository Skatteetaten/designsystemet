import { FocusEvent, MouseEvent, useState } from 'react';

import { InlineButton } from '@skatteetaten/ds-buttons';
import {
  getCommonButtonTypeDefault,
  positionArr,
} from '@skatteetaten/ds-core-utils';
import { AddOutlineSVGpath } from '@skatteetaten/ds-icons';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { expect, userEvent, waitFor, within } from '@storybook/test';

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

const meta = {
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
    hasSpinner: { table: { disable: true } },
    spinnerTitle: { table: { disable: true } },
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
} satisfies Meta<typeof InlineButton>;
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
    const inlineButton = canvas.getByRole('button');
    await expect(inlineButton).toHaveClass('dummyClassname');
    await expect(inlineButton).toHaveAttribute('id', 'htmlId');
    await expect(inlineButton).toHaveAttribute('lang', 'nb');
    await expect(inlineButton).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults (A1, B1)',
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
    const inlineButton = canvas.getByRole('button');
    await expect(inlineButton).toBeInTheDocument();
    await expect(inlineButton).toHaveAttribute(
      'type',
      getCommonButtonTypeDefault()
    );
  },
} satisfies Story;

export const WithLongText = {
  name: 'With Long Text (A1)',
  args: {
    ...defaultArgs,
    children:
      'Denne knappen har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er venstrejustert. ' +
      'Denne knappen har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er venstrejustert.',
  },
  argTypes: {
    children: { table: { disable: false } },
  },
} satisfies Story;

export const WithIcon = {
  name: 'With Icon (A3, A4, B4)',
  args: {
    ...defaultArgs,
    svgPath: AddOutlineSVGpath,
  },
  argTypes: {
    svgPath: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inlineButton = canvas.getByRole('button');
    // eslint-disable-next-line testing-library/no-node-access
    const svg = inlineButton.querySelector('svg');
    await expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    await expect(inlineButton).toBeInTheDocument();
  },
} satisfies Story;

export const WithCustomIcon = {
  name: 'With Custom Icon (A3)',
  args: {
    ...defaultArgs,
    svgPath: <path d={'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z'} />,
  },
  argTypes: {
    svgPath: {
      table: { disable: false },
      control: { type: null },
    },
  },
} satisfies Story;

export const WithLongTextAndIcon = {
  name: 'With Long Text And Icon (A3)',
  args: {
    ...defaultArgs,
    svgPath: AddOutlineSVGpath,
    children:
      'Denne knappen har en veldig lang tekst med ikon på høyre side. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er høyrejustert. ' +
      'Denne knappen har en veldig lang tekst med ikon på høyre side. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er høyrejustert.',
  },
  argTypes: {
    children: { table: { disable: false } },
    svgPath: { table: { disable: false } },
  },
} satisfies Story;

export const WithIconRight = {
  name: 'With Icon Right (A5)',
  args: {
    ...defaultArgs,
    svgPath: AddOutlineSVGpath,
    iconPosition: 'right',
  },
  argTypes: {
    iconPosition: {
      table: { disable: false },
    },
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
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('button')).toBeDisabled();
  },
} satisfies Story;

export const WithDisabledAndIcon = {
  name: 'With Disabled And Icon (B5)',
  args: {
    ...defaultArgs,
    svgPath: AddOutlineSVGpath,
    disabled: true,
  },
  argTypes: {
    disabled: { table: { disable: false } },
    svgPath: { table: { disable: false } },
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
    imageSnapshot: { disable: true },
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
    imageSnapshot: { disable: true },
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
    imageSnapshot: { disable: true },
  },
  play: verifyAttribute('accessKey', 'j'),
} satisfies Story;

const EventHandlersTemplate: StoryFn<typeof InlineButton> = (args) => {
  const [buttonText, setButtonText] = useState('bruk knapp for å events');
  return (
    <InlineButton
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
    </InlineButton>
  );
};

export const WithEventHandlers = {
  render: EventHandlersTemplate,
  name: 'With EventHandlers (A2 delvis)',
  args: {
    ...defaultArgs,
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ args, canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inlineButton = canvas.getByRole('button');
    await expect(inlineButton).toBeInTheDocument();
    await inlineButton.focus();
    await waitFor(() => expect(args.onFocus).toHaveBeenCalled());
    await userEvent.tab();
    await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
    await userEvent.click(inlineButton);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  },
} satisfies Story;

const TemplateWithSpinner: StoryFn<typeof InlineButton> = (args) => (
  <>
    <div className={'flex bottomSpacingXL'}>
      <InlineButton {...args} hasSpinner={false} className={'marginRightM'} />
      <InlineButton
        {...args}
        svgPath={AddOutlineSVGpath}
        hasSpinner={false}
        className={'marginRightM'}
      />
      <InlineButton
        {...args}
        svgPath={AddOutlineSVGpath}
        iconPosition={'right'}
        hasSpinner={false}
      />
    </div>
    <div className={'flex'}>
      <InlineButton {...args} className={'marginRightM'} />
      <InlineButton
        {...args}
        svgPath={AddOutlineSVGpath}
        className={'marginRightM'}
      />
      <InlineButton
        {...args}
        svgPath={AddOutlineSVGpath}
        iconPosition={'right'}
      />
    </div>
  </>
);

export const WithSpinner = {
  render: TemplateWithSpinner,
  name: 'With Spinner (A8)',
  args: {
    ...defaultArgs,
    hasSpinner: true,
  },
  argTypes: {
    hasSpinner: { table: { disable: false } },
  },
} satisfies Story;
