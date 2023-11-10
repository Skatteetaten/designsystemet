import { getModalPaddingDefault, getModalVariantDefault } from '../defaults';

describe('Modal defaults', () => {
  it('Når getModalPaddingDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getModalPaddingDefault();
    expect(renderDefault).toBe('l');
  });
  it('Når getModalVariantDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getModalVariantDefault();
    expect(renderDefault).toBe('outline');
  });
});
