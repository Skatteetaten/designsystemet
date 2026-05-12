import { memo, type JSX, MouseEvent } from 'react';

import {
  ChevronDownSVGpath,
  ChevronUpSVGpath,
  Icon,
} from '@skatteetaten/ds-icons';

import { ComboboxButtonProps } from './Combobox.types';

import styles from './Combobox.module.scss';

export const ComboboxButton = memo<ComboboxButtonProps>(
  ({
    isOpen,
    onClick,
    disabled,
    variant,
  }: ComboboxButtonProps): JSX.Element => {
    const buttonClassName = `${styles.chevronButton} ${variant === 'large' ? styles.chevronButtonLarge : ''}`;
    const iconSize = variant === 'large' ? 'medium' : 'small';

    const handleMouseDown = (e: MouseEvent<HTMLElement>): void => {
      // Prevent focus from going to input
      e.preventDefault();
      onClick?.(e);
    };

    return (
      <div
        className={buttonClassName}
        data-disabled={disabled}
        aria-hidden={'true'}
        data-chevron-button
        onMouseDown={disabled ? undefined : handleMouseDown}
      >
        <Icon
          svgPath={isOpen ? ChevronUpSVGpath : ChevronDownSVGpath}
          size={iconSize}
        />
      </div>
    );
  }
);

ComboboxButton.displayName = 'ComboboxButton';
