import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type JSX,
} from 'react';
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
import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { MenuSVGpath } from '@skatteetaten/ds-icons';

import { TopBannerInternalActionMenuProps } from './TopBannerInternalActionMenu.types';

import styles from './TopBannerInternalActionMenu.module.scss';

/* eslint-disable react-compiler/react-compiler */

/* eslint-disable react/forbid-dom-props */
export const TopBannerInternalActionMenu = forwardRef<
  HTMLButtonElement,
  TopBannerInternalActionMenuProps
>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      menuActionsRef,
      children,
    },
    ref
  ): JSX.Element => {
    const arrowRef = useRef<HTMLDivElement>(null);
    const arrowLen = arrowRef.current?.offsetWidth ?? 0;
    // +6 for at pilen skal ligge på utsiden av outline på knappen
    const floatingOffset = Math.sqrt(2 * arrowLen ** 2) / 2 + 6;

    const [isOpen, setOpen] = useState<boolean>(false);

    const floatingData = useFloating<HTMLButtonElement>({
      open: isOpen,
      onOpenChange: (open) => {
        setOpen(open);
      },
      placement: 'bottom-start',
      whileElementsMounted: autoUpdate,
      middleware: [
        offset({ mainAxis: floatingOffset, alignmentAxis: -32 }),
        flip(),
        shift(),
        arrow({ element: arrowRef }),
      ],
    });

    const dismiss = useDismiss(floatingData.context, {
      ancestorScroll: true,
    });
    const interactions = useInteractions([dismiss]);
    const { refs, floatingStyles, middlewareData } = floatingData;
    const { getFloatingProps, getReferenceProps } = interactions;

    const { t } = useTranslation('ds_layout', { i18n: dsI18n });

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
          svgPath={MenuSVGpath}
          brightness={'light'}
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          {t('topbannerbutton.Menu')}
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
            >
              {children}

              <div
                ref={arrowRef}
                style={{
                  left: middlewareData.arrow?.x,
                  top: `-${(arrowRef.current?.offsetWidth ?? 0) / 2}px`,
                }}
                className={`${styles.arrow}`.trim()}
              ></div>
            </div>
          </FloatingFocusManager>
        )}
      </>
    );
  }
);
