import { getPopoverPositionDefault, getPopoverColorDefault } from '../defaults';

describe('Popover defaults', () => {
  it('Når getPopoverColorDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getPopoverColorDefault();
    expect(renderDefault).toBe('forest');
  });
  it('Når getPopoverPositionDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getPopoverPositionDefault();
    expect(renderDefault).toBe('bottomStart');
  });
});
