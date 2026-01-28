import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';

import { useFormattedInput } from '@skatteetaten/ds-core-utils';
import { formatNBS } from '@skatteetaten/ds-core-utils';
import { TextField } from '@skatteetaten/ds-forms';

const meta = {
  title: 'Tester/useFormattedInput',
  tags: ['test'],
  parameters: {
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
  locale,
}: {
  type:
    | 'nationalIdentityNumber'
    | 'organisationNumber'
    | 'bankAccountNumber'
    | 'phoneNumber'
    | 'number';
  initialValue?: string;
  label: string;
  locale?: string;
}): JSX.Element => {
  const formatter = useFormattedInput({
    type,
    initialValue,
    locale,
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
    await expect(textbox).toHaveValue(formatNBS('12 34 56 78'));

    // Test typing additional numbers
    textbox.focus();
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '87654321');
    await expect(textbox).toHaveValue(formatNBS('87 65 43 21'));
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
    await expect(textbox).toHaveValue(formatNBS('974 761 076'));

    // Test typing new number
    textbox.focus();
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '123456789');
    await expect(textbox).toHaveValue(formatNBS('123 456 789'));
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
    await expect(textbox).toHaveValue(formatNBS('263015 18292'));

    // Test typing new number
    textbox.focus();
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '12345612345');
    await expect(textbox).toHaveValue(formatNBS('123456 12345'));
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
    await expect(textbox).toHaveValue(formatNBS('7694 05 24802'));

    // Test typing new number
    textbox.focus();
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '12341212345');
    await expect(textbox).toHaveValue(formatNBS('1234 12 12345'));
  },
} satisfies Story;

export const MaxLengthValidation = {
  name: 'Max Length Validation',
  render: (): JSX.Element => (
    <TestFormattedInput
      type={'phoneNumber'}
      label={'Telefonnummer (max 10 digits)'}
    />
  ),
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;

    textbox.focus();
    // Try to type more than 10 digits
    await userEvent.type(textbox, '123456789012345');

    // Should only show first 10 digits formatted
    await expect(textbox).toHaveValue(formatNBS('12 34 56 78 90'));

    // Try to type another digit - should be prevented
    await userEvent.type(textbox, '1');
    await expect(textbox).toHaveValue(formatNBS('12 34 56 78 90')); // Should remain unchanged
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
    await expect(textbox).toHaveValue(formatNBS('123 456 789'));

    // Position cursor after first separator (after "123 ")
    textbox.setSelectionRange(4, 4);

    // Press backspace - should delete the "3" before the separator
    await userEvent.keyboard('{Backspace}');
    await expect(textbox).toHaveValue(formatNBS('124 567 89'));
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
    await expect(textbox).toHaveValue(formatNBS('123 456 789'));

    // Position cursor before first separator (after "123")
    textbox.setSelectionRange(3, 3);

    // Press delete - should delete the "4" after the separator
    await userEvent.keyboard('{Delete}');
    await expect(textbox).toHaveValue(formatNBS('123 567 89'));
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
    await expect(textbox).toHaveValue(formatNBS('12 34 56 78'));
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
    await expect(textbox).toHaveValue(formatNBS('123 456 789'));
    // Raw value should be just digits
    await expect(rawValueDisplay).toHaveTextContent('Raw: 123456789');

    textbox.focus();
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '987654321');

    await expect(textbox).toHaveValue(formatNBS('987 654 321'));
    await waitFor(() => {
      expect(rawValueDisplay).toHaveTextContent('Raw: 987654321');
    });
  },
} satisfies Story;

export const UndoRedoMultipleSteps = {
  name: 'Undo/Redo - Multiple Steps',
  render: (): JSX.Element => (
    <TestFormattedInput
      type={'organisationNumber'}
      label={'Test Multiple Undo/Redo'}
    />
  ),
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;

    textbox.focus();

    // Step 1: Type "123"
    await userEvent.type(textbox, '123');
    await expect(textbox).toHaveValue(formatNBS('123'));

    // Step 2: Type "456"
    await userEvent.type(textbox, '456');
    await expect(textbox).toHaveValue(formatNBS('123 456'));

    // Step 3: Type "789"
    await userEvent.type(textbox, '789');
    await expect(textbox).toHaveValue(formatNBS('123 456 789'));

    // Undo Step 3
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('123 456'));
    await waitFor(() => {
      expect(textbox.selectionStart).toBe(7);
    });

    // Undo Step 2
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('123'));
    await waitFor(() => {
      expect(textbox.selectionStart).toBe(3);
    });

    // Undo Step 1
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await expect(textbox).toHaveValue('');
    await waitFor(() => {
      expect(textbox.selectionStart).toBe(0);
    });

    // Redo Step 1
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('123'));

    // Redo Step 2
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('123 456'));

    // Redo Step 3
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('123 456 789'));
  },
} satisfies Story;

