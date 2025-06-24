import {
  getCommonButtonTypeDefault,
  getCommonClassNameDefault,
  getCommonFormVariantDefault,
  getHelpTitleHelpSvgDefault,
} from '../defaults';
import { dsI18n } from '../i18n';

describe('Core utils defaults', () => {
  it('Når getCommonClassNameDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getCommonClassNameDefault();
    expect(renderDefault).toBe('');
  });
  it('Når getCommonButtonTypeDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getCommonButtonTypeDefault();
    expect(renderDefault).toBe('button');
  });
  it('Når getCommonFormVariantDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getCommonFormVariantDefault();
    expect(renderDefault).toBe('medium');
  });
  it('Når getHelpTitleHelpSvgDefault kalles, så returnerer den riktig verdi', () => {
    expect(getHelpTitleHelpSvgDefault()).toBe(dsI18n.t('Shared:shared.Help'));
  });
});
