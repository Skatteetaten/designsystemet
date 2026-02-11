import { Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface RoleBannerProps extends BaseProps {
  ref?: Ref<HTMLDivElement>;
  /** Styrer rolle og navn til innloget bruker. */
  user: {
    /** Navn på bruker eller virksomhet */
    name: string;
    /** Identifikator, feks. orgnr eller fødselsdato */
    identifier: string;
    /** Hva slags rolle man representerer */
    role: 'meg' | 'andre' | 'virksomhet';
  };
  /** Skal banneret være sticky? */
  isSticky?: boolean;
}
