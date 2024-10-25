import {
  getChipsToggleDefaultIsSelected,
  getChipsToggleDefaultShowCheckmark,
} from '../defaults';

describe('ChipsToggle defaults', () => {
  it('Når getChipsToggleDefaultShowCheckmark kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getChipsToggleDefaultShowCheckmark();
    expect(renderDefault).toBe(true);
  });
  it('Når getChipsToggleDefaultIsSelected kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getChipsToggleDefaultIsSelected();
    expect(renderDefault).toBe(false);
  });
});
