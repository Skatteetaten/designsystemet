import {
  getDescriptionListSizeDefault,
  getDescriptionDirectionDefault,
  getDescriptionListIsVerticalOnMobileDefault,
} from '../defaults';

describe('DescriptionList defaults', () => {
  it('Når getDescriptionListSizeDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getDescriptionListSizeDefault();
    expect(renderDefault).toBe('medium');
  });
  it('Når getDescriptionDirectionDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getDescriptionDirectionDefault();
    expect(renderDefault).toBe('horizontal');
  });
  it('Når getDescriptionListIsVerticalOnMobileDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getDescriptionListIsVerticalOnMobileDefault();
    expect(renderDefault).toBeTruthy();
  });
});
