import { StoryObj } from '@storybook/react';
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

export function getCommonOnHelpToggleStory<T extends StoryObj['args']>(
  additionalArgs?: StoryObj<T>['args']
): T {
  return {
    name: 'With onHelpToggle Event',
    args: {
      ...additionalArgs,
      helpText: 'Hjelpetekst',
      onHelpToggle: (open: boolean): void => {
        alert(open ? 'Hjelpetekst blir vist' : 'Hjelpetekst skjules');
      },
    },
    parameters: {
      imageSnapshot: {
        disable: true,
      },
    },
  } as unknown as T;
}
