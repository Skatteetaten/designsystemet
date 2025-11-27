import { getAccordionItemKeepMountedDefault } from '../defaults';

describe('AccordionItem defaults', () => {
  it('Når getAccordionItemKeepMountedDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getAccordionItemKeepMountedDefault();
    expect(renderDefault).toBe(true);
  });
});
