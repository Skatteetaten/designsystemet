import {
  InfoSquareSVGpath,
  WarningStopSVGpath,
  WarningSVGpath,
} from '@skatteetaten/ds-icons';

import { CardAlertVariant } from '../CardAlert.types';
import {
  getCardAlertVariantDefault,
  getCardAlertSvgPathDefault,
  getCardAlertTitleAsDefault,
} from '../defaults';

describe('CardAlert defaults', () => {
  it('Når getCardAlertVariantDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getCardAlertVariantDefault();
    expect(renderDefault).toBe('warning');
  });

  it('Når getCardAlertSvgPathDefault kalles med "info", så returnerer den InfoSquareSVGpath', () => {
    const svgPath = getCardAlertSvgPathDefault('info');
    expect(svgPath).toBe(InfoSquareSVGpath);
  });

  it('Når getCardAlertSvgPathDefault kalles med "warning", så returnerer den ErrorSVGpath', () => {
    const svgPath = getCardAlertSvgPathDefault('warning');
    expect(svgPath).toBe(WarningSVGpath);
  });

  it('Når getCardAlertSvgPathDefault kalles med "danger", så returnerer den WarningSVGpath', () => {
    const svgPath = getCardAlertSvgPathDefault('danger');
    expect(svgPath).toBe(WarningStopSVGpath);
  });

  it('Når getCardAlertSvgPathDefault kalles med en ugyldig variant, så returnerer den InfoSquareSVGpath', () => {
    const svgPath = getCardAlertSvgPathDefault('invalid' as CardAlertVariant);
    expect(svgPath).toBe(InfoSquareSVGpath);
  });

  it('Når getCardAlertTitleAsDefault kalles, så returnerer riktig verdi', () => {
    const result = getCardAlertTitleAsDefault();
    expect(result).toBe('h3');
  });
});
