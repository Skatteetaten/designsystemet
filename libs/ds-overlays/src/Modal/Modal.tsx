import { forwardRef, useEffect, useId, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { IconButton } from '@skatteetaten/ds-buttons';
import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { CancelSVGpath } from '@skatteetaten/ds-icons';
import { Heading } from '@skatteetaten/ds-typography';

import { getModalPaddingDefault } from './defaults';
import { ModalPadding, ModalProps } from './Modal.types';
import mergeRefs from '../utils';

import styles from './Modal.module.scss';

export const Modal = forwardRef<HTMLDialogElement, ModalProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      hideAutoClose,
      hideCloseButton,
      hideOutline,
      hideTitle,
      open,
      padding = getModalPaddingDefault(),
      title,
      onClose,
      children,
    },
    ref
  ): JSX.Element => {
    const ariaLabelId = `modalAriaLabelId-${useId()}`;
    const modalRef = useRef<HTMLDialogElement>(null);
    const mergedRef = useMemo(() => mergeRefs([modalRef, ref]), [ref]);
    const { t } = useTranslation('Shared', { i18n: dsI18n });

    useEffect((): any => {
      if (modalRef.current && open !== undefined) {
        if (open && !modalRef.current.open) {
          modalRef.current.showModal();
        } else if (!open && modalRef.current.open) {
          modalRef.current.close();
        }
      }

      const onClickOutside = (event: any): void => {
        const rect = event.target.getBoundingClientRect();
        if (
          rect.left > event.clientX ||
          rect.right < event.clientX ||
          rect.top > event.clientY ||
          rect.bottom < event.clientY
        ) {
          onClose && onClose();
          modalRef.current?.close();
        }
      };

      if (!hideAutoClose) {
        document.addEventListener('click', onClickOutside, true);
        return () => {
          document.removeEventListener('click', onClickOutside, true);
        };
      }
    }, [modalRef, open, hideAutoClose, onClose]);

    const hideTitleClassName = hideTitle ? styles.srOnly : '';
    const hideOutlineClassName = hideOutline ? styles.modalNoBorder : '';
    const paddingClassName =
      styles[`modalPadding${padding.toUpperCase() as Uppercase<ModalPadding>}`];

    return (
      <dialog
        ref={mergedRef}
        id={id}
        className={`${styles.modal} ${className} ${hideOutlineClassName} ${paddingClassName}`.trim()}
        lang={lang}
        data-testid={dataTestId}
        aria-labelledby={ariaLabelId}
        open={open}
        onCancel={onClose}
      >
        <Heading
          className={hideTitleClassName}
          id={ariaLabelId}
          as={'h1'}
          level={2}
          hasSpacing
        >
          {title}
        </Heading>
        <div></div>
        {!hideCloseButton && (
          <IconButton
            className={styles.closeButton}
            svgPath={CancelSVGpath}
            title={t('shared.Close')}
            onClick={(): void => {
              onClose && onClose();
              modalRef.current?.close();
            }}
          />
        )}
        {children}
      </dialog>
    );
  }
);

Modal.displayName = 'Modal';

export { getModalPaddingDefault };
