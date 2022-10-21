import {
  getCommonClassNameDefault,
  getCommonDisabledDefault,
} from '../defaults';

describe('InlineButton defaults', () => {
  it('Når getCommonDisabledDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getCommonDisabledDefault();
    expect(renderDefault).toBe(false);
  });
});

describe('Button defaults', () => {
  it('Når getCommonClassNameDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getCommonClassNameDefault();
    expect(renderDefault).toBe('');
  });
  it('Når getCommonDisabledDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getCommonDisabledDefault();
    expect(renderDefault).toBe(false);
  });
});
