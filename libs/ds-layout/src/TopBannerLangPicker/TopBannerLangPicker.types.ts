import {
  Dispatch,
  ForwardRefExoticComponent,
  FunctionComponent,
  MouseEventHandler,
  RefAttributes,
  RefObject,
  SetStateAction,
} from 'react';

import { BaseProps, Languages } from '@skatteetaten/ds-core-utils';

import { LanguageItem } from './utils';
import { TopBannerMenu } from '../TopBannerExternal/TopBannerExternal.types';
import { TopBannerLangPickerButtonProps } from '../TopBannerLangPickerButton/TopBannerLangPickerButton.types';

type AdditionalLanguages = Array<LanguageItem & { flag: FunctionComponent }>;

export interface TopBannerLangPickerProps extends BaseProps {
  /** Hvilket språk som skal være forhåndsvalgt. */
  defaultLocale?: Languages | string;
  /** Callback når et språk trykkes på. */
  onLanguageClick?: MouseEventHandler<HTMLButtonElement>;
  /** Om samisk språk skal vises eller ikke. */
  showSami?: boolean;
  /** Hvilken meny som er åpen i TopBanner*/
  openMenu: TopBannerMenu;
  /** Setter hvilken meny som er åpen*/
  setOpenMenu: Dispatch<SetStateAction<TopBannerMenu>>;
  menuButtonRef?: RefObject<HTMLButtonElement>;
  additionalLanguages?: AdditionalLanguages;
}

export interface TopBannerLangPickerComponent
  extends ForwardRefExoticComponent<
    TopBannerLangPickerProps & RefAttributes<HTMLDivElement>
  > {
  Button: ForwardRefExoticComponent<
    TopBannerLangPickerButtonProps & RefAttributes<HTMLButtonElement>
  >;
}
