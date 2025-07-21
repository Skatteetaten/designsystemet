import { getOpenDefaultLinksInNewTabDefault } from '../defaults';

describe('Footer defaults', () => {
  it('Når getOpenDefaultLinksInNewTabDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getOpenDefaultLinksInNewTabDefault();
    expect(renderDefault).toBe(true);
  });
});
