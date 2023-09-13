import { ComponentPropsWithoutRef } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { HelpProps } from '../Help/Help.types';

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
  helpText?: HelpProps['helpText'];
  /** Overskriver default hjelpeikon */
  helpSvgPath?: HelpProps['helpSvgPath'];
  /** Title-element til hjelpeikon */
  titleHelpSvg?: HelpProps['titleHelpSvg'];
  /** Om obligatorisk label skal markeres med stjerne */
  showRequiredMark?: boolean;
}

export type LabelWithHelpProps = LabelWithHelpCommonProps;
