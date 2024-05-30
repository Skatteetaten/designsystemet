import { PageScreenshotOptions } from 'playwright';

export const wrapper = '[data-test-block]';
export const screenShotOptions: PageScreenshotOptions = {
  fullPage: true,
};

export const loremIpsum =
  'Lorem ipsum dolor sit amet. Alle som har laget en nettside, trengt litt fylltekst eller bare surfet rundt på nettet har antageligvis sett disse ordene, ' +
  'etterfulgt av en tilsynelatende eviglang tekst fylt med latinske liksomsetninger.';

export const loremIpsumWithoutSpaces =
  'Loremipsumdolorsitamet.Allesomharlagetennettside,trengtlittfylltekstellerbaresurfetrundtpånettetharantageligvissettdisseordene,' +
  'etterfulgtaventilsynelatendeeviglangtekstfyltmedlatinskeliksomsetninger.';
