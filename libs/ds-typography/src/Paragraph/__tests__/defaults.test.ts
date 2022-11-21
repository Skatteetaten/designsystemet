import { getParagraphVariantDefault } from '../defaults';

describe('Paragraph defaults', () => {
  it('Når getParagraphVariantDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getParagraphVariantDefault();
    expect(renderDefault).toBe('standard');
  });
});
