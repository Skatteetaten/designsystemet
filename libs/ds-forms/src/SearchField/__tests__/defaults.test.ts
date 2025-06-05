import {
  getSearchFieldHasSearchButtonIconDefault,
  getSearchFieldHideLabelDefault,
  getEnableSRNavigationHintDefault,
} from '../defaults';

describe('SearchField defaults', () => {
  it('Når getSearchFieldHasSearchButtonIconDefault kalles, så returnerer den riktig verdi', () => {
    expect(getSearchFieldHasSearchButtonIconDefault()).toBe(true);
  });

  it('Når kalles getSearchFieldHideLabelDefault, så returnerer den riktig verdi', () => {
    expect(getSearchFieldHideLabelDefault()).toBe(true);
  });

  it('Når getEnableSRNavigationHintDefault kalles, så returnerer den riktig verdi', () => {
    expect(getEnableSRNavigationHintDefault()).toBe(true);
  });
});
