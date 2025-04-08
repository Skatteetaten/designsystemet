import {
  useId,
  useImperativeHandle,
  useRef,
  MouseEvent,
  JSX,
  useState,
  useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';

import { IconButton } from '@skatteetaten/ds-buttons';
import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { CancelSVGpath } from '@skatteetaten/ds-icons';
import { Heading } from '@skatteetaten/ds-typography';

import {
  getModalDismissOnEscDefault,
  getModalDismissOnOutsideClickDefault,
  getModalPaddingDefault,
  getModalVariantDefault,
} from './defaults';
import { ModalPadding, ModalProps } from './Modal.types';

import styles from './Modal.module.scss';

export const Modal = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  classNames,
  lang,
  'data-testid': dataTestId,
  dismissOnEsc = getModalDismissOnEscDefault(),
  dismissOnOutsideClick = getModalDismissOnOutsideClickDefault(),
  hideCloseButton,
  hideTitle,
  imageSource,
  imageSourceAltText,
  padding = getModalPaddingDefault(),
  title,
  variant = getModalVariantDefault(),
  shadowRootNode,
  onClose,
  renderIcon,
  children,
}: ModalProps): JSX.Element => {
  const headingId = `modalHeadingId-${useId()}`;
  const { t } = useTranslation('ds_overlays', { i18n: dsI18n });

  const statusFlagRef = useRef({
    mouseDownCaptured: false,
    hasUserInteractionBeforeOpen: false,
    isOpenedAtLeastOnce: false,
  });

  const modalRef = useRef<HTMLDialogElement>(null);
  useImperativeHandle(ref, () => modalRef?.current as HTMLDialogElement);

  const [isAutoOpened, setIsAutoOpened] = useState<boolean>();

  useEffect(() => {
    const dialog = modalRef.current;
    if (dialog) {
      const originalMethod = dialog.showModal;
      dialog.showModal = function showModal(...args): void {
        statusFlagRef.current.isOpenedAtLeastOnce = true;
        setIsAutoOpened(!statusFlagRef.current.hasUserInteractionBeforeOpen);
        originalMethod.apply(dialog, args);
      };
    }

    const handleUserInteraction = (): void => {
      if (!statusFlagRef.current.isOpenedAtLeastOnce) {
        statusFlagRef.current.hasUserInteractionBeforeOpen = true;
      }
    };

    document.addEventListener('mousedown', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    return (): void => {
      document.removeEventListener('mousedown', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, []);

  useEffect(() => {
    const dialog = modalRef.current;
    const handleClose = (): void => {
      if (isAutoOpened) {
        setIsAutoOpened(false);
        statusFlagRef.current.hasUserInteractionBeforeOpen = true;
        const elementToFocus: HTMLDivElement | null = shadowRootNode
          ? shadowRootNode.querySelector('#topbanner-focus-target')
          : document.querySelector('#topbanner-focus-target');
        if (elementToFocus) {
          elementToFocus?.focus();
        } else {
          const prevTabIndex = document.body.tabIndex;
          document.body.tabIndex = -1;
          document.body.focus();
          document.body.tabIndex = prevTabIndex;
        }
      }
    };

    if (dialog) {
      dialog.addEventListener('close', handleClose);
    }
    return (): void => {
      if (dialog) {
        dialog.removeEventListener('close', handleClose);
      }
    };
  }, [isAutoOpened, shadowRootNode]);

  useEffect(() => {
    /**
     * Hvis konsument endrer children i en åpen modal, vil fokus settes til body og dismissOnEsc vil slutte å fungere.
     * Setter derfor fokus tilbake til modalen.
     */
    if (
      !dismissOnEsc &&
      modalRef.current?.open &&
      document.activeElement?.nodeName === 'BODY'
    ) {
      modalRef.current.focus();
    }
  }, [children, dismissOnEsc]);

  const isClickOutside = (event: MouseEvent): boolean => {
    if (!(event.currentTarget instanceof HTMLElement)) {
      return true;
    }
    const rect = event.currentTarget.getBoundingClientRect();
    return (
      rect.left > event.clientX ||
      rect.right < event.clientX ||
      rect.top > event.clientY ||
      rect.bottom < event.clientY
    );
  };

  const handleMouseEvent = (event: MouseEvent): void => {
    if (!dismissOnOutsideClick || !(event.target instanceof HTMLElement)) {
      return;
    }
    if (event.type === 'mousedown') {
      statusFlagRef.current.mouseDownCaptured = false;
    }
    if (isClickOutside(event)) {
      if (event.type === 'mouseup' && statusFlagRef.current.mouseDownCaptured) {
        onClose?.();
        modalRef.current?.close();
      } else {
        statusFlagRef.current.mouseDownCaptured = true;
      }
    }
  };

  const hideTitleClassName = hideTitle ? styles.srOnly : '';
  const paddingClassName =
    styles[`modalPadding${padding.toUpperCase() as Uppercase<ModalPadding>}`];
  const noPaddingTop = imageSource ? styles.modalNoPaddingTop : '';
  const headingNoPaddingClassName =
    padding === 'mega' ? styles.modalHeadingNoPadding : '';

  return (
    <dialog
      ref={modalRef}
      id={id}
      className={`${styles.modal} ${className} ${
        classNames?.container ?? ''
      }`.trim()}
      lang={lang}
      data-testid={dataTestId}
      aria-labelledby={headingId}
      data-variant={variant}
      autoFocus
      /* Må bruke onCancel i kombinasjon med onKeyDown siden to trykk på esc lukker modalen i chrome (https://issues.chromium.org/issues/41491338) */
      onCancel={(e) => !dismissOnEsc && e.preventDefault()}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          if (dismissOnEsc) {
            onClose?.();
            modalRef.current?.close();
          } else {
            e.preventDefault();
          }
        }
      }}
      onMouseUp={handleMouseEvent}
      onMouseDown={handleMouseEvent}
    >
      <div tabIndex={-1} className={styles.modalContainer}>
        {!hideCloseButton && (
          <IconButton
            className={styles.closeButton}
            svgPath={CancelSVGpath}
            title={t('modal.CloseModal')}
            onClick={(): void => {
              onClose?.();
              modalRef.current?.close();
            }}
          />
        )}
        {imageSource && (
          <img
            src={imageSource}
            alt={imageSourceAltText ?? ''}
            className={`${styles.modalIllustration} ${
              classNames?.image ?? ''
            }`.trim()}
          />
        )}
        <div className={`${paddingClassName} ${noPaddingTop}`.trim()}>
          {renderIcon && <div>{renderIcon?.()}</div>}
          <Heading
            className={`${styles.modalHeading} ${headingNoPaddingClassName} ${hideTitleClassName}`.trim()}
            id={headingId}
            as={'h1'}
            level={3}
            hasSpacing
          >
            {title}
          </Heading>
          {children}
        </div>
      </div>
    </dialog>
  );
};

Modal.displayName = 'Modal';

export {
  getModalPaddingDefault,
  getModalVariantDefault,
  getModalDismissOnOutsideClickDefault,
  getModalDismissOnEscDefault,
};
