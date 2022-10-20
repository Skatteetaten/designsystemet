import {
  getClassNameDefault,
  getIsOutlinedDefault,
  getSizeDefault,
  getDisabledDefault,
} from '../defaults';

describe('IconButton defaults', () => {
  it('Når getClassNameDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getClassNameDefault();
    expect(renderDefault).toBe('');
  });
  it('Når getSizeDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getSizeDefault();
    expect(renderDefault).toBe('medium');
  });
  it('Når getIsOutlinedDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getIsOutlinedDefault();
    expect(renderDefault).toBe(false);
  });
  it('Når getDisabledDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getDisabledDefault();
    expect(renderDefault).toBe(false);
  });
});
