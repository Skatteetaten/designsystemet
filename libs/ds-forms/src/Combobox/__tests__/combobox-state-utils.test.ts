import { describe, expect, it } from 'vitest';

import type { ComboboxState } from '../combobox-state-utils';
import {
  getEnabledIndices,
  getFirstEnabledIndex,
  getNextEnabledIndex,
  getOptionState,
  getPreviousEnabledIndex,
  isIndexEnabled,
  isOptionDisabled,
  isOptionSelected,
} from '../combobox-state-utils';
import type { ComboboxOption } from '../Combobox.types';

const mockOptions: ComboboxOption[] = [
  { label: 'Første alternativ', value: '1' },
  { label: 'Andre alternativ', value: '2' },
  { label: 'Tredje alternativ', value: '3' },
  { label: 'Fjerde alternativ', value: '4' },
  { label: 'Femte alternativ', value: '5' },
];

const mockState: ComboboxState = {
  options: mockOptions,
  selectedValues: [mockOptions[1]],
  multiple: false,
};

const mockMultiState: ComboboxState = {
  options: mockOptions,
  selectedValues: [mockOptions[0], mockOptions[2]],
  multiple: true,
  maxSelected: 3,
};

describe('isOptionSelected', () => {
  it('returnerer true når option er valgt', () => {
    const result = isOptionSelected(mockOptions[1], [mockOptions[1]]);
    expect(result).toBe(true);
  });

  it('returnerer false når option ikke er valgt', () => {
    const result = isOptionSelected(mockOptions[0], [mockOptions[1]]);
    expect(result).toBe(false);
  });

  it('returnerer true når option er valgt blant flere', () => {
    const result = isOptionSelected(mockOptions[1], [
      mockOptions[0],
      mockOptions[1],
      mockOptions[2],
    ]);
    expect(result).toBe(true);
  });

  it('returnerer false når selectedValues er tom', () => {
    const result = isOptionSelected(mockOptions[0], []);
    expect(result).toBe(false);
  });

  it('sammenligner basert på value-egenskap', () => {
    const sameValueOption = { label: 'Annen label', value: '1' };
    const result = isOptionSelected(sameValueOption, [mockOptions[0]]);
    expect(result).toBe(true);
  });
});

describe('isOptionDisabled', () => {
  it('returnerer false for single-select mode', () => {
    const result = isOptionDisabled(mockOptions[0], mockState);
    expect(result).toBe(false);
  });

  it('returnerer false når multiple er true men maxSelected ikke er satt', () => {
    const state = { ...mockMultiState, maxSelected: undefined };
    const result = isOptionDisabled(mockOptions[3], state);
    expect(result).toBe(false);
  });

  it('returnerer false når allerede valgt option sjekkes', () => {
    const result = isOptionDisabled(mockOptions[0], mockMultiState);
    expect(result).toBe(false);
  });

  it('returnerer false når max limit ikke er nådd', () => {
    const state = {
      ...mockMultiState,
      selectedValues: [mockOptions[0]],
    };
    const result = isOptionDisabled(mockOptions[1], state);
    expect(result).toBe(false);
  });

  it('returnerer true når max limit er nådd og option ikke er valgt', () => {
    const state = {
      ...mockMultiState,
      selectedValues: [mockOptions[0], mockOptions[1], mockOptions[2]],
    };
    const result = isOptionDisabled(mockOptions[3], state);
    expect(result).toBe(true);
  });

  it('returnerer false når max limit er nådd men option er allerede valgt', () => {
    const state = {
      ...mockMultiState,
      selectedValues: [mockOptions[0], mockOptions[1], mockOptions[2]],
    };
    const result = isOptionDisabled(mockOptions[1], state);
    expect(result).toBe(false);
  });
});

describe('getOptionState', () => {
  it('returnerer korrekt state for valgt option', () => {
    const result = getOptionState(mockOptions[1], mockState);
    expect(result).toEqual({
      isSelected: true,
      isDisabled: false,
      isFocusable: true,
    });
  });

  it('returnerer korrekt state for ikke-valgt option', () => {
    const result = getOptionState(mockOptions[0], mockState);
    expect(result).toEqual({
      isSelected: false,
      isDisabled: false,
      isFocusable: true,
    });
  });

  it('returnerer korrekt state for disabled option', () => {
    const state = {
      ...mockMultiState,
      selectedValues: [mockOptions[0], mockOptions[1], mockOptions[2]],
    };
    const result = getOptionState(mockOptions[3], state);
    expect(result).toEqual({
      isSelected: false,
      isDisabled: true,
      isFocusable: false,
    });
  });

  it('returnerer korrekt state for valgt option når max limit er nådd', () => {
    const state = {
      ...mockMultiState,
      selectedValues: [mockOptions[0], mockOptions[1], mockOptions[2]],
    };
    const result = getOptionState(mockOptions[1], state);
    expect(result).toEqual({
      isSelected: true,
      isDisabled: false,
      isFocusable: true,
    });
  });
});

