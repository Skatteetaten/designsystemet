import { getInlineButtonPositionDefault } from '../defaults';

describe('Button defaults', () => {
  it('Når getInlineButtonPositionDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getInlineButtonPositionDefault();
    expect(renderDefault).toBe('primary');
  });
});
