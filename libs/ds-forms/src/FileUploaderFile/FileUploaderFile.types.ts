import { HTMLProps, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

type RequiredLinkHTMLAttributes = Pick<
  HTMLProps<HTMLAnchorElement>,
  'href' | 'onClick'
>;

type LinkHTMLAttributes = Partial<RequiredLinkHTMLAttributes>;

export interface FileUploaderFileProps extends BaseProps, LinkHTMLAttributes {
  ref?: Ref<HTMLLIElement>;
  /** Overskriver default tittel på fil-ikonet */
  fileIconTitle?: string;
  /** Callback som kalles ved klikk på slett-knappen*/
  onClickDelete?: () => Promise<void>;
  /** Skal det vises spinner i stedet for hakeikon ved filen */
  showSpinner?: boolean;
  /** Overskriver default tittel på ikonet som viser at opplasting av fil er vellykket*/
  successIconTitle?: string;
  /** Filnavn */
  children: string;
}
