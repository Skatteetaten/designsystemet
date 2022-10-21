import { getIconVariantDefault, getIconSizeDefault } from '../defaults';

describe('Icon defaults', () => {
  it('Når getVariantDefault kalles, Så returnerer den riktig verdi', () => {
    const renderedDefault = getIconVariantDefault();
    expect(renderedDefault).toBe('systemIcon');
  });
  it('Når getIconSizeDefault kalles, Så returnerer den riktig verdi', () => {
    const renderedDefault = getIconSizeDefault();
    expect(renderedDefault).toBe('medium');
  });
});
