import {
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
});
