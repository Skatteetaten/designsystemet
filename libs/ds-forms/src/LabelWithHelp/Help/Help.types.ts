import { ReactElement, ReactNode } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export type OnHelpToggleHandler = (isOpen: boolean) => void;

export interface HelpProps {
  /** Skjuler hele komponenten, men er fortsatt synlig for skjermleser */
  hideHelp?: boolean;
  /** Hjelpetekst */
  helpText?: ReactNode;
  /** Overskriver default hjelpeikon */
  helpSvgPath?: ReactElement<SVGPathElement>;
  /** Overskriver default tooltip-tekst til hjelpeikon */
  titleHelpSvg?: string;
  /** Label eller legend id */
  targetId?: string;
  /** Beskrivelse */
  description?: string;
  /** Id til beskrivelse */
  descriptionId?: string;
  /** Skjuler beskrivelse for skjermleser */
  hideDescriptionForScreenReader?: boolean;
  /** Callback som kalles når hjelpetekst vises/skjules */
  onHelpToggle?: OnHelpToggleHandler;
  className?: BaseProps['className'];
  classNames?: {
    helpText?: string;
    description?: string;
  };
}
