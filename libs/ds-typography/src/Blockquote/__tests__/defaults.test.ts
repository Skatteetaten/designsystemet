import { getBlockquoteBorderColorDefault } from '../defaults';

describe('Blockquote defaults', () => {
  it('Når getBlockquoteBorderColorDefault kalles, så returnerer den riktig verdi', () => {
    expect(getBlockquoteBorderColorDefault()).toBe('ochre');
  });
});
