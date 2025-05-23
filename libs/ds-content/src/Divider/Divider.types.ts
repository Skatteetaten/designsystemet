import { Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface DividerProps extends BaseProps {
  ref?: Ref<HTMLHRElement>;
  screenReaderOnly?: boolean;
}
