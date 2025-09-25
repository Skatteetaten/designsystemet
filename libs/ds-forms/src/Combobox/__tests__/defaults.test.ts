import {
  getComboboxPlaceholderDefault,
  getComboboxLoadingMessageDefault,
} from '../defaults';

describe('defaults', () => {
  it('Når getComboboxPlaceholderDefault kalles, så returnerer den riktig verdi', () => {
    expect(getComboboxPlaceholderDefault()).toBe('Skriv eller velg');
  });

  it('Når getComboboxLoadingMessageDefault kalles, så returnerer den riktig verdi', () => {
    expect(getComboboxLoadingMessageDefault()).toBe('Laster');
  });
});
