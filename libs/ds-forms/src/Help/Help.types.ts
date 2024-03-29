import { ReactElement } from 'react';

export interface HelpProps {
  /** Skjuler hele komponenten, men er fortsatt synlig for skjermleser */
  hideHelp?: boolean;
  /** Hjelpetekst */
  helpText?: string;
  /** Overskriver default hjelpeikon */
  helpSvgPath?: ReactElement;
  /** Overskriver default tooltip-tekst til hjelpeikon */
  titleHelpSvg?: string;
  /** Label eller legend id */
  targetId?: string;
  /** Beskrivelse */
  description?: string;
}
