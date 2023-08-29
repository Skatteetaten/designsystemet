import { ComponentPropsWithoutRef, ReactElement } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

type RequiredLabelHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'label'>,
  'htmlFor'
>;

interface LabelWithHelpCommonProps
  extends RequiredLabelHTMLAttributes,
    BaseProps {
  /** Ledetekst */
  children: string;
  /** Skjuler hele komponenten men er fortsatt synlig for skjermleser */
  hideLabel?: boolean;
  /** Tilleggstekst */
  description?: string;
  /** Hjelpetekst */
  helpText?: string;
  /** Overskriver default hjelpeikon */
  helpSvgPath?: ReactElement;
  /** Title-element til hjelpeikon */
  titleHelpSvg?: string;
  /** Om obligatorisk label skal markeres med stjerne */
  showRequiredMark?: boolean;
}

export type LabelWithHelpProps = LabelWithHelpCommonProps;
