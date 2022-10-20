import {
  getCommonClassNameDefault,
  getCommonDisabledDefault,
  getInlineButtonPositionDefault,
  getButtonVariantDefault,
} from '../defaults';

describe('InlineButton defaults', () => {
  it('Når getCommonDisabledDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getCommonDisabledDefault();
    expect(renderDefault).toBe(false);
  });
  it('Når getInlineButtonPositionDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getInlineButtonPositionDefault();
    expect(renderDefault).toBe('left');
  });
});

describe('Button defaults', () => {
  it('Når getButtonVariantDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getButtonVariantDefault();
    expect(renderDefault).toBe('primary');
  });
  it('Når getCommonClassNameDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getCommonClassNameDefault();
    expect(renderDefault).toBe('');
  });
  it('Når getCommonDisabledDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getCommonDisabledDefault();
    expect(renderDefault).toBe(false);
  });
});
