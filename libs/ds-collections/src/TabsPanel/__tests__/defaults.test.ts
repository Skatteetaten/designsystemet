import { getTabsPanelKeepMountedDefault } from '../defaults';

describe('TabsPanel defaults', () => {
  it('Når getTabsPanelKeepMountedDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getTabsPanelKeepMountedDefault();
    expect(renderDefault).toBe(true);
  });
});
