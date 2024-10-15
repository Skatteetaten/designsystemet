import { BaseProps, Size } from '@skatteetaten/ds-core-utils';

export const chipVariantArr = ['clickable', 'selectable', 'closeable'] as const;
export type ChipVariant = (typeof chipVariantArr)[number];

// TODO: HTML ARIA EVENTS

export type ChipSize = Extract<Size, 'medium' | 'small'>;

interface ChipCommonProps extends BaseProps {
  size?: ChipSize;
  variant?: ChipVariant;
  children: string | string[];
  onClose?: () => void;
}

export type ChipProps = ChipCommonProps;
