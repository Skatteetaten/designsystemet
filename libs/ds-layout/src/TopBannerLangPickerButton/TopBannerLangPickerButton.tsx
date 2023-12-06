import {
  forwardRef,
  JSX,
  MouseEvent,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { CheckSVGpath, Icon } from '@skatteetaten/ds-icons';

import { TopBannerLangPickerButtonProps } from './TopBannerLangPickerButton.types';
import { TopBannerLangPickerContext } from '../TopBannerLangPickerContext/TopBannerLangPickerContext';

import styles from './TopBannerLangPickerButton.module.scss';

export const TopBannerLangPickerButton = forwardRef<
  HTMLButtonElement,
  TopBannerLangPickerButtonProps
>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      flagIcon,
      // tabIndex = -1,
      ariaCurrent,
      onClick,
      children,
    },
    ref
  ): JSX.Element => {
    const context = useContext(TopBannerLangPickerContext);

    const buttonRef = useRef<HTMLButtonElement>(null);
    useImperativeHandle(ref, () => buttonRef?.current as HTMLButtonElement);

    useEffect(() => {
      if (context?.hasFocus && buttonRef.current) {
        buttonRef.current.focus();
      }
    }, [context?.hasFocus]);

    const handleClick = useCallback(
      (e: MouseEvent<HTMLButtonElement>) => {
        context?.setFocus(context?.index);
        // setLanguage(buttonLanguage);
        // setIsMenuOpen(false);
        console.log(`Handle Click - hva er index=${context?.index}`);

        onClick?.(e);
      },
      [context, onClick]
    );

    const concatenatedClassNames = `${
      ariaCurrent ? styles.buttonCurrent : ''
    } ${styles.button} ${className}`;

    return (
      <button
        ref={buttonRef}
        id={id}
        className={concatenatedClassNames}
        lang={lang}
        data-testid={dataTestId}
        tabIndex={context?.hasFocus ? 0 : -1}
        aria-current={ariaCurrent}
        onClick={handleClick}
      >
        <span className={styles.iconWrapper}>{flagIcon}</span>
        <span className={styles.buttonText}>{children}</span>
        {ariaCurrent && <Icon svgPath={CheckSVGpath} />}
      </button>
    );
  }
);

TopBannerLangPickerButton.displayName = 'TopBannerLangPickerButton';
