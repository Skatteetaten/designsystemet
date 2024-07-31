import {
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
} from 'react';
import { useTranslation } from 'react-i18next';

import { IconButton } from '@skatteetaten/ds-buttons';
import {
  Separator,
  SkatteetatenLogo,
  dsI18n,
  getCommonClassNameDefault,
} from '@skatteetaten/ds-core-utils';
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

export const Modal = forwardRef<HTMLDialogElement, ModalProps>(
  (
    {
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
      children,
    },
    ref
  ): JSX.Element => {
    const headingId = `modalHeadingId-${useId()}`;
    const { t } = useTranslation('ds_overlays', { i18n: dsI18n });

    const statusFlagRef = useRef({
      mouseDownCaptured: false,
    });

    const modalRef = useRef<HTMLDialogElement>(null);
    useImperativeHandle(ref, () => modalRef?.current as HTMLDialogElement);

    useEffect(() => {
      if (!dismissOnOutsideClick) {
        return;
      }
      const onClickOutside = (event: MouseEvent): void => {
        if (event.type === 'mousedown') {
          statusFlagRef.current.mouseDownCaptured = false;
        }
        const element = shadowRootNode
          ? (shadowRootNode?.activeElement as HTMLElement)
          : (event.target as HTMLElement);
        if (
          !(event.target instanceof HTMLElement) ||
          element?.tagName !== 'DIALOG'
        ) {
          return;
        }
        const rect = event.target.getBoundingClientRect();
        if (
          rect.left > event.clientX ||
          rect.right < event.clientX ||
          rect.top > event.clientY ||
          rect.bottom < event.clientY
        ) {
          if (
            event.type === 'mouseup' &&
            statusFlagRef.current.mouseDownCaptured
          ) {
            onClose?.();
            modalRef.current?.close();
          } else {
            statusFlagRef.current.mouseDownCaptured = true;
            return;
          }
        }
      };
      document.addEventListener('mouseup', onClickOutside);
      document.addEventListener('mousedown', onClickOutside);
      return () => {
        document.removeEventListener('mouseup', onClickOutside);
        document.removeEventListener('mousedown', onClickOutside);
      };
    }, [
      modalRef,
      dismissOnOutsideClick,
      onClose,
      shadowRootNode,
      modalRef?.current?.open,
    ]);

    const hideTitleClassName = hideTitle ? styles.srOnly : '';
    const hideOutlineClassName =
      variant === 'plain' || variant === 'important'
        ? styles.modalNoBorder
        : '';
    const paddingClassName =
      styles[`modalPadding${padding.toUpperCase() as Uppercase<ModalPadding>}`];
    const noPaddingTop = imageSource ? styles.modalNoPaddingTop : '';
    const headingNoPaddingClassName =
      padding === 'mega' ? styles.modalHeadingNoPadding : '';

    return (
      <dialog
        ref={modalRef}
        id={id}
        className={`${styles.modal} ${hideOutlineClassName} ${className} ${
          classNames?.container ?? ''
        }`.trim()}
        lang={lang}
        data-testid={dataTestId}
        aria-labelledby={headingId}
        autoFocus
        /* Merk at onCancel kan ikke brukes til å hindre lukking fordi to trykk på esc lukker allikevel i chrome  */
        onKeyDown={(e) => {
          if (!dismissOnEsc && e.key === 'Escape') {
            e.preventDefault();
          } else {
            onClose?.();
          }
        }}
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
            {variant === 'important' && (
              <SkatteetatenLogo className={styles.modalLogo} />
            )}
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
          {variant === 'important' && <Separator />}
        </div>
      </dialog>
    );
  }
);

Modal.displayName = 'Modal';

export {
  getModalPaddingDefault,
  getModalVariantDefault,
  getModalDismissOnOutsideClickDefault,
  getModalDismissOnEscDefault,
};
