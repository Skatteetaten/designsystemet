import { forwardRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { MoveUpIcon } from '@skatteetaten/ds-icons';

import { getVisibilityThresholdDefault } from './defaults';
import { ScrollToTopButtonProps } from './ScrollToTopButton.types';

import styles from './ScrollToTopButton.module.scss';

export const ScrollToTopButton = forwardRef<
  HTMLButtonElement,
  ScrollToTopButtonProps
>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      classNames,
      lang,
      'data-testid': dataTestId,
      shadowRootNode,
      visibilityThreshold = getVisibilityThresholdDefault(),
      children,
    },
    ref
  ): JSX.Element => {
    const [visible, setVisible] = useState<boolean>(!visibilityThreshold);
    useEffect(() => {
      const onScroll = (): void => {
        setVisible(window.scrollY >= visibilityThreshold);
      };

      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }, [visibilityThreshold]);

    const { t } = useTranslation('ds_buttons', { i18n: dsI18n });

    const buttonClassname = `${styles.scrollToTopButton} ${
      visible ? styles.scrollToTopButton_visible : ''
    } ${classNames?.button ?? ''}`;

    const concatenatedClassName = `${styles.container} ${className} ${
      classNames?.container ?? ''
    }`;

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
            main?.focus();
          }}
        >
          <div
            className={`${styles.scrollToTopButtonIconContainer} ${
              classNames?.iconContainer ?? ''
            }`}
          >
            <MoveUpIcon
              size={'large'}
              className={`${styles.scrollToTopButtonIconContainerIcon} ${
                classNames?.icon ?? ''
              }`}
            />
          </div>
          <div
            className={`${styles.scrollToTopButtonLabel} ${
              classNames?.label ?? ''
            }`}
          >
            {children ? children : t('scrolltotopbutton.Title')}
          </div>
        </button>
      </div>
    );
  }
);
ScrollToTopButton.displayName = 'ScrollToTopButton';

export { getVisibilityThresholdDefault };
