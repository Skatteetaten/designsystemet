import { JSX } from 'react';

import { PageScreenshotOptions } from 'playwright';
import { Args, Parameters } from 'storybook/internal/types';

import { Paragraph } from '@skatteetaten/ds-typography';

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

export const getPseudoParameters = (
  states: ('normal' | 'hover' | 'focus' | 'active')[],
  selector: string
): {
  imageSnapshot: { disableSnapshot: false };
  pseudo: {
    hover: string[] | undefined;
    focus: string[] | undefined;
    active: string[] | undefined;
  };
} => ({
  imageSnapshot: { disableSnapshot: false as const },
  pseudo: {
    hover: states.includes('hover')
      ? [`[data-pseudo-state="hover"] ${selector}`]
      : undefined,
    focus: states.includes('focus')
      ? [`[data-pseudo-state="focus"] ${selector}`]
      : undefined,
    active: states.includes('active')
      ? [`[data-pseudo-state="active"] ${selector}`]
      : undefined,
  },
});

type RenderWithPseudoStatesProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: React.ComponentType<any>;
  args: Args;
  parameters?: Parameters;
};

export const StoryWithPseudoStates = (
  props: RenderWithPseudoStatesProps
): JSX.Element => {
  const states = [
    'normal',
    ...Object.keys(props.parameters?.pseudo || {}).filter(
      (key) => props.parameters?.pseudo[key] !== undefined
    ),
  ];

  return (
    <div className={'paddingM'}>
      {states.map((state: string) => (
        <div key={state}>
          <Paragraph className={'topSpacingL bottomSpacingS bold'}>
            {state.charAt(0).toUpperCase() + state.slice(1)}
          </Paragraph>
          <div data-pseudo-state={state}>
            {props.component && <props.component {...props.args} />}
          </div>
        </div>
      ))}
    </div>
  );
};
