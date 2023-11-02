import { forwardRef, useEffect, useId, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { IconButton } from '@skatteetaten/ds-buttons';
import {
  Separator,
  SymbolLogo,
  dsI18n,
  getCommonClassNameDefault,
} from '@skatteetaten/ds-core-utils';
import { CancelSVGpath } from '@skatteetaten/ds-icons';
import { Heading } from '@skatteetaten/ds-typography';

import { getModalPaddingDefault, getModalVariantDefault } from './defaults';
import { ModalPadding, ModalProps } from './Modal.types';
import mergeRefs from '../utils';

import styles from './Modal.module.scss';

export const Modal = forwardRef<HTMLDialogElement, ModalProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      classNames,
      lang,
      'data-testid': dataTestId,
      hideAutoClose,
      hideCloseButton,
      hideOutline,
      hideTitle,
      imageSource,
      imageSourceAltText,
      padding = getModalPaddingDefault(),
      title,
      variant,
      open,
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
    }, [modalRef, hideAutoClose, onClose]);

    const hideTitleClassName = hideTitle ? styles.srOnly : '';
    const hideOutlineClassName =
      hideOutline || variant === 'important' ? styles.modalNoBorder : '';
    const paddingClassName =
      styles[`modalPadding${padding.toUpperCase() as Uppercase<ModalPadding>}`];
    const noPaddingTop = imageSource ? styles.modalNoPaddingTop : '';
    const headingNoPaddingClassName =
      padding === 'mega' ? styles.modalHeadingNoPadding : '';

    return (
      <dialog
        ref={mergedRef}
        id={id}
        className={`${styles.modal} ${hideOutlineClassName} ${className} ${
          classNames?.container ?? ''
        }`.trim()}
        lang={lang}
        data-testid={dataTestId}
        aria-labelledby={ariaLabelId}
        open={open}
        autoFocus
        onCancel={onClose}
      >
        {imageSource && (
          <img
            src={imageSource}
            alt={imageSourceAltText}
            className={`${styles.modalIllustration} ${
              classNames?.image ?? ''
            }`.trim()}
          />
        )}
        <div
          tabIndex={-1}
          className={`${paddingClassName} ${noPaddingTop}`.trim()}
        >
          {variant === 'important' && (
            <SymbolLogo className={styles.modalSymbolLogo} />
          )}
          <Heading
            className={`${styles.modalHeading} ${headingNoPaddingClassName} ${hideTitleClassName}`.trim()}
            id={ariaLabelId}
            as={'h1'}
            level={3}
            hasSpacing
          >
            {title}
          </Heading>
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
        </div>
        {variant === 'important' && <Separator />}
      </dialog>
    );
  }
);

Modal.displayName = 'Modal';

export { getModalPaddingDefault, getModalVariantDefault };