export const UndoRedoWithBackspace = {
  name: 'Undo/Redo - With Backspace',
  render: (): JSX.Element => (
    <TestFormattedInput
      type={'nationalIdentityNumber'}
      initialValue={'12345678901'}
      label={'Test Undo/Redo with Backspace'}
    />
  ),
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;

    textbox.focus();
    await expect(textbox).toHaveValue(formatNBS('123456 78901'));

    // Move cursor to end and backspace a few times
    textbox.setSelectionRange(12, 12); // End of input
    await userEvent.keyboard('{Backspace}');
    await expect(textbox).toHaveValue(formatNBS('123456 7890'));

    await userEvent.keyboard('{Backspace}');
    await expect(textbox).toHaveValue(formatNBS('123456 789'));

    // Undo the backspaces
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('123456 7890'));
    await waitFor(() => {
      expect(textbox.selectionStart).toBe(11);
    });

    await userEvent.keyboard('{Meta>}z{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('123456 78901'));
    await waitFor(() => {
      expect(textbox.selectionStart).toBe(12);
    });

    // Redo the backspaces
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('123456 7890'));

    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('123456 789'));
  },
} satisfies Story;

export const UndoRedoWithDelete = {
  name: 'Undo/Redo - With Delete Key',
  render: (): JSX.Element => (
    <TestFormattedInput
      type={'bankAccountNumber'}
      initialValue={'12345678901'}
      label={'Test Undo/Redo with Delete'}
    />
  ),
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;

    textbox.focus();
    await expect(textbox).toHaveValue(formatNBS('1234 56 78901'));

    // Move cursor to position after "1234 " and delete
    textbox.setSelectionRange(5, 5);
    await userEvent.keyboard('{Delete}');
    await expect(textbox).toHaveValue(formatNBS('1234 67 8901'));

    textbox.setSelectionRange(5, 5);
    await userEvent.keyboard('{Delete}');
    await expect(textbox).toHaveValue(formatNBS('1234 78 901'));

    // Undo the deletes
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('1234 67 8901'));
    await waitFor(() => {
      expect(textbox.selectionStart).toBe(5);
    });

    await userEvent.keyboard('{Meta>}z{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('1234 56 78901'));
    await waitFor(() => {
      expect(textbox.selectionStart).toBe(5);
    });

    // Redo the deletes
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('1234 67 8901'));

    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('1234 78 901'));
  },
} satisfies Story;

export const UndoRedoNewTypingClearsFuture = {
  name: 'Undo/Redo - New Typing Clears Future',
  render: (): JSX.Element => (
    <TestFormattedInput
      type={'organisationNumber'}
      label={'Test Undo then Type'}
    />
  ),
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;

    textbox.focus();

    // Type "123456"
    await userEvent.type(textbox, '123456');
    await expect(textbox).toHaveValue(formatNBS('123 456'));

    // Type "789"
    await userEvent.type(textbox, '789');
    await expect(textbox).toHaveValue(formatNBS('123 456 789'));

    // Undo once
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('123 456 78'));

    // Type new content - this should clear the redo history
    await userEvent.type(textbox, '1');
    await expect(textbox).toHaveValue(formatNBS('123 456 781'));

    // Try to redo - should not change anything because history was cleared
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('123 456 781'));
  },
} satisfies Story;

export const UndoRedoAlternativeKeys = {
  name: 'Undo/Redo - Alternative Keyboard Shortcuts',
  render: (): JSX.Element => (
    <TestFormattedInput
      type={'phoneNumber'}
      label={'Test Alternative Undo/Redo Keys'}
    />
  ),
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;

    textbox.focus();

    // Type some content
    await userEvent.type(textbox, '12345678');
    await expect(textbox).toHaveValue(formatNBS('12 34 56 78'));

    // Undo with Ctrl+Z (alternative to Cmd+Z)
    await userEvent.keyboard('{Control>}z{/Control}');
    await expect(textbox).toHaveValue(formatNBS('12 34 56 7'));

    // Redo with Ctrl+Y (alternative redo shortcut)
    await userEvent.keyboard('{Control>}y{/Control}');
    await expect(textbox).toHaveValue(formatNBS('12 34 56 78'));
    await waitFor(() => {
      expect(textbox.selectionStart).toBe(11);
    });
  },
} satisfies Story;

