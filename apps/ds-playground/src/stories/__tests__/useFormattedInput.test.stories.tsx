import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, waitFor, within } from '@storybook/test';

import { useFormattedInput } from '@skatteetaten/ds-core-utils';
import { TextField } from '@skatteetaten/ds-forms';

const meta = {
  title: 'Tester/useFormattedInput',
  parameters: {
    imageSnapshot: { disable: true },
    controls: {
      disable: true,
    },
    docs: {
      description: {
        component:
          'Tests for the useFormattedInput hook functionality with various formatting types.',
      },
    },
  },
} satisfies Meta<typeof useFormattedInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// Test component that uses the hook
const TestFormattedInput = ({
  type,
  initialValue,
  label,
}: {
  type:
    | 'nationalIdentityNumber'
    | 'organisationNumber'
    | 'bankAccountNumber'
    | 'phoneNumber';
  initialValue?: string;
  label: string;
}): JSX.Element => {
  const formatter = useFormattedInput({
    type,
    initialValue,
  });

  return (
    <TextField
      label={label}
      value={formatter.value}
      data-testid={`formatted-input-${type}`}
      onChange={formatter.onChange}
      onKeyDown={formatter.onKeyDown}
    />
  );
};

export const PhoneNumberFormatting = {
  name: 'Phone Number Formatting',
  render: (): JSX.Element => (
    <TestFormattedInput
      type={'phoneNumber'}
      initialValue={'12345678'}
      label={'Telefonnummer'}
    />
  ),
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;

    // Should format initial value
    await expect(textbox).toHaveValue('12\u00A034\u00A056\u00A078');

    // Test typing additional numbers
    textbox.focus();
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '87654321');
    await expect(textbox).toHaveValue('87\u00A065\u00A043\u00A021');
  },
} satisfies Story;

export const OrganisationNumberFormatting = {
  name: 'Organisation Number Formatting',
  render: (): JSX.Element => (
    <TestFormattedInput
      type={'organisationNumber'}
      initialValue={'974761076'}
      label={'Organisasjonsnummer'}
    />
  ),
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;

    // Should format initial value (974 761 076)
    await expect(textbox).toHaveValue('974\u00A0761\u00A0076');

    // Test typing new number
    textbox.focus();
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '123456789');
    await expect(textbox).toHaveValue('123\u00A0456\u00A0789');
  },
} satisfies Story;

export const NationalIdentityNumberFormatting = {
  name: 'National Identity Number Formatting',
  render: (): JSX.Element => (
    <TestFormattedInput
      type={'nationalIdentityNumber'}
      initialValue={'26301518292'}
      label={'Fødselsnummer'}
    />
  ),
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;

    // Should format initial value (263015 18292)
    await expect(textbox).toHaveValue('263015\u00A018292');

    // Test typing new number
    textbox.focus();
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '12345612345');
    await expect(textbox).toHaveValue('123456\u00A012345');
  },
} satisfies Story;

export const BankAccountNumberFormatting = {
  name: 'Bank Account Number Formatting',
  render: (): JSX.Element => (
    <TestFormattedInput
      type={'bankAccountNumber'}
      initialValue={'76940524802'}
      label={'Kontonummer'}
    />
  ),
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;

    // Should format initial value (7694 05 24802)
    await expect(textbox).toHaveValue('7694\u00A005\u00A024802');

    // Test typing new number
    textbox.focus();
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '12341212345');
    await expect(textbox).toHaveValue('1234\u00A012\u00A012345');
  },
} satisfies Story;

export const MaxLengthValidation = {
  name: 'Max Length Validation',
  render: (): JSX.Element => (
    <TestFormattedInput
      type={'phoneNumber'}
      label={'Telefonnummer (max 8 digits)'}
    />
  ),
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;

    textbox.focus();
    // Try to type more than 10 digits
    await userEvent.type(textbox, '123456789012345');

    // Should only show first 10 digits formatted
    await expect(textbox).toHaveValue('12\u00A034\u00A056\u00A078');

    // Try to type another digit - should be prevented
    await userEvent.type(textbox, '1');
    await expect(textbox).toHaveValue('12\u00A034\u00A056\u00A078'); // Should remain unchanged
  },
} satisfies Story;

export const BackspaceAtSeparator = {
  name: 'Backspace at Separator Behavior',
  render: (): JSX.Element => (
    <TestFormattedInput
      type={'organisationNumber'}
      initialValue={'123456789'}
      label={'Test Backspace'}
    />
  ),
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;

    textbox.focus();
    // Initial value: "123 456 789"
    await expect(textbox).toHaveValue('123\u00A0456\u00A0789');

    // Position cursor after first separator (after "123 ")
    textbox.setSelectionRange(4, 4);

    // Press backspace - should delete the "3" before the separator
    await userEvent.keyboard('{Backspace}');
    await expect(textbox).toHaveValue('124\u00A0567\u00A089');
  },
} satisfies Story;

export const DeleteAtSeparator = {
  name: 'Delete at Separator Behavior',
  render: (): JSX.Element => (
    <TestFormattedInput
      type={'organisationNumber'}
      initialValue={'123456789'}
      label={'Test Delete'}
    />
  ),
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;

    textbox.focus();
    // Initial value: "123 456 789"
    await expect(textbox).toHaveValue('123\u00A0456\u00A0789');

    // Position cursor before first separator (after "123")
    textbox.setSelectionRange(3, 3);

    // Press delete - should delete the "4" after the separator
    await userEvent.keyboard('{Delete}');
    await expect(textbox).toHaveValue('123\u00A0567\u00A089');
  },
} satisfies Story;

export const NonDigitFilteringInput = {
  name: 'Non-Digit Filtering',
  render: (): JSX.Element => (
    <TestFormattedInput
      type={'phoneNumber'}
      label={'Test Non-Digit Filtering'}
    />
  ),
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;

    textbox.focus();
    // Type mixture of digits and non-digits
    await userEvent.type(textbox, '1a2b3c4d5e6f7g8h');

    // Should only show digits, formatted
    await expect(textbox).toHaveValue('12\u00A034\u00A056\u00A078');
  },
} satisfies Story;

export const RawValueExtraction = {
  name: 'Raw Value Extraction',
  render: (): JSX.Element => {
    const formatter = useFormattedInput({
      type: 'organisationNumber',
      initialValue: '123456789',
    });

    return (
      <>
        <TextField
          label={'Organisasjonsnummer'}
          value={formatter.value}
          onChange={formatter.onChange}
          onKeyDown={formatter.onKeyDown}
        />
        <div data-testid={'raw-value'}>
          {'Raw: '}
          {formatter.rawValue}
        </div>
      </>
    );
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;
    const rawValueDisplay = canvas.getByTestId('raw-value');

    // Initial formatted value should be "123 456 789"
    await expect(textbox).toHaveValue('123\u00A0456\u00A0789');
    // Raw value should be just digits
    await expect(rawValueDisplay).toHaveTextContent('Raw: 123456789');

    textbox.focus();
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '987654321');

    await expect(textbox).toHaveValue('987\u00A0654\u00A0321');
    await waitFor(() => {
      expect(rawValueDisplay).toHaveTextContent('Raw: 987654321');
    });
  },
} satisfies Story;
