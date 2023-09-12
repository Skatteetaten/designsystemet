import { ComponentPropsWithoutRef, ReactElement } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

type RequiredFieldsetHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'fieldset'>,
  'disabled'
>;

export interface FieldsetProps
  extends RequiredFieldsetHTMLAttributes,
    BaseProps {
  /** Innhold */
  children: JSX.Element | JSX.Element[];
  /** Ledetekst */
  legend: React.ReactNode;
  /** Skjuler ledetekst, tilleggstekst og hjelpetekst, men er fortsatt synlig for skjermleser */
  hideLegend?: boolean;
  /** Tilleggstekst */
  description?: string;
  /** Margin under fieldset */
  hasSpacing?: boolean;
  /** Hjelpetekst */
  helpText?: string;
  /** Overskriver default hjelpeikon */
  helpSvgPath?: ReactElement;
  /** Title-element til hjelpeikon */
  titleHelpSvg?: string;
  /** Om legend skal markeres med stjerne */
  showRequiredMark?: boolean;
}
