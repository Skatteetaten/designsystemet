import {
  getInlineButtonPositionDefault,
  getInlineButtonBrightnessDefault,
} from '../defaults';

describe('InlineButton defaults', () => {
  it('Når getInlineButtonPositionDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getInlineButtonPositionDefault();
    expect(renderDefault).toBe('left');
  });

  it('Når getInlineButtonBrightnessDefault kalles, så returnerer den riktig verdi', () => {
    const brightnessDefault = getInlineButtonBrightnessDefault();
    expect(brightnessDefault).toBe('default');
  });
});
