import {
  getPanelColorDefault,
  getPanelPaddingDefault,
  getPanelSpacingDefault,
  getPanelSubtitleAsDefault,
  getPanelTitleAsDefault,
  getPanelVariantDefault,
} from '../defaults';

describe('Panel defaults', () => {
  it('Når getPanelColorDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getPanelColorDefault();
    expect(renderDefault).toBe('ochre');
  });
  it('Når getPanelVariantDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getPanelVariantDefault();
    expect(renderDefault).toBe('outline');
  });
  it('Når getPanelPaddingDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getPanelPaddingDefault();
    expect(renderDefault).toBe('xl');
  });
  it('Når getPanelSpacingDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getPanelSpacingDefault();
    expect(renderDefault).toBe('xxs');
  });
  it('Når getPanelTitleAsDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getPanelTitleAsDefault();
    expect(renderDefault).toBe('h3');
  });
  it('Når getPanelSubtitleAsDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getPanelSubtitleAsDefault();
    expect(renderDefault).toBe('h4');
  });
});
