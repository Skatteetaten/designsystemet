import { dsI18n } from '@skatteetaten/ds-core-utils';

import {
  getStepListStepEditButtonTextDefault,
  getStepListStepNextButtonTextDefault,
  getStepListStepShouldAutoFocusWhenActiveDefault,
  getStepListStepTitleAsDefault,
  getStepListStepVariantDefault,
} from '../defaults';

describe('StepList defaults', () => {
  it('Når getStepListStepTitleAsDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getStepListStepTitleAsDefault();
    expect(renderDefault).toBe('h3');
  });
  it('Når getStepListStepVariantDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getStepListStepVariantDefault();
    expect(renderDefault).toBe('passive');
  });
  it('Når getStepListStepShouldAutoFocusWhenActive kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getStepListStepShouldAutoFocusWhenActiveDefault();
    expect(renderDefault).toBe(true);
  });
  it('Når getStepListStepEditButtonTextDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getStepListStepEditButtonTextDefault();
    expect(renderDefault).toBe(dsI18n.t('ds_collections:steplist.Edit'));
  });
  it('Når getStepListStepNextButtonTextDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getStepListStepNextButtonTextDefault();
    expect(renderDefault).toBe(dsI18n.t('ds_collections:steplist.Next'));
  });
});
