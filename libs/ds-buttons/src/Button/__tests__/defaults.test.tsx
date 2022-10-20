import {
  getClassNameDefault,
  getDisabledDefault,
  getVariantDefault,
  getIconPropsDefault,
} from '../defaults';

describe('Button defaults', () => {
  it('Når getVariantDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getVariantDefault();
    expect(renderDefault).toBe('primary');
  });
  it('Når getClassNameDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getClassNameDefault();
    expect(renderDefault).toBe('');
  });
  it('Når getDisabledDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getDisabledDefault();
    expect(renderDefault).toBe(false);
  });
  it('Når getIconPropsDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getIconPropsDefault();
    expect(renderDefault).toBeUndefined();
  });
});
