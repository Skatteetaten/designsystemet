import { AriaRole } from 'react';

import { BaseProps, Size, IconVariant } from '@skatteetaten/ds-core-utils';

/* type SvgHTMLAttributes = Pick<
  React.SVGAttributes<Record<string, never>>,
  'role' | 'viewBox' | 'tabIndex'
>; */

// Dette er en ekstend kun for å kunne legge til JSdoc beskrivelser
interface IconPropsHTMLAttributes {
  /** role-attributt som settes på svg-element */
  role?: AriaRole;
  /** viewbox-attributt som settes på svg-element. Default-verdien er avhengig av "variant"-prop som er oppgitt  */
  viewBox?: string;
  /**  tabIndex-attributt som settes på svg-element*/
  tabIndex?: number;
}

interface IconComponentCommonProps extends IconPropsHTMLAttributes, BaseProps {
  /** HTML-path node. Forhåndsdefinerte paths kan importeres fra @skatteetaten/ds-icons pakke. Alternativt kan custom path sendes. */
  svgPath: React.ReactElement;
}

type IconDiscriminatedTitleProps =
  | {
      /** Oppretter et title-element nested i svg. Dette medfører tooltip. */
      title?: string;
      /** Hvis svg-en er meningsbærende og ikke bare pynt/dekor skal elementet ha aria-label. Merk at aria-label vises kun når "title"-prop ikke allerede er angitt. */
      ariaLabel?: never;
    }
  | {
      /** Oppretter en title-tag nested i svg. Dette medfører tooltip. */
      title?: never;
      /** Hvis svg-en er meningsbærende og ikke bare pynt/dekor skal elementet ha ariaLabel. Merk at aria-label vises kun når "title"-prop ikke allerede er oppgitt. */
      ariaLabel?: string;
    };
type IconDiscriminatedVariantProps =
  | {
      /** Definerer detaljnivå på et ikon. De tilgjengelige størrelsene under "size" prop er avhengig av variant. */
      variant?: Extract<IconVariant, 'systemIcon'>;
      /** Subset av Size-type avhengig av "variant"-prop. Setter width og height på selve ikonet basert på Size verdi. */
      size?: Exclude<Size, 'extraSmall'>;
    }
  | {
      /** Definerer detaljnivå på et ikon. De tilgjengelige størrelsene under "size" prop er avhengig av variant. */
      variant?: Extract<IconVariant, 'themeIcon'>;
      /** Subset av Size-type avhengig av "variant"-prop. Setter width og height på selve ikonet basert på Size verdi. */
      size?: Extract<Size, 'medium' | 'large'>;
    };

export type IconPropsWithoutSvgPath = BaseProps &
  IconPropsHTMLAttributes &
  IconDiscriminatedVariantProps &
  IconDiscriminatedTitleProps;

export type IconProps = IconComponentCommonProps &
  IconDiscriminatedVariantProps &
  IconDiscriminatedTitleProps;
