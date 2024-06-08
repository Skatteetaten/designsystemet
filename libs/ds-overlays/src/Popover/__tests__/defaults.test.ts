import {
  getPopoverPositionDefault,
  getPopoverColorDefault,
  getPopoverRestoreFocusDefault,
} from '../defaults';

describe('Popover defaults', () => {
  it('Når getPopoverColorDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getPopoverColorDefault();
    expect(renderDefault).toBe('forest');
  });
  it('Når getPopoverPositionDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getPopoverPositionDefault();
    expect(renderDefault).toBe('bottomStart');
  });
  it('Når getPopoverRestoreFocusDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getPopoverRestoreFocusDefault();
    expect(renderDefault).toBe(true);
  });
});
