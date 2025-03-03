import { ComponentPropsWithoutRef, ReactNode, JSX, Ref } from 'react';

import { BaseProps, Prettify } from '@skatteetaten/ds-core-utils';

import { HelpProps } from '../Help/Help.types';

type RequiredFieldsetHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'fieldset'>,
  'disabled' | 'form'
>;

export interface FieldsetProps
  extends RequiredFieldsetHTMLAttributes,
    BaseProps {
  ref?: Ref<HTMLFieldSetElement>;
  classNames?: Prettify<{ legend?: string } & HelpProps['classNames']>;
  /** Innhold */
  children: JSX.Element | JSX.Element[];
  /** Ledetekst */
  legend: ReactNode;
  /** Skjuler ledetekst, tilleggstekst og hjelpetekst, men er fortsatt synlig for skjermleser */
  hideLegend?: boolean;
  /** Tilleggstekst */
  description?: string;
  /** Margin under fieldset */
  hasSpacing?: boolean;
  /** Hjelpetekst */
  helpText?: HelpProps['helpText'];
  /** Overskriver default hjelpeikon */
  helpSvgPath?: HelpProps['helpSvgPath'];
  /** Overskriver default tooltip-tekst til hjelpeikon */
  titleHelpSvg?: HelpProps['titleHelpSvg'];
  /** Om legend skal markeres med stjerne */
  showRequiredMark?: boolean;
  /** Callback som kalles når hjelpetekst vises/skjules */
  onHelpToggle?: HelpProps['onHelpToggle'];
}
