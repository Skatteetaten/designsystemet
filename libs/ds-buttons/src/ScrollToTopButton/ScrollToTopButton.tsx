import { useEffect, useState, JSX } from 'react';

import { dsI18n } from '@skatteetaten/ds-core-utils';
import { MoveUpIcon } from '@skatteetaten/ds-icons';

import { ScrollToTopButtonProps } from './ScrollToTopButton.types';

import styles from './ScrollToTopButton.module.scss';

export const getDefaultScrollToTopButtonText = (): string =>
  dsI18n.t('ds_buttons:scrolltotopbutton.Title');

/**
 * ScrollToTopButton
 *
 * @see [Dokumentasjon](https://skatteetaten.github.io/designsystemet/byggeklosser/komponenter/scrolltotopbutton)
 */
export const ScrollToTopButton = ({
  ref,
  id,
  className = '',
  classNames,
  lang,
  'data-testid': dataTestId,
  shadowRootNode,
  visibilityThreshold = 1,
  scrollToMain = true,
  children = getDefaultScrollToTopButtonText(),
}: ScrollToTopButtonProps): JSX.Element => {
  const [visible, setVisible] = useState<boolean>(!visibilityThreshold);
  useEffect(() => {
    const onScroll = (): void => {
      setVisible(window.scrollY >= visibilityThreshold);
    };

    window.addEventListener('scroll', onScroll);
    return (): void => window.removeEventListener('scroll', onScroll);
  }, [visibilityThreshold]);

  const buttonClassname = `${styles.scrollToTopButton} ${
    visible ? styles.scrollToTopButton_visible : ''
  } ${classNames?.button ?? ''}`.trim();

  const concatenatedClassName = `${styles.container} ${className} ${
    classNames?.container ?? ''
  }`.trim();

  return (
    <div className={concatenatedClassName}>
      <button
        ref={ref}
        id={id}
        className={buttonClassname}
        lang={lang}
        type={'button'}
        data-testid={dataTestId}
        onClick={(): void => {
          window.scrollTo(0, 0);
          const main = shadowRootNode
            ? shadowRootNode.querySelector('main')
            : document.querySelector('main');
          main?.focus({ preventScroll: !scrollToMain });
        }}
      >
        <span
          className={`${styles.scrollToTopButtonIconContainer} ${
            classNames?.iconContainer ?? ''
          }`.trim()}
        >
          <MoveUpIcon
            size={'large'}
            className={`${styles.scrollToTopButtonIconContainerIcon} ${
              classNames?.icon ?? ''
            }`.trim()}
          />
        </span>
        <span
          className={`${styles.scrollToTopButtonLabel} ${
            classNames?.label ?? ''
          }`.trim()}
        >
          {children}
        </span>
      </button>
    </div>
  );
};
ScrollToTopButton.displayName = 'ScrollToTopButton';
