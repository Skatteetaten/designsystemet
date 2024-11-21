import { getAlertBackgroundBrightnessDefault } from '../defaults';

describe('Alert defaults', () => {
  it('Når getTagColorDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getAlertBackgroundBrightnessDefault();
    expect(renderDefault).toBe('default');
  });
});
