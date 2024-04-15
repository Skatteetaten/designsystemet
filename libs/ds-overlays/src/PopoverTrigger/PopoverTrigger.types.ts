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
export interface PopoverTriggerProps
  extends BaseProps,
    Partial<PropsFromIconButton> {}
