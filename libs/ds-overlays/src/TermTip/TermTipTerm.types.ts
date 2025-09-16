import { Ref } from 'react';

import { ButtonProps } from '@skatteetaten/ds-buttons';
import { BaseProps } from '@skatteetaten/ds-core-utils';

type PropsFromLink = Pick<ButtonProps, 'onClick'>;

type TermTipTermCommonProps = BaseProps & {
  ref?: Ref<HTMLButtonElement>;
  /** Om bok-ikonet er synlig */
  hasIcon?: boolean;
  /** Tekst som trenger ordforklaring */
  children: string;
};

export interface TermTipTermProps
  extends TermTipTermCommonProps,
    Partial<PropsFromLink> {}
