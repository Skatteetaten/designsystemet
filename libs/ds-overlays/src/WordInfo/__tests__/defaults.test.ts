import { getWordInfoHasIconDefault } from '../defaults';

describe('WordInfo defaults', () => {
  it('Når getWordInfoHasIconDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getWordInfoHasIconDefault();
    expect(renderDefault).toBe(true);
  });
});
