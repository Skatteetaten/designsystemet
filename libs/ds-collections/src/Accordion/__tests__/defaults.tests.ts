import {
  getAccordionBackgroundColorDefault,
  getAccordionIconPositionDefault,
  getAccordionSizeDefault,
} from '../defaults';

describe('Accordion defaults', () => {
  it('Når getAccordionBackgroundColorDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getAccordionBackgroundColorDefault();
    expect(renderDefault).toBe('none');
  });
  it('Når getAccordionIconPositionDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getAccordionIconPositionDefault();
    expect(renderDefault).toBe('right');
  });
  it('Når getAccordionSizeDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getAccordionSizeDefault();
    expect(renderDefault).toBe('medium');
  });
});
