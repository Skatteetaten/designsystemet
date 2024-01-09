import {
  Dispatch,
  ForwardRefExoticComponent,
  MouseEventHandler,
  RefAttributes,
  RefObject,
  SetStateAction,
} from 'react';

import { BaseProps, Languages } from '@skatteetaten/ds-core-utils';

import { TopBannerMenu } from '../TopBannerExternal/TopBannerExternal.types';
import { TopBannerLangPickerButtonProps } from '../TopBannerLangPickerButton/TopBannerLangPickerButton.types';

export interface TopBannerLangPickerProps extends BaseProps {
  /** Hvilket språk som skal være forhåndsvalgt. */
  locale?: Languages;
  /** Callback når et språk trykkes på. */
  onLanguageClick?: MouseEventHandler<HTMLButtonElement>;
  /** Om samisk språk skal vises eller ikke. */
  showSami?: boolean;
  /** Hvilken meny som er åpen i TopBanner*/
  openMenu: TopBannerMenu;
  /** Setter hvilken meny som er åpen*/
  setOpenMenu: Dispatch<SetStateAction<TopBannerMenu>>;
  menuButtonRef?: RefObject<HTMLButtonElement>;
}

export interface TopBannerLangPickerComponent
  extends ForwardRefExoticComponent<
    TopBannerLangPickerProps & RefAttributes<HTMLDivElement>
  > {
  Button: ForwardRefExoticComponent<
    TopBannerLangPickerButtonProps & RefAttributes<HTMLButtonElement>
  >;
}