export const UndoRedoWithSeparatorDeletion = {
  name: 'Undo/Redo - Backspace at Separator',
  render: (): JSX.Element => (
    <TestFormattedInput
      type={'organisationNumber'}
      initialValue={'123456789'}
      label={'Test Undo/Redo with Separator'}
    />
  ),
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;

    textbox.focus();
    // Initial value: "123 456 789"
    await expect(textbox).toHaveValue(formatNBS('123 456 789'));

    // Position cursor after first separator (after "123 ")
    textbox.setSelectionRange(4, 4);

    // Press backspace - should delete the "3" before the separator
    await userEvent.keyboard('{Backspace}');
    await expect(textbox).toHaveValue(formatNBS('124 567 89'));

    // Verify cursor position
    await waitFor(() => {
      expect(textbox.selectionStart).toBe(2);
    });

    // Undo the backspace
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('123 456 789'));
    await waitFor(() => {
      expect(textbox.selectionStart).toBe(4);
      expect(textbox.selectionEnd).toBe(4);
    });

    // Redo the backspace
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('124 567 89'));
    await waitFor(() => {
      expect(textbox.selectionStart).toBe(2);
      expect(textbox.selectionEnd).toBe(2);
    });
  },
} satisfies Story;

export const UndoRedoEmptyHistory = {
  name: 'Undo/Redo - Empty History Edge Case',
  render: (): JSX.Element => (
    <TestFormattedInput
      type={'organisationNumber'}
      label={'Test Empty History'}
    />
  ),
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;

    textbox.focus();

    // Try to undo when there's nothing to undo
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await expect(textbox).toHaveValue('');

    // Try to redo when there's nothing to redo
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await expect(textbox).toHaveValue('');

    // Type something
    await userEvent.type(textbox, '123');
    await expect(textbox).toHaveValue(formatNBS('123'));

    // Try to redo when at the end of history
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('123'));

    // Undo to empty
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await expect(textbox).toHaveValue('');

    // Try to undo past the beginning
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await expect(textbox).toHaveValue('');
  },
} satisfies Story;

// Test component for number type that displays rawValue and numberValue
const TestNumberInput = ({
  initialValue,
  label,
  locale,
}: {
  initialValue?: string;
  label: string;
  locale?: string;
}): JSX.Element => {
  const formatter = useFormattedInput({
    type: 'number',
    initialValue,
    locale,
    allowDecimals: true,
  });

  return (
    <>
      <TextField
        label={label}
        value={formatter.value}
        data-testid={'formatted-input-number'}
        onChange={formatter.onChange}
        onKeyDown={formatter.onKeyDown}
      />
      <div data-testid={'raw-value'}>
        {'Raw: '}
        {formatter.rawValue}
      </div>
      <div data-testid={'number-value'}>
        {'Number: '}
        {formatter.numberValue}
      </div>
    </>
  );
};

export const NumberFormatting = {
  name: 'Number - Basic Formatting',
  render: (): JSX.Element => (
    <TestNumberInput initialValue={'1234567'} label={'Tall'} />
  ),
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;

    // Skal formatere med tusen-skilletegn (non-breaking space i nb-NO)
    await expect(textbox).toHaveValue(formatNBS('1 234 567'));

    // Test typing
    textbox.focus();
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '9876543');
    await expect(textbox).toHaveValue(formatNBS('9 876 543'));
  },
} satisfies Story;

export const NumberWithDecimal = {
  name: 'Number - Decimal Input',
  render: (): JSX.Element => (
    <TestNumberInput initialValue={'1234,56'} label={'Tall med desimaler'} />
  ),
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;

    // Skal vise med desimalkomma (nb-NO)
    await expect(textbox).toHaveValue(formatNBS('1 234,56'));

    // Skriv ny verdi med desimaler
    textbox.focus();
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '9999,99');
    await expect(textbox).toHaveValue(formatNBS('9 999,99'));
  },
} satisfies Story;

export const NumberNegativeValue = {
  name: 'Number - Negative Value',
  render: (): JSX.Element => (
    <TestNumberInput initialValue={'-1234'} label={'Negativt tall'} />
  ),
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;

    // Negative tall skal beholde minus-tegn
    await expect(textbox).toHaveValue(formatNBS('-1 234'));

    textbox.focus();
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '-5678,90');
    await expect(textbox).toHaveValue(formatNBS('-5 678,90'));
  },
} satisfies Story;

