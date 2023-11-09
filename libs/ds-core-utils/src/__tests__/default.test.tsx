import {
  getCommonButtonTypeDefault,
  getCommonClassNameDefault,
  getCommonFormVariantDefault,
} from '../defaults';

describe('Core utils defaults', () => {
  it('Når getCommonClassNameDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getCommonClassNameDefault();
    expect(renderDefault).toBe('');
  });
  it('Når getCommonButtonTypeDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getCommonButtonTypeDefault();
    expect(renderDefault).toBe('button');
  });
  it('Når getCommonFormVariantDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getCommonFormVariantDefault();
    expect(renderDefault).toBe('medium');
  });
});
