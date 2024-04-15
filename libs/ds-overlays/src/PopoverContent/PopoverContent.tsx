import { forwardRef, JSX, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { useMergeRefs } from '@floating-ui/react';
import { IconButton } from '@skatteetaten/ds-buttons';
import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { CancelSVGpath } from '@skatteetaten/ds-icons';

import { PopoverContentProps } from './PopoverContent.types';
import { getPopoverColorDefault } from '../Popover/defaults';
import { PopoverContext } from '../PopoverContext/PopoverContext';

import styles from './PopoverContent.module.scss';

export const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      onClose,
      children,
    },
    ref
  ): JSX.Element | null => {
    const {
      floatingData,
      interactions,
      arrowRef,
      isOpen,
      setIsOpen,
      color = getPopoverColorDefault(),
      isMobile,
    } = useContext(PopoverContext);
    const { refs, floatingStyles, placement, middlewareData } = floatingData;
    const { getFloatingProps } = interactions;

    const { t } = useTranslation('Shared', { i18n: dsI18n });
    const side = placement.split('-')[0];

    const colorClassName = styles[`popover_${color}`];
    const arrowPositionClassName =
      styles[`popoverArrow_${side}` as keyof typeof styles];
    const mergedRef = useMergeRefs([refs.setFloating, ref]);

    const staticSide = {
      top: 'bottom',
      right: 'left',
      bottom: 'top',
      left: 'right',
    }[side];

    if (!isOpen) {
      return null;
    }

    return (
      <div
        {...getFloatingProps()}
        ref={mergedRef}
        style={floatingStyles}
        id={id}
        lang={lang}
        data-testid={dataTestId}
        className={`${styles.popover} ${colorClassName} ${className}`.trim()}
      >
        <div className={styles.popoverContent}>
          <div className={styles.popoverContentWrapper}>{children}</div>
          <IconButton
            className={styles.popoverContentCloseButton}
            size={isMobile ? 'small' : 'large'}
            svgPath={CancelSVGpath}
            title={t('shared.Close')}
            onClick={() => {
              onClose?.();
              setIsOpen(false);
            }}
          />
        </div>
        <div
          ref={arrowRef}
          style={{
            left: middlewareData.arrow?.x,
            top: middlewareData.arrow?.y,
            ...(staticSide
              ? {
                  [staticSide]: `-${
                    (arrowRef.current?.offsetWidth ?? 0) / 2
                  }px`,
                }
              : {}),
          }}
          className={`${styles.popoverArrow} ${arrowPositionClassName}`.trim()}
        ></div>
      </div>
    );
  }
);

PopoverContent.displayName = 'PopoverContent';
