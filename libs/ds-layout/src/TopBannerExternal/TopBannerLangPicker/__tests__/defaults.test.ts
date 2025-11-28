import { Languages } from '@skatteetaten/ds-core-utils';

import {
  getTopBannerLangPickerLocaleDefault,
  getTopBannerLangPickerShowSamiDefault,
} from '../defaults';

describe('TopBannerLangPicker defaults', () => {
  it('Når getTopBannerLangPickerShowSamiDefault kalles, så returnerer den riktig verdi', () => {
    expect(getTopBannerLangPickerShowSamiDefault()).toBe(true);
  });
  it('Når getTopBannerLangPickerLocaleDefault kalles, så returnerer den riktig verdi', () => {
    expect(getTopBannerLangPickerLocaleDefault()).toBe(Languages.Bokmal);
  });
});
