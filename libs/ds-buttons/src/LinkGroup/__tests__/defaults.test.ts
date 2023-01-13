import { getLinkGroupVariantDefault } from '../defaults';

describe('LinkGroup defaults', () => {
  it('Når getLinkGroupVariantDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getLinkGroupVariantDefault();
    expect(renderDefault).toBe('list');
  });
});
