import { type ReactNode, type KeyboardEvent, JSX } from 'react';

interface ComboboxInputContainerProps {
  children: ReactNode;
  className: string;
  disabled: boolean;
  handleContainerClick?: (e: React.MouseEvent) => void;
  handleContainerKeyDown?: (e: KeyboardEvent<HTMLDivElement>) => void;
}

export const ComboboxInputContainer = ({
  children,
  className,
  disabled,
  handleContainerClick,
  handleContainerKeyDown,
}: ComboboxInputContainerProps): JSX.Element => (
  <div
    className={className}
    onClick={!disabled ? handleContainerClick : undefined}
    onKeyDown={!disabled ? handleContainerKeyDown : undefined}
  >
    {children}
  </div>
);