describe('getEnabledIndices', () => {
  it('returnerer alle indekser når ingen options er disabled', () => {
    const result = getEnabledIndices(mockState);
    expect(result).toEqual([0, 1, 2, 3, 4]);
  });

  it('filtrerer bort disabled options', () => {
    const state = {
      ...mockMultiState,
      selectedValues: [mockOptions[0], mockOptions[1], mockOptions[2]],
    };
    const result = getEnabledIndices(state);
    expect(result).toEqual([0, 1, 2]);
  });

  it('returnerer alle indekser når maxSelected er 0 (ingen limit)', () => {
    const state = {
      ...mockMultiState,
      selectedValues: [mockOptions[0], mockOptions[1], mockOptions[2]],
      maxSelected: 0,
    };
    const result = getEnabledIndices(state);
    expect(result).toEqual([0, 1, 2, 3, 4]);
  });

  it('returnerer tom array når options er tom', () => {
    const state = { ...mockState, options: [] };
    const result = getEnabledIndices(state);
    expect(result).toEqual([]);
  });
});

describe('getNextEnabledIndex', () => {
  const enabledIndices = [0, 2, 4];

  it('returnerer -1 når enabledIndices er tom', () => {
    const result = getNextEnabledIndex(0, []);
    expect(result).toBe(-1);
  });

  it('returnerer første enabled index når currentIndex ikke er i listen', () => {
    const result = getNextEnabledIndex(1, enabledIndices);
    expect(result).toBe(0);
  });

  it('returnerer neste enabled index', () => {
    const result = getNextEnabledIndex(0, enabledIndices);
    expect(result).toBe(2);
  });

  it('wrapper rundt til start når på siste index', () => {
    const result = getNextEnabledIndex(4, enabledIndices);
    expect(result).toBe(0);
  });

  it('håndterer single enabled index', () => {
    const result = getNextEnabledIndex(1, [1]);
    expect(result).toBe(1);
  });
});

describe('getPreviousEnabledIndex', () => {
  const enabledIndices = [0, 2, 4];

  it('returnerer -1 når enabledIndices er tom', () => {
    const result = getPreviousEnabledIndex(0, []);
    expect(result).toBe(-1);
  });

  it('returnerer siste enabled index når currentIndex ikke er i listen', () => {
    const result = getPreviousEnabledIndex(1, enabledIndices);
    expect(result).toBe(4);
  });

  it('returnerer forrige enabled index', () => {
    const result = getPreviousEnabledIndex(2, enabledIndices);
    expect(result).toBe(0);
  });

  it('wrapper rundt til slutt når på første index', () => {
    const result = getPreviousEnabledIndex(0, enabledIndices);
    expect(result).toBe(4);
  });

  it('håndterer single enabled index', () => {
    const result = getPreviousEnabledIndex(1, [1]);
    expect(result).toBe(1);
  });
});

describe('getFirstEnabledIndex', () => {
  it('returnerer første index når enabledIndices har verdier', () => {
    const result = getFirstEnabledIndex([1, 3, 5]);
    expect(result).toBe(1);
  });

  it('returnerer -1 når enabledIndices er tom', () => {
    const result = getFirstEnabledIndex([]);
    expect(result).toBe(-1);
  });

  it('returnerer korrekt index for single element', () => {
    const result = getFirstEnabledIndex([7]);
    expect(result).toBe(7);
  });
});

describe('isIndexEnabled', () => {
  const enabledIndices = [0, 2, 4, 6];

  it('returnerer true når index er i enabledIndices', () => {
    const result = isIndexEnabled(2, enabledIndices);
    expect(result).toBe(true);
  });

  it('returnerer false når index ikke er i enabledIndices', () => {
    const result = isIndexEnabled(1, enabledIndices);
    expect(result).toBe(false);
  });

  it('returnerer false når enabledIndices er tom', () => {
    const result = isIndexEnabled(0, []);
    expect(result).toBe(false);
  });

  it('returnerer true for første index', () => {
    const result = isIndexEnabled(0, enabledIndices);
    expect(result).toBe(true);
  });

  it('returnerer true for siste index', () => {
    const result = isIndexEnabled(6, enabledIndices);
    expect(result).toBe(true);
  });

  it('håndterer negative indekser', () => {
    const result = isIndexEnabled(-1, enabledIndices);
    expect(result).toBe(false);
  });
});
