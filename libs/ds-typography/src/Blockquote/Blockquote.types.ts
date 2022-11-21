import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface BlockquoteProps extends BaseProps {
  /** Tekst og markup for sitatet */
  children: React.ReactNode | string;
  /** Margin under sitatet */
  hasSpacing?: boolean;
}
