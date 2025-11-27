import { JSX, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { useMergeRefs } from '@floating-ui/react';

import { IconButton } from '@skatteetaten/ds-buttons';
import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { CancelSVGpath } from '@skatteetaten/ds-icons';

import { PopoverContentProps } from './PopoverContent.types';
import {
  getPopoverColorDefault,
  getPopoverContentAsDefault,
  getPopoverRestoreFocusDefault,
} from '../defaults';
import { PopoverContext } from '../PopoverContext';

import styles from './PopoverContent.module.scss';

export const PopoverContent = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  classNames,
  lang,
  'data-testid': dataTestId,
  as: Tag = getPopoverContentAsDefault(),
  children,
}: PopoverContentProps): JSX.Element | null => {
  const {
    floatingData,
    interactions,
    arrowRef,
    isOpen,
    setIsOpen,
    color = getPopoverColorDefault(),
    shouldRestoreFocus = getPopoverRestoreFocusDefault(),
    onClose,
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
    <Tag
      {...getFloatingProps()}
      ref={mergedRef}
      // eslint-disable-next-line react/forbid-component-props
      style={floatingStyles}
      id={id}
      lang={lang}
      data-testid={dataTestId}
      className={`${styles.popover} ${colorClassName} ${className}`.trim()}
    >
      <Tag className={styles.popoverContent}>
        <Tag
          className={`${styles.popoverContentWrapper} ${classNames?.contentWrapper ?? ''}`.trim()}
        >
          {children}
        </Tag>
        <IconButton
          className={`${styles.popoverContentCloseButton} ${classNames?.closeButton ?? ''}`.trim()}
          svgPath={CancelSVGpath}
          title={t('shared.Close')}
          onClick={() => {
            onClose?.();
            setIsOpen(false);
            if (shouldRestoreFocus) {
              refs.domReference.current?.focus();
            }
          }}
        />
      </Tag>
      <Tag
        ref={arrowRef}
        // eslint-disable-next-line react/forbid-component-props
        style={{
          left: middlewareData.arrow?.x,
          top: middlewareData.arrow?.y,
          ...(staticSide
            ? {
                [staticSide]: `-${(arrowRef.current?.offsetWidth ?? 0) / 2}px`,
              }
            : {}),
        }}
        className={`${styles.popoverArrow} ${arrowPositionClassName}`.trim()}
      ></Tag>
    </Tag>
  );
};

PopoverContent.displayName = 'PopoverContent';
