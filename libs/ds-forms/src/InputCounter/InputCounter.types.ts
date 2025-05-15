import { RefObject } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface InputCounterProps extends BaseProps {
  inputRef:
    | RefObject<HTMLInputElement | null>
    | RefObject<HTMLTextAreaElement | null>;
  value?: string;
  characterLimit: number;
}
