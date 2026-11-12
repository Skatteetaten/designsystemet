import { useEffect, useImperativeHandle, useRef, useState, JSX } from 'react';
import { useTranslation } from 'react-i18next';

import {
  arrow,
  autoUpdate,
  flip,
  FloatingFocusManager,
  offset,
  shift,
  useDismiss,
  useFloating,
  useInteractions,
  useMergeRefs,
} from '@floating-ui/react';

import { InlineButton } from '@skatteetaten/ds-buttons';
import { dsI18n } from '@skatteetaten/ds-core-utils';
import { MenuSVGpath } from '@skatteetaten/ds-icons';

import { TopBannerInternalActionMenuProps } from './TopBannerInternalActionMenu.types';

import styles from './TopBannerInternalActionMenu.module.scss';

export const getDefaultMenuLabel = (): string =>
  dsI18n.t('ds_layout:topbannerbutton.Menu');

export const defaultMenuSvgPath = {
  name: 'MenuSVGpath',
  svgPath: MenuSVGpath,
};

/* eslint-disable react-compiler/react-compiler */

/* eslint-disable react/forbid-dom-props */
export const TopBannerInternalActionMenu = ({
  ref,
  id,
  className = '',
  lang,
  'data-testid': dataTestId,
  menuActionsRef,
  menuLabel = getDefaultMenuLabel(),
  svgPath = defaultMenuSvgPath.svgPath,
  children,
}: TopBannerInternalActionMenuProps): JSX.Element => {
  useTranslation('ds_layout', { i18n: dsI18n });
  const arrowRef = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const floatingData = useFloating<HTMLButtonElement>({
    open: isOpen,
    onOpenChange: (open) => {
      setOpen(open);
    },
    placement: 'bottom',
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(() => ({
        // +6 for at pilen skal ligge på utsiden av outline på knappen
        mainAxis: (Math.SQRT2 * (arrowRef.current?.offsetWidth ?? 0)) / 2 + 6,
      })),
      flip(),
      shift(),
      arrow(() => ({
        element: arrowRef,
        padding: (arrowRef.current?.offsetWidth ?? 0) / 2,
      })),
    ],
  });

  const dismiss = useDismiss(floatingData.context, {
    ancestorScroll: true,
  });
  const interactions = useInteractions([dismiss]);
  const { refs, floatingStyles, middlewareData, placement } = floatingData;
  const { getFloatingProps, getReferenceProps } = interactions;

  const buttonRef = useRef<HTMLButtonElement>(null);
  const mergedButtonRef = useMergeRefs([refs.setReference, buttonRef, ref]);

  useImperativeHandle(menuActionsRef, () => ({
    open: (): void => setOpen(true),
    close: (): void => setOpen(false),
  }));

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.ariaExpanded = isOpen.toString();
    }
  }, [isOpen]);
  return (
    <>
      <InlineButton
        id={id}
        className={className}
        lang={lang}
        data-testid={dataTestId}
        {...getReferenceProps()}
        ref={mergedButtonRef}
        svgPath={svgPath}
        brightness={'light'}
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        {menuLabel}
      </InlineButton>
      {isOpen && (
        <FloatingFocusManager
          returnFocus={buttonRef}
          context={floatingData.context}
          modal={false}
          // -1 her for å hindre at fokusManager overstyrer fokus vekk fra knappen når menyen åpnes
          initialFocus={-1}
        >
          <div
            className={styles.menu}
            {...getFloatingProps()}
            ref={refs.setFloating}
            style={floatingStyles}
            data-placement={placement}
          >
            {children}
            <div
              ref={arrowRef}
              className={`${styles.arrow}`.trim()}
              style={{
                left: middlewareData.arrow?.x,
              }}
            ></div>
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
};

TopBannerInternalActionMenu.displayName = 'TopBannerInternalActionMenu';
