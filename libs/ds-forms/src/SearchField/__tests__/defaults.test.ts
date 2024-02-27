import {
  getSearchFieldHasSearchButtonIconDefault,
  getSearchFieldHideLabelDefault,
} from '../defaults';

describe('SearchField defaults', () => {
  it('Når getSearchFieldHasSearchButtonIconDefault kalles, så returnerer den riktig verdi', () => {
    expect(getSearchFieldHasSearchButtonIconDefault()).toBe(true);
  });

  it('Når kalles getSearchFieldHideLabelDefault, så returnerer den riktig verdi', () => {
    expect(getSearchFieldHideLabelDefault()).toBe(true);
  });
});
