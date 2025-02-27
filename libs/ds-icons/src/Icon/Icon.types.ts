import { ReactElement } from 'react';

import { BaseProps, Size } from '@skatteetaten/ds-core-utils';

export const iconVariantArr = ['systemIcon', 'themeIcon'] as const;
export type IconVariant = (typeof iconVariantArr)[number];

export interface IconComponentCommonProps extends BaseProps {
  /** HTML-path node. Forhåndsdefinerte paths kan importeres fra ds-icons pakke. Alternativt kan custom path sendes. */
  svgPath: ReactElement<SVGPathElement>;
}

export type IconDiscriminatedTitleProps =
  | {
      /** Oppretter et title-element nested i svg. Dette medfører tooltip. */
      title?: string;
      /** Hvis svg-en er meningsbærende og ikke bare pynt/dekor skal elementet ha ariaLabel. Merk at aria-label vises kun når "title"-prop ikke allerede er oppgitt. */
      ariaLabel?: never;
    }
  | {
      /** Oppretter et title-element nested i svg. Dette medfører tooltip. */
      title?: never;
      /** Hvis svg-en er meningsbærende og ikke bare pynt/dekor skal elementet ha ariaLabel. Merk at aria-label vises kun når "title"-prop ikke allerede er oppgitt. */
      ariaLabel?: string;
    };

export type IconDiscriminatedVariantProps =
  | {
      /**
       * Definerer detaljnivå på et ikon.
       * "systemIcon" har en viewBox på 0 0 24 24, mens "themeIcon" har en viewBox på 0 0 48 48
       * De tilgjengelige størrelsene under "size" prop er avhengig av variant.
       */
      variant?: Extract<IconVariant, 'systemIcon'>;
      /** Subset av Size-type avhengig av "variant"-prop. Setter width og height på selve ikonet basert på Size verdi. */
      size?: Exclude<Size, 'extraSmall'>;
    }
  | {
      /**
       * Definerer detaljnivå på et ikon.
       * "systemIcon" har en viewBox på 0 0 24 24, mens "themeIcon" har en viewBox på 0 0 48 48
       * De tilgjengelige størrelsene under "size" prop er avhengig av variant.
       */
      variant?: Extract<IconVariant, 'themeIcon'>;
      /** Subset av Size-type avhengig av "variant"-prop. Setter width og height på selve ikonet basert på Size verdi. */
      size?: Extract<Size, 'medium' | 'large'>;
    };

export type IconPropsWithoutSvgPath = BaseProps &
  IconDiscriminatedVariantProps &
  IconDiscriminatedTitleProps;

export type IconProps = IconComponentCommonProps &
  IconDiscriminatedVariantProps &
  IconDiscriminatedTitleProps;
