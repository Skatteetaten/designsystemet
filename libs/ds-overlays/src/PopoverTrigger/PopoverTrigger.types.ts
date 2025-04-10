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
};

export interface PopoverTriggerProps
  extends PopoverTriggerCommonProps,
    Partial<PropsFromIconButton> {}
