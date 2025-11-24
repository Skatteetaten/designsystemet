import { ChangeEvent, FocusEvent, useState } from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, waitFor, within } from 'storybook/test';

import { Checkbox } from '@skatteetaten/ds-forms';

const verifyAttribute =
  (attribute: string, expectedValue: string) =>
  async ({ canvasElement }: { canvasElement: HTMLElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('checkbox');
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute(attribute, expectedValue);
  };

const meta = {
  component: Checkbox,
  title: 'Tester/Checkbox',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    classNames: { table: { disable: true } },
    children: { table: { disable: true } },
    defaultChecked: { table: { disable: true } },
    description: { table: { disable: true } },
    errorMessage: { table: { disable: true } },
    hasSpacing: { table: { disable: true } },
    hideLabel: { table: { disable: true } },
    showRequiredMark: { table: { disable: true } },
    // HTML
    checked: { table: { disable: true } },
    disabled: { table: { disable: true } },
    form: { table: { disable: true } },
    name: { table: { disable: true } },
    required: { table: { disable: true } },
    value: { table: { disable: true } },
    // Aria
    ariaDescribedby: { table: { disable: true } },
    // Events
    onBlur: { table: { disable: true } },
    onChange: { table: { disable: true } },
    onFocus: { table: { disable: true } },
  },
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
  },
} satisfies Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultLabelText = 'Checkbox';
const defaultErrorMessage = 'Du må lese og forstå innholdet for å gå videre';
const defaultArgs = {
  children: defaultLabelText,
};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLInputElement | null): void => {
      if (instance) {
        instance.name = 'dummyNameForwardedFromRef';
      }
    },
  },
  argTypes: {
    ref: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: verifyAttribute('name', 'dummyNameForwardedFromRef'),
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlid',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
    form: '123form',
  },
  argTypes: {
    id: { table: { disable: false } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
    form: { table: { disable: false } },
  },
  parameters: {
    a11y: {
      test: 'off',
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputNode = canvas.getByRole('checkbox');
    const container = canvas.getAllByRole('generic')[1];
    await expect(inputNode).toHaveAttribute('id', 'htmlid');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(inputNode).toHaveAttribute('data-testid', '123ID');
    await expect(inputNode).toHaveAttribute('form', '123form');
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
    imageSnapshot: { pseudoStates: ['hover', 'focus-visible', 'active'] },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputNode = canvas.getByLabelText(defaultLabelText);
    await expect(inputNode).toBeInTheDocument();
    await expect(inputNode.tagName).toBe('INPUT');
    await expect(inputNode).toHaveAttribute('aria-invalid', 'false');
    await expect(inputNode).not.toBeChecked();
    await expect(inputNode).not.toBeRequired();
    await expect(inputNode).toBeEnabled();
    await expect(inputNode).not.toHaveAttribute('aria-describedby');
    const errorMessage = canvas.getAllByRole('generic')[6];
    await expect(errorMessage).toBeInTheDocument();
  },
} satisfies Story;

export const WithDescription = {
  name: 'With Description (A1)',
  args: {
    ...defaultArgs,
    description: 'En beskrivelse av punktet',
  },
  argTypes: {
    description: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { pseudoStates: ['hover', 'focus-visible', 'active'] },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const description = canvas.getByText('En beskrivelse av punktet');
    await expect(description).toBeInTheDocument();
    const checkbox = canvas.getByRole('checkbox');
    await expect(checkbox).toHaveAttribute('aria-describedby');
    const describedbyValue = checkbox.getAttribute('aria-describedby');
    await expect(describedbyValue).toMatch(/descId-/);
  },
} satisfies Story;

export const WithDescriptionAndLongText = {
  name: 'With Description And Long Text (A1)',
  args: {
    ...defaultArgs,
    children:
      'Får ekstra lang reisevei til jobb på grunn av levering til barnehage eller skolefritidsordning eller annen fritidsordning',
    description:
      'Litt rart å ha en beskrivende tekst rett under en lang tekst, men sånn har det blitt',
  },
  argTypes: {
    description: { table: { disable: false } },
  },
  globals: {
    viewport: {
      value: '--breakpoint-xs',
    },
  },
} satisfies Story;

export const WithDescriptionAndDisabled = {
  name: 'With Description And Disabled (A1)',
  args: {
    ...defaultArgs,
    description: 'En beskrivelse av punktet',
    disabled: true,
  },
  argTypes: {
    description: { table: { disable: false } },
    disabled: { table: { disable: false } },
  },
} satisfies Story;

export const WithLongText = {
  name: 'With Long Text (A2)',
  args: {
    ...defaultArgs,
    children:
      'Får ekstra lang reisevei til jobb på grunn av levering til barnehage eller skolefritidsordning eller annen fritidsordning',
  },
  argTypes: {
    children: { table: { disable: false } },
  },
  globals: {
    viewport: {
      value: '--breakpoint-xs',
    },
  },
} satisfies Story;

export const WithLongTextAndBreaking = {
  name: 'With Long Text And Breaking (A2)',
  args: {
    ...defaultArgs,
    children:
      'Fårekstrareiseveitiljobbpågrunnavleveringtilbarnehageellerskolefritidsordning',
  },
  argTypes: {
    children: { table: { disable: false } },
  },
  globals: {
    viewport: {
      value: '--breakpoint-xs',
    },
  },
} satisfies Story;

export const WithHideLabel = {
  name: 'With HideLabel (A2)',
  args: {
    ...defaultArgs,
    hideLabel: true,
  },
  argTypes: {
    hideLabel: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputNode = canvas.getByLabelText(defaultLabelText);
    await expect(inputNode).toBeInTheDocument();
  },
} satisfies Story;

export const WithChecked = {
  name: 'With Checked (A1, A3)',
  args: {
    ...defaultArgs,
    checked: true,
  },
  argTypes: {
    checked: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { pseudoStates: ['hover', 'focus-visible', 'active'] },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputNode = canvas.getByRole('checkbox');
    await expect(inputNode).toBeChecked();
    await expect(inputNode).toHaveAttribute('aria-invalid', 'false');
  },
} satisfies Story;

export const WithDisabled = {
  name: 'With Disabled (A1, A5 delvis, B2)',
  args: {
    ...defaultArgs,
    disabled: true,
  },
  argTypes: {
    disabled: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { pseudoStates: ['hover', 'focus-visible', 'active'] },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputNode = canvas.getByRole('checkbox');
    await expect(inputNode).toBeDisabled();
  },
} satisfies Story;

export const WithDisabledAndChecked = {
  name: 'With Disabled And Checked (A1, A5 delvis, B2)',
  args: {
    ...defaultArgs,
    checked: true,
    disabled: true,
  },
  argTypes: {
    checked: { table: { disable: false } },
    disabled: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { pseudoStates: ['hover', 'focus-visible', 'active'] },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputNode = canvas.getByRole('checkbox');
    await expect(inputNode).toBeChecked();
    await expect(inputNode).toBeDisabled();
  },
} satisfies Story;

export const WithRequired = {
  name: 'With Required (B3)',
  args: {
    ...defaultArgs,
    required: true,
  },
  argTypes: {
    required: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputNode = canvas.getByRole('checkbox');
    await expect(inputNode).toBeRequired();
  },
} satisfies Story;

export const WithRequiredAndMark = {
  name: 'With Required And Mark (A1, B3)',
  args: {
    ...defaultArgs,
    required: true,
    showRequiredMark: true,
  },
  argTypes: {
    required: { table: { disable: false } },
    showRequiredMark: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputNode = canvas.getByRole('checkbox');
    await expect(inputNode).toBeRequired();
  },
} satisfies Story;

export const WithRequiredAndChecked = {
  name: 'With Required And Checked (B3)',
  args: {
    ...defaultArgs,
    checked: true,
    required: true,
  },
  argTypes: {
    checked: { table: { disable: false } },
    required: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputNode = canvas.getByRole('checkbox');
    await expect(inputNode).toBeChecked();
    await expect(inputNode).toBeRequired();
  },
} satisfies Story;

export const WithError = {
  name: 'With ErrorMessage (A1, B4)',
  args: {
    ...defaultArgs,
    errorMessage: defaultErrorMessage,
  },
  argTypes: {
    errorMessage: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { pseudoStates: ['hover', 'focus-visible', 'active'] },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const errorMessageNode = canvas.getAllByRole('generic')[6];
    await expect(errorMessageNode).toHaveAttribute('id');
    const inputNode = canvas.getByRole('checkbox', {
      description: defaultErrorMessage,
    });
    await expect(inputNode).toHaveAttribute('aria-invalid', 'true');
  },
} satisfies Story;

export const WithDisabledAndRequired = {
  name: 'With Disabled And Required (A1)',
  args: {
    ...defaultArgs,
    disabled: true,
    required: true,
    showRequiredMark: true,
  },
  argTypes: {
    disabled: { table: { disable: false } },
    required: { table: { disable: false } },
    showRequiredMark: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputNode = canvas.getByRole('checkbox');
    await expect(inputNode).toBeDisabled();
    await expect(inputNode).toBeRequired();
  },
} satisfies Story;

export const WithErrorAndRequired = {
  name: 'With Error And Required (A1)',
  args: {
    ...defaultArgs,
    errorMessage: 'Feilmelding',
    required: true,
    showRequiredMark: true,
  },
  argTypes: {
    errorMessage: { table: { disable: false } },
    required: { table: { disable: false } },
    showRequiredMark: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { pseudoStates: ['hover', 'focus-visible', 'active'] },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputNode = canvas.getByRole('checkbox');
    await expect(inputNode).toHaveAttribute('aria-invalid', 'true');
    await expect(inputNode).toBeRequired();
  },
} satisfies Story;

export const WithAriaDescribedby = {
  name: 'With AriaDescribedby (B1)',
  args: {
    ...defaultArgs,
    ariaDescribedby: 'testID',
  },
  argTypes: {
    ariaDescribedby: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputNode = canvas.getByRole('checkbox');
    await expect(inputNode).toHaveAttribute('aria-describedby');
    await expect(inputNode).toHaveAttribute(
      'aria-describedby',
      expect.stringMatching('testID')
    );
  },
} satisfies Story;

export const WithValue = {
  name: 'With Value',
  args: {
    ...defaultArgs,
    value: 'test_value_checkbox',
  },
  argTypes: {
    value: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: verifyAttribute('value', 'test_value_checkbox'),
} satisfies Story;

export const WithDefaultChecked = {
  name: 'With DefaultChecked',
  args: {
    ...defaultArgs,
    defaultChecked: true,
  },
  argTypes: {
    defaultChecked: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputNode = canvas.getByRole('checkbox');
    await expect(inputNode).toBeChecked();
  },
} satisfies Story;

export const WithName = {
  name: 'With Name',
  args: {
    ...defaultArgs,
    name: 'test_name_checkbox',
  },
  argTypes: {
    name: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: verifyAttribute('name', 'test_name_checkbox'),
} satisfies Story;

const EventHandlersTemplate: StoryFn<typeof Checkbox> = (args) => {
  const [labelText, setLabelText] = useState('Checkbox');
  return (
    <Checkbox
      {...args}
      onBlur={(event: FocusEvent<HTMLInputElement>): void => {
        setLabelText('Checkbox har mistet fokus');
        args.onBlur && args.onBlur(event);
      }}
      onChange={(event: ChangeEvent<HTMLInputElement>): void => {
        setLabelText('Checkbox har blitt klikket på');
        args.onChange && args.onChange(event);
      }}
      onFocus={(event: FocusEvent<HTMLInputElement>): void => {
        setLabelText('Checkbox har fått fokus');
        args.onFocus && args.onFocus(event);
      }}
    >
      {labelText}
    </Checkbox>
  );
};

export const WithEventHandlers = {
  render: EventHandlersTemplate,
  name: 'With EventHandlers',
  args: {
    ...defaultArgs,
    onBlur: fn(),
    onChange: fn(),
    onFocus: fn(),
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ args, canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputNode = canvas.getByRole('checkbox');
    await userEvent.click(inputNode);
    await waitFor(() => expect(args.onChange).toHaveBeenCalled());
    inputNode.focus();
    await expect(inputNode).toHaveFocus();
    inputNode.blur();
    await expect(inputNode).not.toHaveFocus();
  },
} satisfies Story;

export const WithCustomClassNames = {
  name: 'With Custom ClassNames (FA3)',
  args: {
    ...defaultArgs,
    classNames: {
      label: 'dummyClassname',
      errorMessage: 'dummyClassname',
    },
    errorMessage: defaultErrorMessage,
  },
  argTypes: {
    classNames: {
      table: { disable: false },
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const label = canvas.getByText(defaultLabelText);
    const errorMessageContainer = canvasElement.querySelector(
      '[id^=checkboxErrorId]>div'
    );
    await expect(label?.parentElement?.parentElement).toHaveClass(
      'dummyClassname'
    );
    await expect(errorMessageContainer).toHaveClass('dummyClassname');
  },
} satisfies Story;
