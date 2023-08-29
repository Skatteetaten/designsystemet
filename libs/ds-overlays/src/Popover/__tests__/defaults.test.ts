import {
  getPopoverArrowLocationDefault,
  getPopoverColorDefault,
  getPopoverTitleAsDefault,
} from '../Popover';

describe('Popover defaults', () => {
  it('Når getPopoverColorDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getPopoverColorDefault();
    expect(renderDefault).toBe('ochre');
  });
  it('Når getPopoverArrowLocationDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getPopoverArrowLocationDefault();
    expect(renderDefault).toBe('bottomLeft');
  });
  it('Når getPopoverTitleAsDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getPopoverTitleAsDefault();
    expect(renderDefault).toBe('h3');
  });
});
