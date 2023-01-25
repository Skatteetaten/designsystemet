import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface BlockquoteProps extends BaseProps {
  /** Tekst og markup for sitatet */
  children: React.ReactNode;
  /** Margin under sitatet */
  hasSpacing?: boolean;
}
