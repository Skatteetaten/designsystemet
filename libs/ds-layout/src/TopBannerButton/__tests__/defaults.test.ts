import { getTopBannerButtonVariantDefault } from '../defaults';

describe('TopBannerButton defaults', () => {
  it('Når getTopBannerButtonVariantDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getTopBannerButtonVariantDefault();
    expect(renderDefault).toBe('standard');
  });
});
