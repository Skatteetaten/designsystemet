import { forwardRef, JSX } from 'react';

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

export const Panel = forwardRef<HTMLDivElement, PanelProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
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

    return (
      <div
        ref={ref}
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
              as={titleAs}
              level={3}
              className={hideTitle ? styles.srOnly : ''}
              hasSpacing={!subtitle || hideSubtitle}
            >
              {title}
            </Heading>
          )}
          {subtitle && (
            <Heading
              as={subtitleAs}
              level={5}
              className={hideSubtitle ? styles.srOnly : ''}
              hasSpacing
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
