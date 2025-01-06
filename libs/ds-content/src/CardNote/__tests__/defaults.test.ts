import {
  ErrorSVGpath,
  InfoSVGpath,
  WarningSVGpath,
} from '@skatteetaten/ds-icons';

import { CardNoteVariant } from '../CardNote.types';
import {
  getCardNoteVariantDefault,
  getCardNoteSvgPathDefault,
  getCardNoteTitleAsDefault,
} from '../defaults';

describe('CardNote defaults', () => {
  it('Når getCardNoteVariantDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getCardNoteVariantDefault();
    expect(renderDefault).toBe('warning');
  });

  it('Når getCardNoteSvgPathDefault kalles med "neutral", så returnerer den InfoSVGpath', () => {
    const svgPath = getCardNoteSvgPathDefault('neutral');
    expect(svgPath).toBe(InfoSVGpath);
  });

  it('Når getCardNoteSvgPathDefault kalles med "warning", så returnerer den ErrorSVGpath', () => {
    const svgPath = getCardNoteSvgPathDefault('warning');
    expect(svgPath).toBe(ErrorSVGpath);
  });

  it('Når getCardNoteSvgPathDefault kalles med "danger", så returnerer den WarningSVGpath', () => {
    const svgPath = getCardNoteSvgPathDefault('danger');
    expect(svgPath).toBe(WarningSVGpath);
  });

  it('Når getCardNoteSvgPathDefault kalles med en ugyldig variant, så returnerer den InfoSVGpath', () => {
    const svgPath = getCardNoteSvgPathDefault('invalid' as CardNoteVariant);
    expect(svgPath).toBe(InfoSVGpath);
  });

  it('Når getCardNoteTitleAsDefault kalles, så returnerer riktig verdi', () => {
    const result = getCardNoteTitleAsDefault();
    expect(result).toBe('h3');
  });
});
