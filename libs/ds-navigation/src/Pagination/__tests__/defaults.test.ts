import {
  getDefaultPageSize,
  getDefaultSibling,
  getDefaultHidePageSummary,
  getDefaultHidePrevNextButtonTitle,
} from '../defaults';

describe('Pagination defaults', () => {
  it('Når getDefaultPageSize kalles så returnerer den riktig verdi', () => {
    const renderDefault = getDefaultPageSize();
    expect(renderDefault).toBe(10);
  });
  it('Når getDefaultSibling kalles så returnerer den riktig verdi', () => {
    const renderDefault = getDefaultSibling();
    expect(renderDefault).toBe(3);
  });
  it('Når getDefaultHidePrevNextButtonTitle kalles så returnerer den riktig verdi', () => {
    const renderDefault = getDefaultHidePrevNextButtonTitle();
    expect(renderDefault).toBe(false);
  });
  it('Når getDefaultHidePageSummary kalles så returnerer den riktig verdi', () => {
    const renderDefault = getDefaultHidePageSummary();
    expect(renderDefault).toBe(false);
  });
});
