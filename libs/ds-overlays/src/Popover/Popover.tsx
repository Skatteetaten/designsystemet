import { forwardRef, JSX, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { IconButton } from '@skatteetaten/ds-buttons';
import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { CancelSVGpath } from '@skatteetaten/ds-icons';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import {
  getPopoverColorDefault,
  getPopoverArrowPositionDefault,
  getPopoverTitleAsDefault,
} from './defaults';
import { PopoverProps } from './Popover.types';

import styles from './Popover.module.scss';

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      // anchorEl,
      arrowPosition = getPopoverArrowPositionDefault(),
      color = getPopoverColorDefault(),
      open,
      title,
      titleAs = getPopoverTitleAsDefault(),
      // disableAutoDismiss,
      onClose,
      children,
    },
    ref
  ): JSX.Element => {
    const useMediaQuery = (query: string): boolean => {
      const [matches, setMatches] = useState(false);

      useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
          setMatches(media.matches);
        }
        const listener = (): void => {
          setMatches(media.matches);
        };
        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);
      }, [matches, query]);

      return matches;
    };

    const { t } = useTranslation('ds_status', { i18n: dsI18n });
    const isBreakpointXs = useMediaQuery('(min-width: 480px)');

    const hiddenClassName = open ? styles.popoverHidden : '';
    const colorClassName = styles[`popover_${color}`];
    const popoverArrowPositionClassName =
      styles[`popover_arrow${arrowPosition}`];
    const arrowPositionClassName = styles[`popoverArrow_${arrowPosition}`];
    return (
      <div
        ref={ref}
        id={id}
        lang={lang}
        data-testid={dataTestId}
        className={`${styles.popover} ${hiddenClassName} ${colorClassName} ${popoverArrowPositionClassName} ${className}`.trim()}
        aria-hidden={!open}
      >
        <div className={styles.popoverContent}>
          <div className={styles.popoverContentWrapper}>
            {title && (
              <Heading as={titleAs} level={4}>
                {title}
              </Heading>
            )}
            {typeof children === 'string' && <Paragraph>{children}</Paragraph>}
            {typeof children !== 'string' && children}
          </div>
          <IconButton
            className={styles.popoverContentCloseButton}
            size={isBreakpointXs ? 'large' : 'small'}
            svgPath={CancelSVGpath}
            title={t('alert.CloseMessage')}
            onClick={onClose}
          />
        </div>
        <div
          className={`${styles.popoverArrow} ${arrowPositionClassName}`.trim()}
        ></div>
      </div>
    );
  }
);

Popover.displayName = 'Popover';

export {
  getPopoverColorDefault,
  getPopoverArrowPositionDefault,
  getPopoverTitleAsDefault,
};
