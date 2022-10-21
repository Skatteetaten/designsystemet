import {
  getClassNameDefault,
  getVariantDefault,
  getSizeDefault,
} from '../defaults';

describe('Icon defaults', () => {
  it('Når getClassNameDefault kalles, Så returnerer den riktig verdi', () => {
    const renderedDefault = getClassNameDefault();
    expect(renderedDefault).toBe('');
  });
  it('Når getVariantDefault kalles, Så returnerer den riktig verdi', () => {
    const renderedDefault = getVariantDefault();
    expect(renderedDefault).toBe('systemIcon');
  });
  it('Når getSizeDefault kalles, Så returnerer den riktig verdi', () => {
    const renderedDefault = getSizeDefault();
    expect(renderedDefault).toBe('medium');
  });
});
