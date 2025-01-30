import { getCardColorDefault } from '../defaults';

describe('Card defaults', () => {
  it('Når getCardColorDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getCardColorDefault();
    expect(renderDefault).toBe('white');
  });
});
