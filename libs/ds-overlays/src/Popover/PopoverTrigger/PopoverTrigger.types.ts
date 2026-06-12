import { Ref } from 'react';

import { IconButtonProps } from '@skatteetaten/ds-buttons';
import { BaseProps } from '@skatteetaten/ds-core-utils';

type PropsFromIconButton = Pick<
  IconButtonProps,
  | 'size'
  | 'svgPath'
  | 'title'
  | 'ariaDescribedby'
  | 'onClick'
  | 'onBlur'
  | 'onFocus'
>;

type PopoverTriggerCommonProps = BaseProps & {
  ref?: Ref<HTMLButtonElement>;
  /** Om rammen til knappen skal skjules */
  hideOutline?: boolean;
};

export interface PopoverTriggerProps
  extends PopoverTriggerCommonProps,
    Partial<PropsFromIconButton> {}