export const NumberValueExtraction = {
  name: 'Number - Value Extraction',
  render: (): JSX.Element => (
    <TestNumberInput initialValue={'1234,56'} label={'Verdiuttrekking'} />
  ),
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;
    const rawValueDisplay = canvas.getByTestId('raw-value');
    const numberValueDisplay = canvas.getByTestId('number-value');

    await expect(textbox).toHaveValue(formatNBS('1 234,56'));
    // rawValue skal inneholde tall og desimalkomma uten tusen-skilletegn
    await expect(rawValueDisplay).toHaveTextContent('Raw: 1234,56');
    // numberValue skal være et JavaScript-tall
    await expect(numberValueDisplay).toHaveTextContent('Number: 1234.56');

    textbox.focus();
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '9876,54');

    await waitFor(() => {
      expect(rawValueDisplay).toHaveTextContent('Raw: 9876,54');
    });
    await waitFor(() => {
      expect(numberValueDisplay).toHaveTextContent('Number: 9876.54');
    });
  },
} satisfies Story;

export const NumberTypingDecimal = {
  name: 'Number - Typing Decimal Separator',
  render: (): JSX.Element => <TestNumberInput label={'Skriv desimaltall'} />,
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;

    textbox.focus();
    await userEvent.type(textbox, '123,45');
    await expect(textbox).toHaveValue('123,45');

    // Flere desimalkomma skal ignoreres, og max 2 desimaler vises
    await userEvent.type(textbox, ',67');
    await expect(textbox).toHaveValue('123,45');
  },
} satisfies Story;

export const NumberFilterNonNumeric = {
  name: 'Number - Filter Non-Numeric Characters',
  render: (): JSX.Element => (
    <TestNumberInput label={'Filtrer ugyldige tegn'} />
  ),
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;

    textbox.focus();
    // Bokstaver og spesialtegn skal filtreres bort, men desimalkomma og minus beholdes
    await userEvent.type(textbox, 'abc123def,45ghi');
    await expect(textbox).toHaveValue('123,45');
  },
} satisfies Story;

export const NumberBackspaceAtThousandSeparator = {
  name: 'Number - Backspace at Thousand Separator',
  render: (): JSX.Element => (
    <TestNumberInput
      initialValue={'1234567'}
      label={'Backspace ved tusen-skilletegn'}
    />
  ),
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;

    textbox.focus();
    // Formatert: "1 234 567"
    await expect(textbox).toHaveValue(formatNBS('1 234 567'));

    // Plasser markør etter første tusen-skilletegn (etter "1 ")
    textbox.setSelectionRange(2, 2);

    // Backspace skal slette sifferet før skilletegnet
    await userEvent.keyboard('{Backspace}');
    await expect(textbox).toHaveValue(formatNBS('234 567'));
  },
} satisfies Story;

export const NumberDeleteAtThousandSeparator = {
  name: 'Number - Delete at Thousand Separator',
  render: (): JSX.Element => (
    <TestNumberInput
      initialValue={'1234567'}
      label={'Delete ved tusen-skilletegn'}
    />
  ),
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;

    textbox.focus();
    // Formatert: "1 234 567"
    await expect(textbox).toHaveValue(formatNBS('1 234 567'));

    // Plasser markør før første tusen-skilletegn (etter "1")
    textbox.setSelectionRange(1, 1);

    // Delete skal slette sifferet etter skilletegnet
    await userEvent.keyboard('{Delete}');
    await expect(textbox).toHaveValue(formatNBS('134 567'));
  },
} satisfies Story;

export const NumberWithEnglishLocale = {
  name: 'Number - English Locale (en-GB)',
  render: (): JSX.Element => (
    <TestNumberInput
      initialValue={'1234.56'}
      label={'Number with English locale'}
      locale={'en-GB'}
    />
  ),
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;
    const numberValueDisplay = canvas.getByTestId('number-value');

    // en-GB bruker punktum som desimalskilletegn
    await expect(textbox).toHaveValue('1,234.56');
    await expect(numberValueDisplay).toHaveTextContent('Number: 1234.56');

    textbox.focus();
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '9876.54');
    await expect(textbox).toHaveValue('9,876.54');
  },
} satisfies Story;

export const NumberUndoRedo = {
  name: 'Number - Undo/Redo',
  render: (): JSX.Element => <TestNumberInput label={'Angre/Gjenta'} />,
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;

    textbox.focus();

    await userEvent.type(textbox, '1234');
    await expect(textbox).toHaveValue(formatNBS('1 234'));

    await userEvent.type(textbox, ',56');
    await expect(textbox).toHaveValue(formatNBS('1 234,56'));

    // Angre
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await userEvent.keyboard('{Meta>}z{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('1 234'));

    // Gjenta
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await userEvent.keyboard('{Meta>}{Shift>}z{/Shift}{/Meta}');
    await expect(textbox).toHaveValue(formatNBS('1 234,56'));
  },
} satisfies Story;

