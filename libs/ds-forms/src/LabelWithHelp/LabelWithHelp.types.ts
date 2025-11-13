import { ComponentPropsWithoutRef, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { HelpProps } from '../Help/Help.types';

type RequiredLabelHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'label'>,
  'htmlFor'
>;

export interface LabelWithHelpProps
  extends RequiredLabelHTMLAttributes,
    BaseProps {
  ref?: Ref<HTMLLabelElement>;
  classNames?: {
    label?: string;
  } & HelpProps['classNames'];
  /** Ledetekst */
  children: string;
  /** Skjuler hele komponenten men er fortsatt synlig for skjermleser */
  hideLabel?: boolean;
  /** Tilleggstekst */
  description?: string;
  /** Id til tilleggstekst */
  descriptionId?: string;
  /** Hjelpetekst */
  helpText?: HelpProps['helpText'];
  /** Overskriver default hjelpeikon */
  helpSvgPath?: HelpProps['helpSvgPath'];
  /** Overskriver default tooltip-tekst til hjelpeikon */
  titleHelpSvg?: HelpProps['titleHelpSvg'];
  /**
   * Om obligatorisk label skal markeres med stjerne.
   * @deprecated Prop skal fjernes ved lansering av neste major versjon.
   */
  showRequiredMark?: boolean;
  /** Callback som kalles når hjelpetekst vises/skjules */
  onHelpToggle?: HelpProps['onHelpToggle'];
}
