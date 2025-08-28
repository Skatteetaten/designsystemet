import { dsI18n } from '@skatteetaten/ds-core-utils';

import {
  getScrollToMainDefault,
  getScrollToTopButtonTextDefault,
  getVisibilityThresholdDefault,
} from '../defaults';

describe('ScrollToTopButton default', () => {
  it('når getVisibilityThresholdDefault kalles, så returnerer den riktig verdi', () => {
    expect(getVisibilityThresholdDefault()).toBe(1);
  });
  it('når getScrollToMainDefault kalles, så returnerer den riktig verdi', () => {
    expect(getScrollToMainDefault()).toBe(true);
  });
  it('når getScrollToTopButtonTextDefault kalles, så returnerer den riktig verdi', () => {
    expect(getScrollToTopButtonTextDefault()).toBe(
      dsI18n.t('ds_buttons:scrolltotopbutton.Title')
    );
  });
});
