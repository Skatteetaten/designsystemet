import { forwardRef, useEffect, useState, JSX } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { MoveUpIcon } from '@skatteetaten/ds-icons';

import {
  getScrollToMainDefault,
  getVisibilityThresholdDefault,
} from './defaults';
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
      scrollToMain = getScrollToMainDefault(),
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
      return (): void => window.removeEventListener('scroll', onScroll);
    }, [visibilityThreshold]);

    const { t } = useTranslation('ds_buttons', { i18n: dsI18n });

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
          <div
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
          </div>
          <div
            className={`${styles.scrollToTopButtonLabel} ${
              classNames?.label ?? ''
            }`.trim()}
          >
            {children ? children : t('scrolltotopbutton.Title')}
          </div>
        </button>
      </div>
    );
  }
);
ScrollToTopButton.displayName = 'ScrollToTopButton';

export { getVisibilityThresholdDefault, getScrollToMainDefault };
