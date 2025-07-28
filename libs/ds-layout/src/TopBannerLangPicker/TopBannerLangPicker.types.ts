import {
  Dispatch,
  FunctionComponent,
  MouseEventHandler,
  Ref,
  RefObject,
  SetStateAction,
} from 'react';

import { BaseProps, Languages } from '@skatteetaten/ds-core-utils';

import { LanguageItem } from './utils';
import { TopBannerMenu } from '../TopBannerExternal/TopBannerExternal.types';
import { TopBannerLangPickerButton } from '../TopBannerLangPickerButton/TopBannerLangPickerButton';

type AdditionalLanguages = Array<LanguageItem & { flag: FunctionComponent }>;

export interface TopBannerLangPickerProps extends BaseProps {
  ref?: Ref<HTMLDivElement>;
  /** Hvilket språk som skal være forhåndsvalgt. */
  defaultLocale?: Languages | string;
  /** Callback når et språk trykkes på. */
  onLanguageClick?: MouseEventHandler<HTMLButtonElement>;
  /** Om samisk språk skal vises eller ikke. */
  showSami?: boolean;
  /** Hvilken meny som er åpen i TopBanner. */
  openMenu: TopBannerMenu;
  /** Setter hvilken meny som er åpen. */
  setOpenMenu: Dispatch<SetStateAction<TopBannerMenu>>;
  menuButtonRef?: RefObject<HTMLButtonElement | null>;
  additionalLanguages?: AdditionalLanguages;
  /** Tilpasser langpicker til visning i meny i stedet for topbanner. */
  isInMobileMenu?: boolean;
}

export interface TopBannerLangPickerComponent
  extends React.FC<TopBannerLangPickerProps> {
  Button: typeof TopBannerLangPickerButton;
}
