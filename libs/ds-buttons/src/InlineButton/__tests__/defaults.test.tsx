import { getDisabledDefault } from '@skatteetaten/ds-core-utils';

import { getPositionDefault } from '../defaults';

describe('InlineButton defaults', () => {
  it('Når getDisabledDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getDisabledDefault();
    expect(renderDefault).toBe(false);
  });
  it('Når getPositionDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getPositionDefault();
    expect(renderDefault).toBe('left');
  });
});
