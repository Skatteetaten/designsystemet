import { getCardColorDefault, getCardSpacingDefault } from '../defaults';

describe('Card defaults', () => {
  it('Når getCardColorDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getCardColorDefault();
    expect(renderDefault).toBe('white');
  });
  it('Når getCardSpacingDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getCardSpacingDefault();
    expect(renderDefault).toBe('m');
  });
});
