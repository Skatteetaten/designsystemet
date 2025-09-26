import { vi } from 'vitest';

import type { ComboboxOption } from '../../Combobox.types';
import type { UseComboboxKeyboardProps } from '../useComboboxKeyboard';

export interface MockKeyboardEventOptions {
  altKey?: boolean;
  preventDefault?: ReturnType<typeof vi.fn>;
}

export const createMockKeyboardEvent = (
  key: string,
  options: MockKeyboardEventOptions = {}
): KeyboardEvent => {
  const preventDefault = options.preventDefault ?? vi.fn();

  return {
    key,
    altKey: options.altKey || false,
    preventDefault,
  } as unknown as KeyboardEvent;
};

export const createMockInputElement = (value = ''): HTMLInputElement => {
  return {
    value,
    focus: vi.fn(),
    blur: vi.fn(),
  } as unknown as HTMLInputElement;
};

export const createMockProps = (
  overrides: Partial<UseComboboxKeyboardProps> = {}
): UseComboboxKeyboardProps => {
  // If inputRef is provided in overrides, use it; otherwise create a default
  const inputValue = overrides.inputRef?.current?.value ?? 'search'; // Default value to pass minSearchLength
  const mockInput =
    overrides.inputRef?.current ?? createMockInputElement(inputValue);

  const defaultOptions = [
    { value: 'albania', label: 'Albania' },
    { value: 'belgium', label: 'Belgium' },
    { value: 'denmark', label: 'Denmark' },
  ];

  return {
    isOpen: false,
    allOptions: defaultOptions,
    displayOptions: [], // Default empty - tests should set explicitly
    enabledIndices: [0, 1, 2], // All options enabled by default
    focusedIndex: -1,
    setFocusedIndex: vi.fn(),
    openDropdown: vi.fn(),
    closeDropdown: vi.fn(),
    setSearchTerm: vi.fn(),
    inputRef: overrides.inputRef ?? { current: mockInput },
    minSearchLength: 0,
    onSelectionChange: vi.fn(),
    multiple: false,
    selectedValues: [],
    onRemoveLastValue: vi.fn(),
    onOptionSelect: vi.fn(),
    ...overrides,
  };
};

export const mockOptions: ComboboxOption[] = [
  { value: 'albania', label: 'Albania' },
  { value: 'belgium', label: 'Belgium' },
  { value: 'denmark', label: 'Denmark' },
];

export const setupKeyboardTest = (
  props?: Partial<UseComboboxKeyboardProps>
): {
  mockProps: UseComboboxKeyboardProps;
  mockAddEventListener: ReturnType<typeof vi.fn>;
  mockRemoveEventListener: ReturnType<typeof vi.fn>;
} => {
  // Use the existing input element if provided, otherwise create a new one
  const mockInputElement =
    props?.inputRef?.current ?? createMockInputElement('search');

  // Ensure the same mock input element is used in props
  const propsWithConsistentInput = {
    ...props,
    inputRef: { current: mockInputElement },
  };

  // Create props with overrides applied, ensuring consistent input reference
  const mockProps = createMockProps(propsWithConsistentInput);

  // Mock addEventListener/removeEventListener
  const mockAddEventListener = vi.fn();
  const mockRemoveEventListener = vi.fn();

  Object.defineProperty(document, 'addEventListener', {
    writable: true,
    value: mockAddEventListener,
  });

  Object.defineProperty(document, 'removeEventListener', {
    writable: true,
    value: mockRemoveEventListener,
  });

  // Mock document.activeElement to be the same input element reference
  Object.defineProperty(document, 'activeElement', {
    writable: true,
    value: mockInputElement,
  });

  return {
    mockProps,
    mockAddEventListener,
    mockRemoveEventListener,
  };
};

export const simulateKeyboardEvent = (
  eventHandler: (e: KeyboardEvent) => void,
  key: string,
  options?: MockKeyboardEventOptions
): KeyboardEvent => {
  const mockEvent = createMockKeyboardEvent(key, options);
  eventHandler(mockEvent);
  return mockEvent;
};

export const getKeydownHandler = (
  mockAddEventListener: ReturnType<typeof vi.fn>
): ((e: KeyboardEvent) => void) => {
  // Find the keydown event listener (not the React Testing Library selectionchange listener)
  const keydownCall = mockAddEventListener.mock.calls.find(
    (call: any) => call[0] === 'keydown'
  );
  if (!keydownCall) {
    throw new Error('No keydown event listener found');
  }
  return keydownCall[1];
};
