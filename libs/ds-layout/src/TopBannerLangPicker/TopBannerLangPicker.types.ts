import {
  ForwardRefExoticComponent,
  MouseEventHandler,
  RefAttributes,
} from 'react';

import { BaseProps, Languages } from '@skatteetaten/ds-core-utils';

import { TopBannerLangPickerButtonProps } from '../TopBannerLangPickerButton/TopBannerLangPickerButton.types';

export interface TopBannerLangPickerProps extends BaseProps {
  /** Hvilket språk som skal være forhåndsvalgt. */
  locale?: Languages;
  /** Callback når et språk trykkes på. */
  onLanguageClick?: MouseEventHandler<HTMLButtonElement>;
  /** Om samisk språk skal vises eller ikke. */
  showSami?: boolean;
}

export interface TopBannerLangPickerComponent
  extends ForwardRefExoticComponent<
    TopBannerLangPickerProps & RefAttributes<HTMLDivElement>
  > {
  Button: ForwardRefExoticComponent<
    TopBannerLangPickerButtonProps & RefAttributes<HTMLButtonElement>
  >;
}
