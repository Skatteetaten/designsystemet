import { Ref } from 'react';

import { ButtonProps } from '@skatteetaten/ds-buttons';
import { BaseProps } from '@skatteetaten/ds-core-utils';

type PropsFromButton = Pick<ButtonProps, 'onClick'>;

type WordInfoTriggerCommonProps = BaseProps & {
  ref?: Ref<HTMLButtonElement>;
  /** Om bok-ikonet er synlig */
  hasIcon?: boolean;
  /** Tekst som trenger ordforklaring */
  children: string;
};

export interface WordInfoTriggerProps
  extends WordInfoTriggerCommonProps,
    Partial<PropsFromButton> {}
