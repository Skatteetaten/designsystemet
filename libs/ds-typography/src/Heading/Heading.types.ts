import { BaseProps } from '@skatteetaten/ds-core-utils';

export const headingAsArr = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
export type HeadingAs = typeof headingAsArr[number];

export const headingLevelArr = [1, 2, 3, 4, 5] as const;
export type HeadingLevel = typeof headingLevelArr[number];

export interface HeadingProps extends BaseProps {
  /** Heading tag h1-6 */
  as: HeadingAs;
  /** Tekst eller markup for heading */
  children: React.ReactNode | string;
  /** Margin under heading */
  hasSpacing?: boolean;
  /** Hierarkinivå som styrer font størrelse, line height og spacing */
  level: HeadingLevel;
}
