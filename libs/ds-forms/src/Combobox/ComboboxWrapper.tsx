import type { JSX, ReactNode } from 'react';

import styles from './Combobox.module.scss';

interface ComboboxWrapperProps {
  children: ReactNode;
  hasSpacing?: boolean;
  className?: string;
}

export const ComboboxWrapper = ({
  children,
  hasSpacing = false,
  className = '',
}: ComboboxWrapperProps): JSX.Element => {
  return (
    <div
      data-has-spacing={hasSpacing}
      className={`${styles.comboboxWrapper} ${className}`}
    >
      {children}
    </div>
  );
};

ComboboxWrapper.displayName = 'ComboboxWrapper';
