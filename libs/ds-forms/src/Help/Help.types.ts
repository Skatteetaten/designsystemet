import { ReactElement, ReactNode } from 'react';

export type OnHelpToggleHandler = (isOpen: boolean) => void;

export interface HelpProps {
  /** Skjuler hele komponenten, men er fortsatt synlig for skjermleser */
  hideHelp?: boolean;
  /** Hjelpetekst */
  helpText?: ReactNode;
  /** Overskriver default hjelpeikon */
  helpSvgPath?: ReactElement;
  /** Overskriver default tooltip-tekst til hjelpeikon */
  titleHelpSvg?: string;
  /** Label eller legend id */
  targetId?: string;
  /** Beskrivelse */
  description?: string;
  /** Callback som kalles når hjelpetekst vises/skjules */
  onHelpToggle?: OnHelpToggleHandler;
}
