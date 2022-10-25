import { getInlineButtonPositionDefault } from '../defaults';

describe('InlineButton defaults', () => {
  it('Når getInlineButtonPositionDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getInlineButtonPositionDefault();
    expect(renderDefault).toBe('left');
  });
});