export const NumberLeadingZeroes = {
  name: 'Number - Leading Zeroes',
  render: (): JSX.Element => <TestNumberInput label={'Ledende nuller'} />,
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;
    const rawValueDisplay = canvas.getByTestId('raw-value');
    const numberValueDisplay = canvas.getByTestId('number-value');

    textbox.focus();

    // Skriv tall med ledende nuller
    await userEvent.type(textbox, '007');
    await expect(textbox).toHaveValue('007');
    await expect(rawValueDisplay).toHaveTextContent('Raw: 007');
    await expect(numberValueDisplay).toHaveTextContent('Number: 7');

    // Skriv flere ledende nuller (med tusenskiller)
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '00123');
    await expect(textbox).toHaveValue(formatNBS('00 123'));
    await expect(rawValueDisplay).toHaveTextContent('Raw: 00123');
    await expect(numberValueDisplay).toHaveTextContent('Number: 123');

    // Ledende nuller med desimaler
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '007,50');
    await expect(textbox).toHaveValue('007,50');
    await expect(rawValueDisplay).toHaveTextContent('Raw: 007,50');
    await expect(numberValueDisplay).toHaveTextContent('Number: 7.5');
  },
} satisfies Story;

export const NumberLeadingZeroesNegative = {
  name: 'Number - Leading Zeroes with Negative',
  render: (): JSX.Element => (
    <TestNumberInput label={'Ledende nuller negativt'} />
  ),
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;
    const rawValueDisplay = canvas.getByTestId('raw-value');
    const numberValueDisplay = canvas.getByTestId('number-value');

    textbox.focus();

    // Negativt tall med ledende nuller
    await userEvent.type(textbox, '-007');
    await expect(textbox).toHaveValue('-007');
    await expect(rawValueDisplay).toHaveTextContent('Raw: -007');
    await expect(numberValueDisplay).toHaveTextContent('Number: -7');

    // Negativt tall med ledende nuller og desimaler (med tusenskiller)
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '-00123,45');
    await expect(textbox).toHaveValue(formatNBS('-00 123,45'));
    await expect(rawValueDisplay).toHaveTextContent('Raw: -00123,45');
    await expect(numberValueDisplay).toHaveTextContent('Number: -123.45');
  },
} satisfies Story;

export const NumberLeadingZeroesDecimalOnly = {
  name: 'Number - Leading Zeroes Decimal Only',
  render: (): JSX.Element => (
    <TestNumberInput label={'Bare desimal med null'} />
  ),
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;
    const rawValueDisplay = canvas.getByTestId('raw-value');
    const numberValueDisplay = canvas.getByTestId('number-value');

    textbox.focus();

    // Skriv kun komma og siffer (skal ikke krasje)
    await userEvent.type(textbox, ',5');
    await expect(textbox).toHaveValue('0,5');
    await expect(rawValueDisplay).toHaveTextContent('Raw: ,5');
    await expect(numberValueDisplay).toHaveTextContent('Number: 0.5');

    // Negativt bare desimal
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '-,5');
    await expect(textbox).toHaveValue('-0,5');
    await expect(rawValueDisplay).toHaveTextContent('Raw: -,5');
    await expect(numberValueDisplay).toHaveTextContent('Number: -0.5');

    // Null før desimal
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '0,99');
    await expect(textbox).toHaveValue('0,99');
    await expect(rawValueDisplay).toHaveTextContent('Raw: 0,99');
    await expect(numberValueDisplay).toHaveTextContent('Number: 0.99');
  },
} satisfies Story;

export const NumberLeadingZeroesWithThousandSeparator = {
  name: 'Number - Leading Zeroes with Thousand Separator',
  render: (): JSX.Element => (
    <TestNumberInput label={'Ledende nuller med tusenskille'} />
  ),
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox') as HTMLInputElement;
    const rawValueDisplay = canvas.getByTestId('raw-value');

    textbox.focus();

    // Store tall med ledende nuller
    await userEvent.type(textbox, '001234567');
    await expect(textbox).toHaveValue(formatNBS('001 234 567'));
    await expect(rawValueDisplay).toHaveTextContent('Raw: 001234567');

    // Ledende nuller bevares selv med tusenskiller
    await userEvent.clear(textbox);
    await userEvent.type(textbox, '000000123');
    await expect(textbox).toHaveValue(formatNBS('000 000 123'));
    await expect(rawValueDisplay).toHaveTextContent('Raw: 000000123');
  },
} satisfies Story;
