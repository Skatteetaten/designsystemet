import {
  getClassNameDefault,
  getRoleDefault,
  getVariantDefault,
  getViewBoxDefault,
  getSizeDefault,
} from '../defaults';

describe('Icon defaults', () => {
  it('Når getClassNameDefault kalles, Så returnerer den riktig verdi', () => {
    const renderedDefault = getClassNameDefault();
    expect(renderedDefault).toBe('');
  });
  it('Når getRoleDefault kalles, Så returnerer den riktig verdi', () => {
    const renderedDefault = getRoleDefault();
    expect(renderedDefault).toBe('img');
  });
  it('Når getVariantDefault kalles, Så returnerer den riktig verdi', () => {
    const renderedDefault = getVariantDefault();
    expect(renderedDefault).toBe('systemIcon');
  });
  describe('Gitt at getViewBoxDefault kalles', () => {
    it('Når variant er systemIcon, Så returnerer den riktig verdi', () => {
      const renderedDefault = getViewBoxDefault('systemIcon');
      expect(renderedDefault).toBe('0 0 24 24');
    });
    it('Når variant er themeIcon, Så returnerer den riktig verdi', () => {
      const renderedDefault = getViewBoxDefault('themeIcon');
      expect(renderedDefault).toBe('0 0 48 48');
    });
  });
  it('Når getSizeDefault kalles, Så returnerer den riktig verdi', () => {
    const renderedDefault = getSizeDefault();
    expect(renderedDefault).toBe('medium');
  });
});
