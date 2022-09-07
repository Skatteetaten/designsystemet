export interface BaseProps {
  id?: string;
  className?: string;
  'data-testid'?: string;
}

export type Variant = 'primary' | 'secondary' | 'tertiary';
export type Size = 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge';
