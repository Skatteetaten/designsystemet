import { Dispatch, Ref, SetStateAction } from 'react';

export interface SearchFieldResultProps {
  ref?: Ref<HTMLLIElement>;
  className?: string;
  title?: string;
  hasFocus?: boolean;
  children: string;
  setFocus: Dispatch<SetStateAction<number>>;
  index: number;
  onClick?: () => void;
}
