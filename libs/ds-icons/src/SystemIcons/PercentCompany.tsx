import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const PercentCompanySVGpath = (
  <path
    d={
      'M5.925 3.175v8.875L10.45 8.3c.175-.15.425-.025.425.2v3.55L15.4 8.3c.175-.15.425-.025.425.2v3.55h.05L20.4 8.3c.175-.125.425-.025.425.2v12.375h-17.7v-17.7h2.8Zm8.225 12.75c-1 0-1.725.75-1.725 1.875s.75 1.875 1.725 1.875c1 0 1.725-.75 1.725-1.875 0-1.15-.7-1.875-1.725-1.875Zm-.025-2.825h-.875L9.8 19.525h.875l3.45-6.425Zm.025 3.6c.375 0 .575.475.575 1.075 0 .625-.175 1.075-.575 1.075-.425 0-.575-.45-.575-1.075s.175-1.075.575-1.075Zm-4.325-3.75c-1 0-1.725.725-1.725 1.875S8.825 16.7 9.825 16.7s1.725-.75 1.725-1.875-.7-1.875-1.725-1.875Zm-.025.775c.4 0 .575.475.575 1.1 0 .65-.175 1.075-.575 1.05-.4 0-.575-.425-.575-1.05 0-.65.175-1.1.575-1.1Z'
    }
  />
);

export function PercentCompanyIcon(
  props: IconPropsWithoutSvgPath
): JSX.Element {
  return <Icon {...props} svgPath={PercentCompanySVGpath} />;
}
