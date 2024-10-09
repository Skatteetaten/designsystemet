import {
  ElementRef,
  forwardRef,
  JSX,
  ReactNode,
  RefObject,
  useImperativeHandle,
  useRef,
} from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { Heading } from '@skatteetaten/ds-typography';

import {
  getPanelVariantDefault,
  getPanelSpacingDefault,
  getPanelColorDefault,
  getPanelTitleAsDefault,
  getPanelSubtitleAsDefault,
  getPanelPaddingDefault,
} from './defaults';
import { PanelPadding, PanelProps, PanelSpacing } from './Panel.types';

import styles from './Panel.module.scss';

interface InputAndButtonRefs {
  headingRef: RefObject<HTMLHeadingElement>;
  buttonRef: RefObject<HTMLButtonElement>;
  focus: () => void;
}

export const Panel = forwardRef<InputAndButtonRefs, PanelProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      canManuallySetTitleFocus,
      color = getPanelColorDefault(),
      imageSource,
      imageSourceAltText,
      padding = getPanelPaddingDefault(),
      spacing = getPanelSpacingDefault(),
      subtitle,
      subtitleAs = getPanelSubtitleAsDefault(),
      title,
      titleAs = getPanelTitleAsDefault(),
      variant = getPanelVariantDefault(),
      hideGraphicMobile,
      hideSubtitle,
      hideTitle,
      renderIcon,
      children,
      //      headingRef: externalHeadingRef,
    },
    ref
  ): JSX.Element => {
    const panelVariantClassName =
      variant === 'filled' ? styles.panel_filled : styles.panel_outline;
    const panelColorClassName = styles[`panel_${color}`];
    const panelPaddingClassName =
      styles[
        `panel_padding${padding.toUpperCase() as Uppercase<PanelPadding>}`
      ];
    const panelSpacingClassName =
      styles[
        `panel_spacing${spacing.toUpperCase() as Uppercase<PanelSpacing>}`
      ];

    let panelGraphicClassName = '';
    if (imageSource) {
      panelGraphicClassName = styles.panel_graphicImage;
    } else if (renderIcon) {
      panelGraphicClassName = `${styles.panel_graphicIcon} ${
        hideGraphicMobile ? styles.panel_graphicIconHide : ''
      }`;
    }
    const panelClassName =
      `${styles.panel} ${panelVariantClassName} ${panelColorClassName} ${panelPaddingClassName} ${panelSpacingClassName} ${panelGraphicClassName} ${className}`.trim();

    const graphicClassName = `${styles.panelGraphic} ${
      hideGraphicMobile ? styles.panelGraphicHide : ''
    }`.trim();
    const iconClassName = `${renderIcon ? graphicClassName : ''}`.trim();
    const articleClassName = `${styles.panelArticle}`.trim();

    const headingRef = useRef<HTMLHeadElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useImperativeHandle(ref, () => {
      return {
        focus: () => {
          headingRef?.current?.focus();
        },
        headingRef,
        buttonRef,
        // get heading() {
        //   return headingRef.current;
        // },
        // get button() {
        //   return buttonRef.current;
        // },
      };
    });
    return (
      <div
        //ref={ref}
        id={id}
        className={panelClassName}
        lang={lang}
        data-testid={dataTestId}
      >
        {!renderIcon && imageSource && (
          <div className={`${graphicClassName}`}>
            <img
              src={imageSource}
              alt={imageSourceAltText ?? ''}
              className={styles.panelImage}
            />
          </div>
        )}
        {!imageSource && renderIcon && (
          <div className={iconClassName}>{renderIcon?.()}</div>
        )}
        <div className={articleClassName}>
          {title && (
            <Heading
              ref={ref}
              as={titleAs}
              level={3}
              className={hideTitle ? styles.srOnly : ''}
              hasSpacing={!subtitle || hideSubtitle}
              canBeManuallyFocused={canManuallySetTitleFocus}
            >
              {title}
            </Heading>
          )}
          {subtitle && (
            <Heading
              //              ref={{ headingRef, dummyRef }}
              as={subtitleAs}
              level={5}
              className={hideSubtitle ? styles.srOnly : ''}
              hasSpacing
              // headingRef={headingRef}
            >
              {subtitle}
            </Heading>
          )}
          {children}
        </div>
      </div>
    );
  }
);

Panel.displayName = 'Panel';

export {
  getPanelVariantDefault,
  getPanelSpacingDefault,
  getPanelColorDefault,
  getPanelTitleAsDefault,
  getPanelSubtitleAsDefault,
  getPanelPaddingDefault,
};

export const ComponentParent = forwardRef<
  HTMLDivElement,
  { children: ReactNode }
>(({ children }, ref): JSX.Element => {
  return <ComponentChild>{children}</ComponentChild>;
});

export const ComponentChild = forwardRef<
  HTMLDivElement,
  { level1?: string; children: ReactNode }
>(({ level1, children }, ref): JSX.Element => {
  return (
    <div ref={ref}>
      {level1}
      {children}
    </div>
  );
});

export const ComponentGrandChild = forwardRef<
  HTMLDivElement,
  { children: JSX.Element }
>(({ children }, ref): JSX.Element => {
  return (
    <div ref={ref}>
      {children}
      <label>
        Input 1:
        <input id={'id1'} />
      </label>
      <label>
        Input 2:
        <input id={'id2'} />
      </label>
    </div>
  );
});
