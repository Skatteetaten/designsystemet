import { getTopBannerUserRoleDefault } from '../defaults';

describe('TopBannerUser defaults', () => {
  it('Når getTopBannerUserRoleDefault kalles, så returnerer den riktig verdi', () => {
    expect(getTopBannerUserRoleDefault()).toBe('meg');
  });
});
